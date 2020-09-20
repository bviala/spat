<template>
  <div>
    <header>
      <div class="logo">
        <SvgIcon
          icon="spat-logo"
          class="spat-logo"
        />
        spat
      </div>
      <nav>
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/about">
          About
        </router-link>
        <button @click="onSignOutClick">
          Sign out
        </button>
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
  padding: .25rem;
  font-size: 2rem;
  color: $primary;
  display: flex;
  align-items: center;
  .spat-logo {
    margin-right: 10px;
  }
}
.router-link-exact-active {
  color: #42b983;
}
</style>
