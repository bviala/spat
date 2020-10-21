<template>
  <div class="container">
    <div class="login-form">
      <Logo
        class="logo"
        size="2.5rem"
      />
      <input
        v-model="username"
        placeholder="email"
        class="input"
      >
      <input
        v-model="password"
        type="password"
        placeholder="password"
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  // border: 1px solid gray;
  width: 300px;
  .logo {
    margin-bottom: 2rem;
  }
  input {
    display: block;
    margin-bottom: 20px;
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
