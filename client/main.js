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

Meteor.startup( () => {
  debugger;
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB0YGuP67L0NQ2aUpcWmfZtYj4RBnDFO8M&libraries=places&callback=initAutocomplete");
})


