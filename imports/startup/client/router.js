import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Books from './components/Books.vue'
import Address from './components/Address.vue'
import LiveOdds from './components/LiveOdds.vue'
import Person from './components/Person.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',           name: 'home',       component: Home },
  { path: '/books',      name: 'books',      component: Books },
  { path: '/address',    name: 'address',    component: Address },
  { path: '/live-odds',  name: 'live-odds',  component: LiveOdds },
  { path: '/person',     name: 'person',  component: Person }
  ]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router