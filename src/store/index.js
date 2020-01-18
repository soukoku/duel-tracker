import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    volume: 1,
    defaultLife: 8000,
    defaultPlayers: 1
  },
  mutations: {
    SET_VOLUME(state, value) {
      state.volume = value
    },
    SET_DEFAULTLIFE(state, value) {
      state.defaultLife = value
    },
    SET_DEFAULTPLAYER(state, value) {
      state.defaultPlayers = value
    }
  },
  actions: {},
  modules: {}
})
