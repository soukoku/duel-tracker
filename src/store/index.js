import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    volume: 1
  },
  mutations: {
    SET_VOLUME(state, value) {
      state.volume = value
    }
  },
  actions: {},
  modules: {}
})
