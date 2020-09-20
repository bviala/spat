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
        <button
          class="button button--primary"
          @click="onSignOutClick"
        >
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
  align-items: center;
  // border-bottom: 1px solid $primary;
  padding: .75rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
}
nav {
  >:not(:last-child) {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: $dark;
    padding: .75rem;
  }
}
.logo {
  font-size: 2rem;
  color: $primary;
  display: flex;
  align-items: center;
  .spat-logo {
    margin-right: 10px;
  }
}
.router-link-exact-active {
  border-bottom: 2px solid $primary;
}
</style>
