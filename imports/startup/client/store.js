import Vue from 'vue'
import Vuex from 'vuex'
import { Meteor } from 'meteor/meteor'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isUserLoggedIn: false
  },
  
  mutations: {
    toggleLoggedInStatus(state, loggedIn) {
        state.isUserLoggedIn = loggedIn;
      }
  },

  actions: { 
  },

  getters: {
    getLoggedInStatus: state => {
      return state.isUserLoggedIn
    }
  }

});

export default store;