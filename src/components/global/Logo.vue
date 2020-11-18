<template>
  <div
    class="logo"
    :style="`font-size: ${size}`"
  >
    <SvgIcon
      icon="spat-logo"
      class="spat-logo"
    />
    bviala
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '2rem'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  color: $primary;
  display: flex;
  align-items: center;
  .spat-logo {
    margin-right: 10px;
  }
}
</style>
