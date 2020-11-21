<template>
  <Promised :promise="promise">
    <div class="home">
      <Avatar
        class="avatar"
        source="https://avatars2.githubusercontent.com/u/14890575?s=460&u=cd2a279c5e63edd15aa3aa09f9f9f43640bea51e&v=4"
        :size="200"
      />
      <h1>Hi, I'm Baptiste 👋🏻</h1>
      <a href="https://github.com/bviala">github.com/bviala</a>
      <a href="https://www.linkedin.com/in/bviala">linkedin.com/in/bviala</a>
    </div>
  </Promised>
</template>

<script>
import Promised from '@/components/global/Promised'
import Avatar from '@/components/ui/Avatar'

export default {
  components: {
    Promised,
    Avatar
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

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  .avatar {
    margin: .5rem 0;
  }
  h1 {
    color: $dim-grey;
    font-size: 4rem;
    padding: .5rem;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    color: $primary;
    &:visited {
      color: $primary;
    }
    &:hover {
      color: $primary-dark;
    }
  }
</style>
