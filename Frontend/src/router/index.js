import Vue from 'vue'
import Router from 'vue-router'
import Doscg from '../views/Doscg.vue'
import Home from '../views/Home.vue'
import Cv from '../views/Cv.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DOSCG',
    name: 'DOSCG',
    component: Doscg
  },
  {
    path: '/Cv',
    name: 'Cv',
    component: Cv
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
