<template>
  <Promised
    v-slot:combined="{ isPending, isDelayOver, data, error }"
    :promise="promise"
    :pending-delay="50"
  >
    <div
      v-if="error"
      class="page-error"
    >
      An error occurred while loading this page
    </div>
    <p
      v-else-if="!isDelayOver"
    />

    <transition
      v-else-if="isPending"
      name="fade"
      mode="out-in"
    >
      <Loading
        full-page
      />
    </transition>
    <div v-else>
      <slot />
    </div>
  </Promised>
</template>

<script>
import { Promised } from 'vue-promised'
import Loading from '@/components/ui/Loading'

export default {
  components: { Promised, Loading },
  props: {
    promise: {
      type: Promise,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-error {
  background: $danger;
  border-radius: 2px;
  padding: 1rem;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
