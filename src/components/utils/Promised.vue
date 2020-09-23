<template>
  <Promised
    v-slot:combined="{ isPending, isDelayOver, data, error }"
    :promise="promise"
    :pending-delay="50"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="error"
      >
        An error occurred while loading this page
      </div>
      <p
        v-else-if="!isDelayOver"
      />

      <Loading
        v-else-if="isPending"
        full-page
      />
      <div v-else>
        <slot />
      </div>
    </transition>
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
