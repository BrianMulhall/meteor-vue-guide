import Vue from 'vue';
import App from './App.vue';
import router from './router'
import './main.html';



Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});