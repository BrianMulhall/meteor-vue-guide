import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  { 
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../../ui/components/Home.vue')
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




export default router;
