import Vue from 'vue';
import App from '.imports/ui/components/App.vue';
import router from '../imports/startup/client/router'
import './main.html';



Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  });

});

Meteor.startup( () => {  
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB0YGuP67L0NQ2aUpcWmfZtYj4RBnDFO8M&libraries=places&callback=initAutocomplete");
})


