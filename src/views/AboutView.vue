<template>
  <Promised :promise="promise">
    <div>
      <h1>About</h1>
      <p>This is a SPA template</p>
    </div>
  </Promised>
</template>

<script>
import Promised from '@/components/global/Promised'

export default {
  components: { Promised },
  data () {
    return {
      promise: null
    }
  },
  created () {
    this.promise =
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          // reject(new Error('rejected'))
        }, 1000)
      })
  }
}
</script>
