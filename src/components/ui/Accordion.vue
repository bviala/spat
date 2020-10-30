<template>
  <div
    ref="accordion"
    class="accordion"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    value (value) {
      const panel = this.$refs.accordion
      if (value) {
        // Before animation
        clearTimeout(this.afterCollapseTimeout)
        panel.style.display = 'block'

        // Animation
        panel.style.maxHeight = panel.scrollHeight + 'px'

        // After animation
        this.afterExpandTimeout = setTimeout(() => {
          panel.style.maxHeight = 'none' // once expanded the accordion can grow when content is added
          panel.style.overflow = 'visible' // toggle overflow property so that when expanded, we can have absolutely positioned content that overflows, eg contextual menu
        }, 200) // matches the 0.2s transition on max-height
      } else {
        // Before animation
        clearTimeout(this.afterExpandTimeout)
        panel.style.overflow = 'hidden'
        panel.style.maxHeight = panel.scrollHeight + 'px'

        // Animation
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            panel.style.maxHeight = 0
          })
        })

        // After animation
        this.afterCollapseTimeout = setTimeout(() => {
          panel.style.display = 'none'
        }, 200)
      }
    }
  },
  mounted () {
    if (this.value) {
      const panel = this.$refs.accordion
      panel.style.display = 'block'
      panel.style.maxHeight = 'none'
      panel.style.overflow = 'visible'
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
