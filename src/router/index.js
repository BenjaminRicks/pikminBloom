import Vue from 'vue'
import VueRouter from 'vue-router'
import Pikmin from '../views/Pikmin.vue'
import NewPikmin from '../views/NewPikmin.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pikmin',
    component: Pikmin
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },

  {
    path: '/newpikmin',
    name: 'NewPikmin',
    component: NewPikmin
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
