export default {
  namespaced: true,
  state: {
    num: 0,
    price: 3
  },
  getters: {
    total(state) {
      return parseInt(state.num, 10) * parseInt(state.price, 10)
    }
  },
  mutations: {
    increment(state) {
      console.log('b increment mutation')
      state.num++
    }
  },
  actions: {
    increment({ commit }) {
      console.log('b increment action')
      commit('increment')
    }
  }
}
