<template>
  <div>
    <img
      v-if="source"
      class="avatar"
      :src="source"
      :alt="username"
      :style="style"
    >
    <div
      v-else-if="initials"
      class="avatar avatar--initials"
      :style="style"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script>
const fontRatio = 0.4

export default {
  name: 'Avatar',
  props: {
    source: {
      type: String,
      default: null
    },
    username: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 48
    }
  },
  computed: {
    initials () {
      try {
        const names = this.username.split(' ')
          .filter(string => string.length) // remove empty strings
        if (names.length === 1) {
          return names[0].slice(0, 2)
        } else {
          return names[0][0] + names[names.length - 1][0]
        }
      } catch (err) {
        return null
      }
    },
    style () {
      const fontSize = this.size * fontRatio
      return `width: ${this.size}px; height: ${this.size}px; font-size: ${fontSize}px`
    }
  }
}
</script>

<style lang="scss" scoped>

.avatar {
  border-radius: 50%;
}

.avatar--initials{
  background-color: $light-blue;
  color: $dim-grey;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  object-fit: cover;
}
</style>
