<template>
  <div class="studenti-tabela">
        <div> <button class="btnNovi" v-on:click="showForm" 
        v-if="!IsDetailsVisible && !IsFormVisible && isLoggedIn()" > Novi kurs</button> 
        </div>
    <div v-show="!IsDetailsVisible" v-if="!IsFormVisible">
        <h1> Pregled kurseva: </h1>
    <table class="fl-table" v-if="kurs.length" >
    <thead>
    <tr>
      <th scope="col"> Naziv kursa </th>
      <th colspan="3" scope="colgroup"> Opcije </th>
    </tr>
    </thead>

    <tbody class="student-container">
    <tr  v-for="k in kurs" :key="k.PKKursID">
      <th scope="row">{{k.NazivKursa}} </th>
      <td @click="getStudentsOnKurs(k.PKKursID, k.NazivKursa)" class="detalji"> Detalji   </td>
      <td @click="potvrdaBrisanja(k.NazivKursa ,k.PKKursID)" class="obrisi">Obrisi</td>
    </tr>  
    </tbody>
    </table>
  </div>

  <div v-show="IsDetailsVisible" >
    <div> <button class="btnNovi" v-on:click="goBack" 
    v-if="!IsFormVisible"> Nazad</button> 
    </div>
    <h1 style="text-decoration: underline;">  {{this.odabraniKurs}}  </h1>
    <p style="font-style: italic"> Studenti na kursu :</p>
  <table class="fl-table" v-if="kurs.length" >
  <thead>
  <tr>
    <th scope="col"> Broj Indeksa </th>
    <th scope="col"> Ime </th>
    <th scope="col"> Prezime </th>
    <th scope="col"> Godina </th>
    <th scope="col"> Status Studenta </th>
  </tr>
  </thead>

  <tbody class="student-container" v-if="detalji.length" >
  <tr  v-for="d in detalji" :key="d.Student.pkStudentID">
    <th scope="row">{{d.Student.BrojIndeksa}} </th>
    <td data-title="Ime">  {{d.Student.Ime}} </td>
    <td data-title="Prezime">  {{d.Student.Prezime}} </td>
    <td data-title="Godina"> {{d.Student.Godina}}</td>
    <td data-title="Status Studenta"> {{d.Student.StatusStudenta}}</td>
  </tr>  
  </tbody>
</table>
</div>

  <Forma v-show="IsFormVisible" > </Forma>

</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import Alert from "vue-simple-alert";
import Forma from "@/components/KursForma.vue";
import IKurs from "@/types/kurs";
import KursService  from '../services/kurs-service';
import { isLoggedIn } from "../services/auth-service";

const kursService = new KursService();
Vue.use(Alert);

@Component({
  name: 'Kurs',
  components: {
     Forma
  }
})

export default class Kurs extends Vue {

kurs : IKurs[] = [];
detalji : IKurs[] = [];
  
  odabraniKurs : string ="";
  IsDetailsVisible : boolean = false;
  IsFormVisible : boolean = false;
  
  showForm(){  
  this.IsFormVisible = true;
  }
//
  goBack(){
  this.IsDetailsVisible = false;
  }
 //
  getAllKurs(){
    kursService.getAllKurs().then(res => this.kurs = res).catch(err=>console.log(err));
  }
//
  getStudentsOnKurs(id: number, oKurs : string){
    this.odabraniKurs = oKurs;
    kursService.getKursStudentbyID(id).
    then(res => this.detalji = res).
    catch(err => console.log(err));
    this.IsDetailsVisible = true;
  }
//
  async obrisiKurs(id : number){
    await kursService.deleteKurs(id);
    await this.getAllKurs();
  }
//
potvrdaBrisanja(NazivKursa: string, id: number){
    this.$confirm("Da li ste sigurni da zelite obrisati kurs?", NazivKursa,
      "question").then(()=>{
        this.obrisiKurs(id);
      });
  }
//
 isLoggedIn() {
        return isLoggedIn(); 
 }
//
  created(){
    this.getAllKurs();
  }
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
  .detalji{
    color: #1d5d9c;
    font-weight: bold;
  }

  .izmjeni:hover, .detalji:hover, .obrisi:hover{
    cursor: pointer;
    color:  #16a085;
    text-decoration: underline;
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
