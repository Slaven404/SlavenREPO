
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click.self="close" >
    <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header
          class="modal-header"
          id="modalTitle">
         
          <slot name="header">
         Detalji o studentu: 
          <button type="button" 
          @click="close"
          aria-label="Close modal">
              X
            </button>
          </slot>
        </header>
        <body class="modal-body">
    <slot name="body">

    <p class=naslov>Broj Indeksa:</p> <p class=detalj> {{detalj.BrojIndeksa}}</p> <br>
    <p class=naslov>Ime:</p> <p class=detalj> {{detalj.Ime}}</p><br>
    <p class=naslov>Prezime:</p> <p class=detalj> {{detalj.Prezime}}</p><br>
    <p class=naslov> Godina:</p> <p class=detalj>{{detalj.Godina}}</p><br>
    <p class=naslov>Status studenta:</p> <p class=detalj> {{detalj.StatusStudenta}}</p><br>

    <div class="kurs-blok">
      <h2>Kursevi:</h2>
      <ul v-for="k in kurs" :key="k.PKKursID">
        <li> {{k.NazivKursa}}</li>
      </ul>
    </div>

  </slot>
  </body>

  <footer class="modal-footer">
    <slot name="footer">
           
    </slot>
  </footer>
  </div>
  </div>
  </transition>
</template>


<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import IStudent from '@/types/student';
import { eventBus } from '../main';
import KursService from '../services/kurs-service';
import IKurs from '@/types/kurs';

const kursService = new KursService();

@Component({
  name: 'Modal',
  components: {}
})
 
export default class Modal extends Vue{
 
  kurs : IKurs[] = [];
    
  @Prop()
  detalj !: IStudent[];

  @Prop()
  studentID !: number;
//   
  close() {
    this.$emit('close');
  }
//
  created(){
    kursService.getStudentKurs(this.studentID).then(res => this.kurs = res).catch(err => console.log(err));
  }
  
  }
</script>
<style lang="scss" scoped>
  .modal-backdrop {
  
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    margin-top: 45px;
   
   
    
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
   
  }

  .modal h2{
    font-style: italic;
    text-decoration: underline;
    color:#189ad6;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .naslov{
 text-align: left;
    font-weight: bold;
    display: inline-block;
  }
  .detalj{
     text-align: right;
     display: inline-block;
   
  }

.kurs-blok{

  height: 320px;
   overflow: auto;
}
 

</style>