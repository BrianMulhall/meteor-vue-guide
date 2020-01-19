// Vue
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import Toasted from 'vue-toasted';
import VueRouter from "vue-router";
import Vuex from 'vuex';


// my application
import App from '../imports/ui/components/App.vue';
import router from '../imports/startup/client/router';
import store from '../imports/startup/client/store';
import '../imports/startup/client/global-subscriptions.js';
// CSS
import 'bootstrap-social/bootstrap-social.css';


// global component registrations
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


// plugins
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMeteorTracker);
Vue.use(Toasted, {
  duration: 2000,
  position: 'top-right',
  theme: 'outline'
});


Vue.config.productionTip = false;
Vue.config.silent = true;

import './main.html';

Meteor.startup(() => {
  new Vue({
    name: "App",
    el: '#app',
    components: {
    },
    store: store,
    router: router,
    ...App,
  });
});
