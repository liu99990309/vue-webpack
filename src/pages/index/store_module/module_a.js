export default {
  namespaced: true,
  state: {
    num: 0,
    price: 2
  },
  getters: {
    total(state) {
      return parseInt(state.num, 10) * parseInt(state.price, 10)
    }
  },
  mutations: {
    increment(state) {
      console.log('a increment mutation')
      state.num++
    }
  },
  actions: {
    increment({ commit }) {
      console.log('a increment action')
      commit('increment')
    }
  }
}
