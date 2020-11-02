<template>
  <div class="layout">
    <header>
      <Logo />
      <nav class="desktop-menu">
        <router-link
          v-for="link in menu"
          :key="link.name"
          :to="link.to"
        >
          {{ link.name }}
        </router-link>
        <button
          class="button button--primary"
          @click="onSignOutClick"
        >
          Sign out
        </button>
      </nav>
      <button
        class="button-reset mobile-menu-button"
        @click="toggleMobileMenu"
      >
        <SvgIcon icon="burger" />
      </button>
    </header>
    <Accordion :value="isMobileMenuOpen">
      <nav class="mobile-menu">
        <router-link
          v-for="link in menu"
          :key="link.name"
          :to="link.to"
        >
          {{ link.name }}
        </router-link>
        <button
          class="button-reset"
          @click="onSignOutClick"
        >
          Sign out
        </button>
      </nav>
    </Accordion>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Logo from '@/components/global/Logo'
import SvgIcon from '@/components/ui/SvgIcon'
import Accordion from '@/components/ui/Accordion'

export default {
  components: { Logo, SvgIcon, Accordion },
  data () {
    return {
      menu: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'About',
          to: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({ isMobileMenuOpen: 'ui/isMobileMenuOpen' })
  },
  methods: {
    ...mapMutations({ toggleMobileMenu: 'ui/toggleMobileMenu' }),
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
nav.desktop-menu {
  >:not(:last-child) {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: $dark;
    padding: .75rem;
  }
  .router-link-exact-active {
    border-bottom: 2px solid $primary;
  }
}

main {
  padding: 2rem;
  @include mobile {
    padding: 1rem;
  }
}

.desktop-menu {
  @include mobile {
    display: none;
  }
}
.mobile-menu-button {
  font-size: 2rem;
  @include tablet {
    display: none;
  }
}
.mobile-menu {
  margin: 0 .5rem;
  padding: 1rem 0;
  border-bottom: 1px solid $light-grey;
  display: flex;
  flex-direction: column;
  align-items: center;

  a, button {
    font-size: 1.25rem;
    text-decoration: none;
    color: $dark;
    margin: .75rem;
  }
  .router-link-exact-active {
    color: $primary;
  }
}
</style>
