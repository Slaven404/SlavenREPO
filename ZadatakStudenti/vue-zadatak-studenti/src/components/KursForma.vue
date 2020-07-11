<template>
<div id="kurs-forma" class="form-style-5">
    <h1 class="classh1">Novi kurs:</h1>
    <div>
    <ValidationObserver v-slot="{ invalid }">
        <form>
        <fieldset>
            <label for="brIndeksa">Naziv kursa:  </label>
            <validation-provider rules="required" v-slot="{errors}">
                <div class="error">{{ errors[0] }}</div>
            <input type="text" id="brIndeksa" v-model="noviKurs.nazivKursa" placeholder="Naziv Kursa *">
            </validation-provider>
        </fieldset>

        <div style="display:flex"><input class="add" @click="showList()" v-show="!IsListVisible" value="Dodaj studente"></div>
        
    <div style="display:flex" v-if="IsListVisible">
        <div class="lista-div" >
        <table class="lista">
            <thead>
            <tr>
            <th scope="col"> Broj Indeksa </th>
            <th scope="col"> Ime </th>
            <th scope="col"> Prezime </th>
            <th scope="col"> Godina </th>
            <th scope="col"> Status Studenta </th>
            <th  scope="colgroup"> Dodaj </th>
            </tr>
            </thead>

            <tbody>
            <tr  v-for="(ls, index) in listaStudenata" :key="ls.pkStudentID">
            <th scope="row">{{ls.BrojIndeksa}} </th>
            <td data-title="Ime">  {{ls.Ime}} </td>
            <td data-title="Prezime">  {{ls.Prezime}} </td>
            <td data-title="Godina"> {{ls.Godina}}</td>
            <td data-title="Status Studenta"> {{ls.StatusStudenta}}</td>

                <td><input type="button" @click="dodajStudenta(ls, index)" 
                class="plus" value="+">  
                </td>
            </tr>  
            </tbody>
        </table>
        </div>

        <div class="dodatiStudenti">
            <h1> Dodati studenti: </h1>
            <ul v-for="(dds, index) in dodatiStudenti" :key="dds.pkStudentID">
                <li> ({{dds.BrojIndeksa}}) {{dds.Ime}} {{dds.Prezime}} 
                    <input id="ukloni" class="ukloni" @click="ukloniStudenta(index, dds)" 
                    type="button" value="X">
                </li>
            </ul>
        </div>
    </div>
   
        <button :disabled="invalid" @click="sacuvajKurs()" class="save">Sacuvaj</button>
        <button @click="close" class="save" >Odbaci</button>
            
    </form>
    </ValidationObserver>
    </div>
</div>
</template>

<script lang="ts">

import {Component, Vue, Prop, PropSync} from 'vue-property-decorator';
import IStudent from '@/types/student';
import StudentService  from '../services/student-service';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';
import IKurs from '@/types/kurs';
import KursService from '../services/kurs-service';

const studentService = new StudentService();
const kursService = new KursService();


@Component({
  name: 'Forma',
  components: {
      ValidationProvider,
      ValidationObserver
  }
})

export default class Forma extends Vue{

IsListVisible : boolean = false;
dodatiStudenti : IStudent[] = [];

noviKurs : IKurs = {
    pkKursId: NaN,
    nazivKursa : "",
    students : this.dodatiStudenti  
 };

listaStudenata : IStudent[] = [];

noviStudent: IStudent= {
      PKStudentID: NaN,
       BrojIndeksa : "",
       Ime: "",
       Prezime: "",
       Godina: NaN,
       StatusStudenta :"" 
};
//
    showList(){
        this.IsListVisible = true;
    }
// 
    dodajStudenta(student : IStudent, index : number){
        this.dodatiStudenti.push(student);
        this.listaStudenata.splice(index, 1);

        Vue.set(this.noviKurs, 'student', this.dodatiStudenti);
    }
//
    ukloniStudenta (index : number, student : IStudent){
        this.dodatiStudenti.splice(index, 1);
        this.listaStudenata.push(student);
    }
//
    getListaStudenata(){
        studentService.getAllStudents().then(res => this.listaStudenata = res).catch(err => console.log(err));
    }
//
    async sacuvajKurs(){
        Vue.set(this.noviKurs, 'student', this.dodatiStudenti);
        await kursService.postKurs(this.noviKurs); 
    }
//
    close(){
        this.$emit('close')
    }
//
    created(){
            this.getListaStudenata();
    }
  
}
   
   

</script>

<style scoped>
 .form-style-5 {
       
        background: #f4f7f8;
        margin: 10px auto;
        padding: 20px;
        background: #f4f7f8;
        border-radius: 8px;
        font-family: Georgia, "Times New Roman", Times, serif;
    }

    .form-style-5 fieldset {
        border: none;
    }

    .form-style-5 legend {
        font-size: 1.4em;
        margin-bottom: 10px;
    }

    .form-style-5 label {
        display: block;
        margin-bottom: 8px;
    }
    .form-style-5 input[type="text"],
    .form-style-5 input[type="date"],
    .form-style-5 input[type="datetime"],
    .form-style-5 input[type="email"],
    .form-style-5 input[type="number"],
    .form-style-5 input[type="search"],
    .form-style-5 input[type="time"],
    .form-style-5 input[type="url"],
    .form-style-5 textarea,
    .form-style-5 select {
        font-family: Georgia, "Times New Roman", Times, serif;
        background: rgba(255,255,255,.1);
        border: none;
        border-radius: 4px;
        font-size: 15px;
        margin: 0;
        outline: 0;
        padding: 10px;
        width: 90%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        background-color: #e8eeef;
        color: #8a97a0;
        -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
        margin-bottom: 30px;
       }

        .form-style-5 input[type="text"]:focus,
        .form-style-5 input[type="date"]:focus,
        .form-style-5 input[type="datetime"]:focus,
        .form-style-5 input[type="email"]:focus,
        .form-style-5 input[type="number"]:focus,
        .form-style-5 input[type="search"]:focus,
        .form-style-5 input[type="time"]:focus,
        .form-style-5 input[type="url"]:focus,
        .form-style-5 textarea:focus,
        .form-style-5 select:focus {
            background: #d2d9dd;
        }

    .form-style-5 select {
        -webkit-appearance: menulist-button;
        height: 35px;
    }

        .form-style-5 .informacije {
            position: relative;
            background: #1abc9c;
            color: #fff;
            height: 30px;
            width: 100%;
            display: inline-block;
            font-size: 0.8em;
            margin-right: 4px;
            line-height: 30px;
            text-align: center;
            text-shadow: 0 1px 0 rgba(255,255,255,0.2);
            border-radius: 15px 15px 15px 0px;
        }

        .form-style-5 input[type="submit"],
        .form-style-5 input[type="button"]
       {
            position: relative;
            display: inline-block;
           
            color: #FFF;
            margin: 0 auto;
            background: #1abc9c;
            font-size: 18px;
            text-align: center;
            font-style: normal;
            width: auto;
            border: 1px solid #16a085;
            border-width: 1px 1px 3px;
           
        }

        .form-style-5 input[type="submit"]:hover,
        .form-style-5 input[type="button"]:hover {
            background: #109177;
        }
        .error{
            
           margin-top: 0;
            font-size: 4mm;
            color: red;

        }
    .classh1 {
        position: relative;
        display: block;
        padding: 19px 0px 18px 0px;
        color: #FFF;
        margin: 0 auto;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
    }
    .form-style-5 button {
       height: 100%;
       
    }

    .save {
 position: relative;
        display: block;
        padding: 19px 39px 18px 39px;
        color: #FFF;
        margin: 0 auto;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
    }
    .add{
        position: relative;
        display: block;
        float:left;
        padding: 19px 39px 18px 39px;
        color: #FFF;
        margin: 0 auto;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: auto;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
    }
    .add:hover, .save:hover{
        cursor: default;
         background: #109177;

    }
    .plus {
        position: relative;
        display: block;
        
        color: rgb(254, 255, 254);
        margin: 0 auto;
        background: #7024d4;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
       
    }
    
    .lista-div {
               position: relative;
           display: inline-block;
            width: 60%;
    }
.ukloni{
    font-family: Hack, monospace;
           font-size: 1.1em;  
           margin-left: 5px;
           color: red;
}
#ukloni{
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-weight: bolder;
           font-size: 1.3em;  
             margin-left: 9px;
    color: red;
     border: 1px solid #000000;
      border-width: 1px 1px 2px;
}
    .lista{
      
        height: 500px;
         overflow: auto;
        border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    min-width: 520px;
    white-space: nowrap;
    background-color: white;
    display: inline-block;
    
    }
.lista td, .lista th {
    text-align: center;
    padding: 8px;
}

.lista td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.lista thead th {
    color: #ffffff;
    background: #4a69cc;
}

.dodatiStudenti {
    display: inline-block;
    margin: 0;
   border: none;
     height: 500px;
overflow: auto;
        border-radius: 5px;
        border: solid 2px;
        border-color:#16a085;
    font-size: 12px;
    font-weight: normal;
    border-collapse: collapse;
    width: 40%;
    min-width: 320px;
    white-space: nowrap;
    background-color: white;
    
}

.dodatiStudenti ul{
    width : 40%;
}

@media (max-width: 767px) {
    .lista {
        display: block;
        width: 100%;
    }
    .lista:before{
       
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .lista thead, .lista tbody, .lista thead th {
        display: block;
    }
    .lista thead th:last-child{
        border-bottom: none;
    }
    .lista thead {
        float: left;
    }
    .lista tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .lista td, .lista th {
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
    .lista thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .lista tbody tr {
        display: table-cell;
    }
    .lista tbody tr:nth-child(odd) {
        background: none;
    }
    .lista tr:nth-child(even) {
        background: transparent;
    }
    .lista tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .lista tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .lista tbody td {
        display: block;
        text-align: center;
    }
}

</style>