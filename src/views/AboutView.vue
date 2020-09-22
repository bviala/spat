<template>
  <Promised
    :promise="promise"
    :pending-delay="50"
  >
    <template v-slot:pending>
      <Loading full-page />
    </template>
    <template v-slot:rejected>
      Something went wrong
    </template>
    <div>
      <h1>About</h1>
      <p>This is a SPA template</p>
    </div>
  </Promised>
</template>

<script>
import { Promised } from 'vue-promised'
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
        setTimeout(resolve, 3000)
      })
  }
}
</script>
