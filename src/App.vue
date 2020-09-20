<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AppLayout from '@/layouts/AppLayout'
import DefaultLayout from '@/layouts/DefaultLayout'

export default {
  components: {
    AppLayout, DefaultLayout
  },
  computed: {
    layout () {
      var routeWithLayout = this.$route.matched.slice().reverse().find(x => x.meta && x.meta.layout)
      return (routeWithLayout ? routeWithLayout.meta.layout : 'DefaultLayout')
    }
  }
}
</script>
