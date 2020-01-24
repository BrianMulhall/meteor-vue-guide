import Vue from 'vue';
import VueRouter from 'vue-router';
import { Meteor } from 'meteor/meteor';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../ui/components/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../ui/components/About.vue'),
  },
  {
    path: '/addRemoveEmails',
    name: 'addRemoveEmails',
    component: () => import('../../ui/components/AddRemoveEmails.vue'),
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: () => import('../../ui/components/CreateUser.vue'),
  },
  {
    path: '/changeUsername',
    name: 'changeUsername',
    component: () => import('../../ui/components/ChangeUsername.vue'),
  },
  {
    path: '/changePassword',
    name: 'changePassword',
    component: () => import('../../ui/components/ChangePassword.vue'),
  },
  {
    path: '/editUserProfile',
    name: 'editUserProfile',
    component: () => import('../../ui/components/EditUserProfile.vue'),
  },
  {
    path: '/enrollAccount/:token',
    name: 'enrollAccount',
    component: () => import('../../ui/components/EnrollAccount.vue'),
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('../../ui/components/ForgotPassword.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../ui/components/Login.vue'),
  },
  {
    path: '/userManagement',
    name: 'userManagement',
    component: () => import('../../ui/components/UserManagement.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../../ui/components/Register.vue'),
  },
  {
    path: '/roleManagement',
    name: 'roleManagement',
    component: () => import('../../ui/components/RoleManagement.vue'),
  },
  {
    path: '/resetPassword/:token',
    name: 'resetPassword',
    component: () => import('../../ui/components/ResetPassword.vue'),
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: () => import('../../ui/components/UserProfile.vue'),
  },
  {
    path: '/verifyEmail/:token',
    name: 'verifyEmail',
    component: () => import('../../ui/components/VerifyEmail.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../../ui/components/NotFound.vue'),
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
  if ((to.path !== '/login' && to.path !== 'login'
    && to.path !== '/register' && to.path !== 'register'
    && to.path !== '/forgotPassword' && to.path !== 'forgotPassword'
    && !to.path.startsWith('/restPassword') && !to.path.startsWith('restPassword')
    && !to.path.startsWith('/verifyEmail') && !to.path.startsWith('verifyEmail')
    && !to.path.startsWith('/enrollAccount') && !to.path.startsWith('enrollAccount')) && !Meteor.userId()) {
    next({ path: '/login' });
  } else if ((to.path === '/login' || to.path === 'login') && Meteor.userId()) {
    next({ path: '/' });
  } else {
    next();
  }
});


export default router;
