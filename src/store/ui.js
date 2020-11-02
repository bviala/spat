const state = {
  isMobileMenuOpen: false
}

const getters = {
  isMobileMenuOpen: state => state.isMobileMenuOpen
}

const mutations = {
  toggleMobileMenu (state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
