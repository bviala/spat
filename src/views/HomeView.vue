<template>
  <Promised :promise="promise">
    <div class="home">
      <h1>Welcome to Your Vue.js App</h1>
    </div>
  </Promised>
</template>

<script>
import Promised from '@/components/global/Promised'

export default {
  components: {
    Promised
  },
  data () {
    return {
      promise: null
    }
  },
  created () {
    this.promise =
      new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
      })
  }
}
</script>
