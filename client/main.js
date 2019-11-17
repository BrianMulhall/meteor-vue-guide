import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'
import VueMeteorTracker from 'vue-meteor-tracker'

// add in the vue plugins that are being used
Vue.use(VueMeteorTracker)

import './main.html'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });

});


