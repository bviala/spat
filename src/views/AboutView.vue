<template>
  <Promised :promise="promise">
    <div>
      <h1>About</h1>
      <p>This project is both a personal page and a Vue.js Single Page Application template.<br>I built it to extract the patterns I liked from my previous positions.</p>
      <p>It provides</p>
      <ul>
        <li>A scaffold for a token based auth system, including store and router implementation</li>
        <li>A loading component that can be displayed during any async operation, eg data fetching on page navigation</li>
        <li>An avatar component, customizable in size and shape and falling back to the username initials when no image is available</li>
        <li>An icon component, which displays SVGs at context size and color, just like font icons but better</li>
        <li>An accordion component, to smoothly display and hide content</li>
        <li>Structure to organize global stylings, and use SCSS mixins and variables in any component</li>
      </ul>
      <p>Source here => <a href="https://github.com/bviala/spat">github.com/bviala/spat</a></p>
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

<style lang="scss" scoped>
p, ul {
  font-size: 1.5rem;
}
li {
  margin-bottom: .5rem;
}
</style>
