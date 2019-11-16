import Vue from 'vue'
import VueRouter from 'vue-router'

import Books from './Books.vue'
import Address from './Address.vue'
import LiveOdds from './LiveOdds.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',         name: 'dashboard', component: Books },
  { path: '/address',  name: 'address',  component: Address },
  { path: '/live-odds',  name: 'live-odds',  component: LiveOdds },
  ]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router