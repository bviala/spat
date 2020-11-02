import Vue from 'vue'
import Vuex from 'vuex'

import authModule from '@/store/auth'
import uiModule from '@/store/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: authModule,
    ui: uiModule
  }
})
