import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'
import VueMeteorTracker from 'vue-meteor-tracker'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';

Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueMeteorTracker)


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


