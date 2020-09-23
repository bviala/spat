<template>
  <Promised :promise="promise">
    <div>
      <h1>About</h1>
      <p>This is a SPA template</p>
    </div>
    <div class="card">
      <h2>Testing</h2>
      <Loading />
    </div>
  </Promised>
</template>

<script>
import Promised from '@/components/utils/Promised'
import Loading from '@/components/ui/Loading'

export default {
  components: { Promised, Loading },
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

<style lang="scss" scoped>
.card {
  border: 1px solid $primary;
  width: 500px;
  height: 300px;
  position: relative;
  margin: 1rem;
  padding: 1rem;
}
</style>
