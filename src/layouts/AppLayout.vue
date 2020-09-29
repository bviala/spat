<template>
  <div>
    <header>
      <Logo />
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
import Logo from '@/components/global/Logo'

export default {
  components: { Logo },
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

.router-link-exact-active {
  border-bottom: 2px solid $primary;
}
main {
  padding: 2rem;
  @include mobile {
    padding: 1rem;
  }
}
</style>
