export default {
  namespaced: true,
  state: {
    num: 0,
    price: 4
  },
  getters: {
    total(state) {
      return parseInt(state.num, 10) * parseInt(state.price, 10)
    }
  },
  mutations: {
    increment(state) {
      console.log('c increment mutation')
      state.num++
    }
  },
  actions: {
    increment({ commit }) {
      console.log('c increment action')
      commit('increment')
    }
  }
}
