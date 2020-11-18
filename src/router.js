import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
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
        private: true,
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        layout: 'AppLayout',
        private: true,
        title: 'About'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Sign in'
      },
      beforeEnter: (_, __, next) => {
        if (store.getters['auth/isAuthenticated']) {
          console.log('test')
          next('/')
        }
        next()
      }
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
  if (to.meta && to.meta.private && !store.getters['auth/isAuthenticated']) {
    next({
      name: 'login',
      query: { redirect: to.fullPath }
    })
    return
  }

  // set document title
  if (!to.meta.title) {
    const parentRouteWithTitle = to.matched.slice().reverse().find(x => x.meta && x.meta.title)
    to.meta.title = parentRouteWithTitle ? parentRouteWithTitle.meta.title : null
  }
  document.title = to.meta.title ? `spat - ${to.meta.title}` : 'spat'

  next()
})

router.afterEach(() => {
  if (store.getters['ui/isMobileMenuOpen']) {
    store.commit('ui/toggleMobileMenu')
  }
})

export default router
