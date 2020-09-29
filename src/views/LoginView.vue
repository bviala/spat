<template>
  <div class="container">
    <div class="login-form">
      <Logo size="3rem" />
      <input
        v-model="username"
      >
      <input
        v-model="password"
        type="password"
      >
      <button
        class="button button--primary button--loading"
        @click="login"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Logo from '@/components/global/Logo'

export default {
  components: { Logo },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      storeLogin: 'auth/login'
    }),
    login () {
      this.storeLogin(this.username)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.login-form {
  display: block;
}
</style>
