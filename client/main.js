import { Meteor } from 'meteor/meteor';

// Vue
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { VeeValidate, ValidationObserver } from 'vee-validate';
import Toasted from 'vue-toasted';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { VueReCaptcha } from 'vue-recaptcha-v3';

// my application
import App from '../imports/ui/components/App.vue';
import router from '../imports/startup/client/router';
import store from '../imports/startup/client/store';
import '../imports/startup/client/global-subscriptions.js';
import '../imports/startup/client/ddp.js';

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
  theme: 'outline',
});
Vue.use(VueReCaptcha, { siteKey: '6LeaidIUAAAAALQPqXWjYskWAiRnL-0SEd2t-Ah1' });

Vue.config.productionTip = false;
Vue.config.silent = true;

Meteor.startup(() => {
  new Vue({
    name: 'App',
    el: '#app',
    components: {
    },
    store,
    router,
    ...App,
  });
});
