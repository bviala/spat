<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
