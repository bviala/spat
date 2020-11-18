const LOCAL_STORAGE_KEY = 'auth'

const state = {
  isInitialized: false,
  token: null
}

const getters = {
  isInitialized: state => state.isInitialized,
  isAuthenticated: state => !!state.token
}

const mutations = {
  setInitialized (state) {
    state.isInitialized = true
  },
  setToken (state, token) {
    state.token = token
  }
}

const actions = {
  initialize ({ commit }) {
    // const token = localStorage.getItem(LOCAL_STORAGE_KEY)
    const token = 'lol'
    if (token) {
      commit('setToken', token)
    }
    commit('setInitialized')
  },
  login ({ commit }, token) {
    localStorage.setItem(LOCAL_STORAGE_KEY, token)
    commit('setToken', token)
  },
  logout ({ commit }) {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    commit('setToken', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
