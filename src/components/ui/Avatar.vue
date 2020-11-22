<template>
  <div>
    <img
      v-if="source"
      :src="source"
      :alt="username"
      :style="style"
    >
    <div
      v-else-if="initials"
      class="avatar--initials"
      :style="style"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script>
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
    },
    radius: {
      type: String,
      default: '50%'
    },
    fontRatio: {
      type: Number,
      default: 0.4
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
      const fontSize = this.size * this.fontRatio
      return `
        width: ${this.size}px;
        height: ${this.size}px; 
        font-size: ${fontSize}px;
        border-radius: ${this.radius}; 
      `
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
