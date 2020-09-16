<template>
 <div>
  <header>
    <div class="logo">
      <img src="@/assets/images/hyperD.svg">
      <h1>spat</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <button @click="onSignOutClick">Sign out</button>
    </nav>
  </header>
  <main>
    <slot />
  </main>
 </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    onSignOutClick () {
      this.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 10px;
  }
  h1 {
    margin: 0;
  }
}
.router-link-exact-active {
  color: #42b983;
}
</style>
