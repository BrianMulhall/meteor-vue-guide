import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLoggedIn: undefined
  },
  
  mutations: {
    bearer (state, payload) {
      state.user.bearer = payload
    }
  },

  actions: {
    bearer (context, payload) {
      context.commit('bearer', payload)
    }
  },

  getters: {
    bearer: state => {
      return state.user.bearer
    }
  }

})