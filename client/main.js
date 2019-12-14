import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'
import VueMeteorTracker from 'vue-meteor-tracker'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'
import Toasted from 'vue-toasted';
 
// global component registrations
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// plugins
Vue.use(VueMeteorTracker)
Vue.use(Toasted,{
  duration : 3000,
  position : 'top-center',
  theme: 'bubble'
})

Vue.config.productionTip = false

import './main.html'

Meteor.startup(() => {
  new Vue({
    name: "App",
    el: '#app',
    components:{
    },
    router: router,
    ...App,
  });

});


