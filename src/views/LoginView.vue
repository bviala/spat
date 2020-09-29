<template>
  <div class="container">
    <div class="login-form">
      <Logo
        class="logo"
        size="3rem"
      />
      <h1 class="has-text-dark">
        Sign in
      </h1>
      <input
        v-model="username"
        class="input"
      >
      <input
        v-model="password"
        type="password"
        class="input"
      >
      <button
        class="button button--primary"
        :class="{ 'button--loading': isLoading }"
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
      password: '',
      isLoading: false
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
  // border: 1px solid gray;
  width: 300px;
  .logo {
    margin: 2rem 0;
  }
  input {
    display: block;
    margin-bottom: 20px;
  }
  button {
    width: 100%;
  }
}
</style>
