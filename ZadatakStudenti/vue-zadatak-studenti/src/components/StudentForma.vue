<template>
<div id="upravljanje-studentom">
    <h1  @click="provjeraDetalja()" class="classh1">Student:</h1>
       
    <div class="form-style-5">
    <ValidationObserver v-slot="{ invalid }">
    <form>
    <fieldset>    
        <legend><span class="informacije">Informacije:</span> </legend>
              
        <label for="brIndeksa">Broj indeksa:  </label>
        <validation-provider rules="required|max:10" v-slot="{errors}">
            <div class="error">{{ errors[0] }}</div>
            <input type="text" id="brIndeksa" v-model="noviStudent.BrojIndeksa" placeholder="Broj indeksa *">
        </validation-provider>

        <label for="">Ime:</label>
            <input type="text"  id="ime"  v-model="noviStudent.Ime" placeholder="Ime">   

        <label for="prezime">Prezime:</label>
            <input type="text"   id="prezime"  v-model="noviStudent.Prezime" placeholder="Prezime">
               
        <validation-provider rules="max_value:7|min_value:0" v-slot="{errors}">
        <label for="godina">Godina: </label>
            <div class="error">{{ errors[0] }}</div>
            <input type="number"  id="godina"  v-model="noviStudent.Godina" placeholder="Godina studiranja *">
        </validation-provider>

        <label for="statusi">Status studiranja: </label>
        <validation-provider rules="required" v-slot="{errors}">
            <div class="error">{{ errors[0] }}</div>
            <select id="statusi" v-model="noviStudent.StatusStudenta">
                <option v-for="status in statusi" v-bind:key="status.id"
                    :value="status.NazivStatusa">
                    {{status.NazivStatusa}}
                </option>   
            </select>
        </validation-provider>

    </fieldset>
        <button :disabled="invalid" @click="sacuvajIzmjeni(noviStudent.PKStudentID)" >Sacuvaj</button>
        <button @click="close" >Odbaci</button>

    </form>
    </ValidationObserver>
    </div>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import IStudent from '@/types/student';
import IStatus from '@/types/statusi';
import StudentService  from '../services/student-service';
import {eventBus} from '@/main'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { ValidationObserver } from 'vee-validate';
import Kurs from '../views/Kurs.vue';



const studentService = new StudentService();



@Component({
  name: 'Forma',
  components: {
      ValidationProvider,
      ValidationObserver
    
  }
 
})
export default class Forma extends Vue{

  submitted : boolean = false;

statusi: IStatus[] = [];
   
noviStudent: IStudent= {
      PKStudentID: NaN,
       BrojIndeksa : "",
       Ime: "",
       Prezime: "",
       Godina: 0,
       StatusStudenta :"" ,
};
// 
   close () {
       this.$emit('close')
    }
// 
    sacuvajIzmjeni(id : number){
       if(isNaN(id)){
            this.sacuvajStudenta();
       }
       else {
           this.sacuvajIzmjene(id);
       }
    }
//
    sacuvajStudenta(){
        studentService.postStudenta(this.noviStudent);   
    }
//        
    async sacuvajIzmjene(id : number){
        this.$forceUpdate();
        await studentService.putStudent(id, this.noviStudent)  
    }
//    
     created(){
        studentService.getStatus()
        .then(res => this.statusi = res)
        .catch(err => console.error(err));

        eventBus.$on('zahtjev', (payload : IStudent[]) => {
            this.noviStudent = payload[0];
            this.$nextTick( () => {
            this.noviStudent = payload[0]
           })  
       });
    }
}
</script>

<style scoped>
 .form-style-5 {
        max-width: 500px;
        padding: 10px 20px;
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
        margin-top: 28px;
    }
    .form-style-5 button {
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
  .form-style-5 button:hover {
cursor: default;
         background: #109177;
  } 
</style>