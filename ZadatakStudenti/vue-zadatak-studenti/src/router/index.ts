import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ListStudenata from  '../views/ListaStudenata.vue'
import Kurs from '../views/Kurs.vue'
import Callback from '../components/CallBack.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ListaStudenata',
    component: ListStudenata,
  
  },
  {
    path: '/kurs',
    name: 'Kurs',
    component: Kurs,
   
  },
  {
    path : '/callback',
    name: 'Callback',
    component : Callback
  }
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
