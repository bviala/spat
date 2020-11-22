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
      <a
        class="linkedin-link"
        href="https://www.linkedin.com/in/bviala"
      >linkedin.com/in/bviala</a>
      <SvgIcon
        class="arrow-icon"
        icon="arrow-down"
      />
    </div>
    <div class="more">
      <div class="more__content">
        <h1>I'm a product oriented<br>software engineer</h1>

        <div>
          <p>I've built applications with</p>
          <ul>
            <li>
              Vue, React
            </li>
            <li>
              GraphQL, REST
            </li>
            <li>
              Node, C#, Java
            </li>
            <li>
              MongoDB, PostgreSQL
            </li>
          </ul>
        </div>
        <p>I'm highly autonomous and adaptable. <br>I figure things out and make things work,<br> and see the big picture in the process.</p>
      </div>
    </div>
  </Promised>
</template>

<script>
import Promised from '@/components/global/Promised'
import Avatar from '@/components/ui/Avatar'
import SvgIcon from '@/components/ui/SvgIcon'

export default {
  components: {
    Promised,
    Avatar,
    SvgIcon
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
    min-height: 100%;
    justify-content: center;
    h1 {
      text-align: center;
    }
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
  .arrow-icon {
    margin-top: 5rem;
    color: $dim-grey;
    font-size: 1.5rem;
    @include mobile {
      display: none;
    }
  }
  .more {
    display: flex;
    justify-content: center;
  }
  .more__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    justify-content: center;
    margin: 0 3rem;
    h1 {
      margin-top: 1rem;
    }
    p {
      font-size: 2rem;
    }
    ul {
      font-size: 1.5rem;
      padding: 0;
    }
    li {
      list-style: none;
      margin-bottom: .5rem;
    }
  }
</style>
