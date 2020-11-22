<script>
function recursivelyRemoveFill (el) {
  if (!el) {
    return
  }
  el.removeAttribute('fill');
  [].forEach.call(el.children, child => {
    recursivelyRemoveFill(child)
  })
}
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    hasFill: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.$el.firstElementChild.nodeName === 'svg') {
      const svgElement = this.$el.firstElementChild
      // use `viewBox` attribute to get the svg's inherent width and height
      const viewBox = svgElement.getAttribute('viewBox').split(' ').map(n => Number(n))
      const widthToHeight = (viewBox[2] / viewBox[3]).toFixed(2)
      if (this.hasFill) {
        // recursively remove all fill attribute of element and its nested children
        recursivelyRemoveFill(svgElement)
      }
      // set width and height relative to font size
      svgElement.setAttribute('height', '1em')
      svgElement.setAttribute('width', `${widthToHeight}em`)
    }
  }
}
</script>

<template>
  <div
    class="svg-container"
    v-html="require(`!html-loader!@/assets/svg/${icon}.svg`)"
  />
</template>

<style lang="scss" scoped>
.svg-container {
  fill: currentColor;
  display: flex;
  align-items: center;
}
</style>
