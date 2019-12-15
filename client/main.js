import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'
import store  from '../imports/startup/client/store'
import '../imports/startup/client/accounts.js'
import VueMeteorTracker from 'vue-meteor-tracker'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'
import Toasted from 'vue-toasted';
import VueRouter from "vue-router"; 
import Vuex from 'vuex'

// global component registrations
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// plugins
Vue.use(VueRouter);
Vue.use(VueMeteorTracker)
Vue.use(Toasted,{
  duration : 3000,
  position : 'top-center',
  theme: 'bubble'
})
Vue.use(Vuex)

Vue.config.productionTip = false

import './main.html'

Meteor.startup(() => {
  new Vue({
    name: "App",
    el: '#app',
    components:{
    },
    store: store,
    router: router,
    ...App,
  });

});


