<template>
  <div class="studenti-tabela">
   
  <div> <button class="btnNovi" v-on:click="showForm"
   v-if="!IsFormVisible && isLoggedIn()"> Novi student</button> 
  </div>
  <div v-show="IsTableVisible">
    <h1> Pregled studenata: </h1>
  <table class="fl-table" v-if="studenti.length" >
  <thead>
  <tr>
    <th scope="col"> Broj Indeksa </th>
    <th scope="col"> Ime </th>
    <th scope="col"> Prezime </th>
    <th scope="col"> Godina </th>
    <th scope="col"> Status Studenta </th>
    <th colspan="3" scope="colgroup"> Opcije </th>
  </tr>
  </thead>

  <tbody class="student-container" >
  <tr  v-for="student in studenti" :key="student.PKStudentID">
    <th scope="row">{{student.BrojIndeksa}} </th>
    <td data-title="Ime">  {{student.Ime}} </td>
    <td data-title="Prezime">  {{student.Prezime}} </td>
    <td data-title="Godina"> {{student.Godina}}</td>
    <td data-title="Status Studenta"> {{student.StatusStudenta}}</td>

        <td @click="showModal(); getStudentByID(student.PKStudentID)"  class="detalji">
          Detalji</td>
        <td @click="zahtjevIzmjena(student.PKStudentID)" class="izmjeni">
          Izmjeni</td>
        <td @click="potvrdaBrisanja(student.Ime, student.Prezime, student.PKStudentID)"
          class="obrisi">Obrisi</td>  
  </tr>  
  </tbody>
  </table>
</div>

  <div  v-show="IsEditVisible">  
      <h1> Izmjena studenata: </h1>
    <table class="fl-table" v-if="izmjenastudenta.length">
    <thead>
    <tr>
      <th scope="col"> Broj Indeksa </th>
      <th scope="col"> Ime </th>
      <th scope="col"> Prezime </th>
      <th scope="col"> Godina </th>
      <th scope="col"> Status Studenta </th>
    </tr>
    </thead>

    <tbody class="student-container">
    <tr  v-for="student in izmjenastudenta" :key="student.PKStudentID">
      <th scope="row">{{student.BrojIndeksa}} </th>
      <td data-title="Ime">  {{student.Ime}} </td>
      <td data-title="Prezime">  {{student.Prezime}} </td>
      <td data-title="Godina"> {{student.Godina}}</td>
      <td data-title="Status Studenta"> {{student.StatusStudenta}}</td>
    </tr>  
    </tbody>
    </table>
</div>

    <Modal v-for="detalj in detalji" :key="detalj.PKStudentID" 
    :detalj="detalj" :studentID="detalj.PKStudentID"
    v-show="IsModalVisible"
    @close="closeModal">
    </Modal>

 <Forma v-show="IsFormVisible"> </Forma>

 </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import IStudent from "@/types/student";
import StudentService  from '../services/student-service';
import Alert from "vue-simple-alert";
import Modal from "@/components/modal.vue"
import router from '../router';
import { eventBus } from '../main';
import Forma from "@/components/StudentForma.vue";
import { isLoggedIn } from "../services/auth-service";





const studentService = new StudentService();

Vue.use(Alert);





@Component({
  name: 'ListaStudenata',
  components: {
     Modal,
     Forma

  }
})

export default class ListaStudenata extends Vue {
   
studenti: IStudent[] = [];
detalji : IStudent[] = [];
izmjenastudenta : IStudent[] = [];

  IsModalVisible : boolean = false;
  IsFormVisible : boolean = false;
  IsTableVisible : boolean = true;
  IsEditVisible : boolean = false;
//
  showForm(){
    this.IsTableVisible = false;
    this.IsFormVisible = true;
  }
//
  showModal(){
    this.IsModalVisible=true;
  }
  closeModal(){
    this.IsModalVisible=false;
  }
//
    get studentCount(){
  return this.studenti.length;
  }
//
  getAllStudent(){
  studentService.getAllStudents()
      .then(res => this.studenti = res)
      .catch(err => console.error(err))
  }
//
  async getStudentByID(id : number){
  await studentService.getStudentsByID(id).then(res => this.detalji = res).catch(err => console.error(err));
  }
//
  async zahtjevIzmjena(id : number){
    this.showForm();
    this.IsEditVisible = true;
      await studentService.getStudentsByID(id).then(res => this.izmjenastudenta = res).catch(err => console.error(err));
    eventBus.$emit('zahtjev', this.izmjenastudenta);
  }
//
  isLoggedIn() {
          return isLoggedIn(); 
  }
 //
  created(){
    this.getAllStudent();
  }
//
  async obrisiStudenta(id: number){
     await studentService.deleteStudent(id);
     await this.getAllStudent();
  }
//
  potvrdaBrisanja(ime: string, prezime: string, id: number){
    this.$confirm("Da li ste sigurni da zelite obrisati studenta?", ime + prezime,
      "question").then(()=>{
        this.obrisiStudenta(id);
      }).catch(err => console.log("Cancaled..."));
      
  }
//

}
</script>

<style scoped lang="scss">
*{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
}
h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
}
.obrisi{
  color: rgb(255, 81, 0);
  font-weight: bold;
}
.izmjeni{
  color: #4FC3A1;
 font-weight: bold;
  }
  .izmjeni:hover, .detalji:hover, .obrisi:hover{
    cursor: pointer;
    color:  #16a085;
    text-decoration: underline;
  }
  .btnNovi:hover{
     cursor: default;
         background: #109177;

  }
  .detalji{
    color: #1d5d9c;
    font-weight: bold;
  }
  .btnNovi {
    position: relative;
        display: block;
        padding: 8px 15px 8px 15px;
        color: #FFF;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: auto;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
        margin-top: 10px;
   
  align-items: center;
  }

/* Table Styles */

.studenti-tabela{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}



.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>