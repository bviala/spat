import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import HomeView from '@/views/HomeView'
import LoginView from '@/views/LoginView'
import PageNotFoundView from '@/views/PageNotFoundView'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'AppLayout',
        private: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFoundView
    }
  ]
})

router.beforeEach((to, _, next) => {
  // init app auth state
  if (!store.getters['auth/isInitialized']) {
    store.dispatch('auth/initialize')
  }

  // check for required login
  if (to.matched.some(route => route.meta.private) && !store.getters['auth/isAuthenticated']) {
    next({
      name: 'login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
