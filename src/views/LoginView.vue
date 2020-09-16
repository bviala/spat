<template>
  <div>
    <input
      v-model="username"
    />
    <input
      v-model="password"
      type="password"
    />
    <button
      @click="login"
    >
      Sign in
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
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
