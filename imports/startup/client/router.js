import Vue from 'vue';
import VueRouter from 'vue-router';
import { Meteor } from 'meteor/meteor';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../ui/components/Home.vue'),
    meta: { private: true },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../ui/components/About.vue'),
    meta: { private: true },
  },
  {
    path: '/addRemoveEmails',
    name: 'addRemoveEmails',
    component: () => import('../../ui/components/AddRemoveEmails.vue'),
    meta: { private: true },
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: () => import('../../ui/components/CreateUser.vue'),
    meta: { private: true },
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: () => import('../../ui/components/UserProfile.vue'),
    meta: { private: true },
  },
  {
    path: '/enrollAccount/:token',
    name: 'enrollAccount',
    component: () => import('../../ui/components/EnrollAccount.vue'),
    meta: { guest: true },
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('../../ui/components/ForgotPassword.vue'),
    meta: { guest: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../ui/components/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/userManagement',
    name: 'userManagement',
    component: () => import('../../ui/components/UserManagement.vue'),
    meta: { private: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../../ui/components/Register.vue'),
    meta: { guest: true },
  },
  {
    path: '/roleManagement',
    name: 'roleManagement',
    component: () => import('../../ui/components/RoleManagement.vue'),
    meta: { private: true },
  },
  {
    path: '/resetPassword/:token',
    name: 'resetPassword',
    component: () => import('../../ui/components/ResetPassword.vue'),
    meta: { guest: true },
  },
  {
    path: '/verifyEmail/:token',
    name: 'verifyEmail',
    component: () => import('../../ui/components/VerifyEmail.vue'),
    meta: { guest: true },
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../../ui/components/NotFound.vue'),
    meta: { private: true },
  },
];

const router = new VueRouter({
  mode: 'history', // hash, history and abstract are the three options
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollbehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // restore the page to where it was the last time you were on it
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 }; // the top of the page is the last choice
  },

});


router.beforeEach(function (to, from, next) {
  if (to.meta.private && !Meteor.userId()) {
    next({ path: '/login' });
  } else if ((to.path === '/login' || to.path === 'login') && Meteor.userId()) {
    next({ path: '/' });
  } else {
    next();
  }
});


export default router;
