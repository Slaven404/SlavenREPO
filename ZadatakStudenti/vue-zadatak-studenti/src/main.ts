import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, extend } from 'vee-validate';
import { required, max_value, min_value } from 'vee-validate/dist/rules';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


export const eventBus = new Vue();

Vue.config.productionTip = false;




extend('required', {
  ...required,
  message: 'Ovo polje je obavezno'
  
}
);
extend('max_value', {
  ...max_value,
  message: 'Godina studiranja ne moze biti veća od 7'
});

extend('min_value', {
  ...min_value,
  message: 'Godina mora biti pozitivan broj'
});

extend('max', value => {
  if(value.length <=10) {
    return true;
  }
  else{
    return 'Broj indeksa ne moze biti veci od 10';
  }
  
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.mixin({
  data: function () {
      return {
        eventBus: eventBus,
        
        
      }
  }
})

