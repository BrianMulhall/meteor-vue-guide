import Vue from 'vue'
import VueRouter from 'vue-router'

import Home     from '../../ui/components/Home.vue'
import Books    from '../../ui/components/Books.vue'
import Address  from '../../ui/components/Address.vue'
import LiveOdds from '../../ui/components/LiveOdds.vue'
import Person   from '../../ui/components/Person.vue'
import NotFound from '../../ui/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',           name: 'home',       component: Home },
  { path: '/books',      name: 'books',      component: Books },
  { path: '/address',    name: 'address',    component: Address },
  { path: '/live-odds',  name: 'live-odds',  component: LiveOdds },
  { path: '/person',     name: 'person',     component: Person },
  { path: '*',                               component: NotFound }
  ]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router