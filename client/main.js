import Vue from 'vue'
import App from '../imports/ui/components/App.vue'
import router from '../imports/startup/client/router'
import VueMeteorTracker from 'vue-meteor-tracker'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import { AutoComplete, ComboBox, DropDownList, MultiSelect, MultiColumnComboBox, 
         MultiColumnComboBoxColumn, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { Grid } from '@progress/kendo-vue-grid'

Vue.component(Calendar.name, Calendar)
Vue.component('Grid', Grid);

Vue.use(DropdownsInstaller)
Vue.use(VueMeteorTracker)


import './main.html'

Meteor.startup(() => {
  new Vue({
    name: "App",
    el: '#app',
    components:{
      Calendar,
      AutoComplete,
       ComboBox,
       DropDownList,
       MultiSelect,
       MultiColumnComboBox,
       MultiColumnComboBoxColumn
    },
    router,
    ...App,
  });

});


