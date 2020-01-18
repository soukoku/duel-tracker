import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  volume: 1,
  defaultLife: 8000,
  defaultPlayers: 1,
  ...JSON.parse(localStorage.getItem('dt-state') || '{}')
}

function persist(state) {
  // explode state to keep only props
  localStorage.setItem('dt-state', JSON.stringify({ ...state }))
}

export default new Vuex.Store({
  state: state,
  mutations: {
    SET_VOLUME(state, value) {
      state.volume = value
      persist(state)
    },
    SET_DEFAULTLIFE(state, value) {
      state.defaultLife = value
      persist(state)
    },
    SET_DEFAULTPLAYER(state, value) {
      state.defaultPlayers = value
      persist(state)
    }
  },
  actions: {},
  modules: {}
})
