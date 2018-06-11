import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './store_module/module_a'
import moduleB from './store_module/module_b'
import moduleC from './store_module/module_c'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    num: 0,
    price: 1
  },
  getters: {
    total(state) {
      return parseInt(state.num, 10) * parseInt(state.price, 10)
    }
  },
  mutations: {
    increment(state) {
      console.log('global increment mutation')
      state.num++
    }
  },
  actions: {
    increment({ commit }) {
      console.log('global increment action')
      commit('increment')
    }
  },
  modules: {
    moduleA,
    moduleB,
    moduleC
  }
})
