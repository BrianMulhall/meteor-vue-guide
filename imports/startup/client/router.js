import Vue from "vue";
import VueRouter from "vue-router";
import { Meteor } from 'meteor/meteor'
import store  from './store'
import { Home } from '../../ui/components/Home.vue'
Vue.use(VueRouter);

const routes = [
  { 
    path: "/",
    name: "home",
    component: Home
  },
  { 
    path: "/books", 
    name: "books", 
    component: () => import(/* webpackChunkName: "books" */ '../../ui/components/Books.vue')
  },
  { 
    path: "/person", 
    name: "person", 
    component: () => import(/* webpackChunkName: "person" */ '../../ui/components/Person.vue')
  },
  { 
    path: "/register", 
    name: "register", 
    component: () => import(/* webpackChunkName: "register" */ '../../ui/components/Register.vue')
  },
  { 
    path: "/resetPassword/:token", 
    name: "resetPassword", 
    component: () => import(/* webpackChunkName: "resetPassword" */ '../../ui/components/ResetPassword.vue')
  },
  { 
    path: "/forgotPassword", 
    name: "forgotPassword", 
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../../ui/components/ForgotPassword.vue')
  },
  { 
    path: "/login", 
    name: "login", 
    component: () => import(/* webpackChunkName: "login" */ '../../ui/components/Login.vue')
  },
  { 
    path: "*",
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../../ui/components/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: "history", // hash, history and abstract are the three options
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollbehavior (to, from, savedPosition){
    if(savedPosiiton){
      return savedPosition; // restore the page to where it was the last time you were on it
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return {x:0,y:0} // the top of the page is the last choice
  }

});

// router.beforeEach(function (to, from, next) {
  

//   if ((to.path !== '/login' && to.path !== 'login' && to.path !== '/register' && to.path !== 'register' ) && !store.getters.getLoggedInStatus) {
//     next({ path: '/login' })
//   } else if ((to.path === '/login' || to.path === 'login') && store.getters.getLoggedInStatus) {
//     next({ path: '/' })
//   } else {
//     next()
//   }
// })


export default router;
