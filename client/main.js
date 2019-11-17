import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'

import './main.html'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui';

import VueMeteorTracker from 'vue-meteor-tracker'

// add in the vue plugins that are being used
Vue.use(VueMeteorTracker)

Vue.use(VueOnsen);


Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });

});


