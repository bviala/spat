<template>
  <Promised :promise="promise">
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </Promised>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Promised from '@/components/utils/Promised'

export default {
  components: {
    Promised,
    HelloWorld
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
