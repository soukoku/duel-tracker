<template>
  <div class="p-4 border-2 border-gray-600">
    <LifeAudio ref="sounds" />
    <LifePoints :points="points" :animate="!isNew" />

    <div class="flex">
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
        type="button"
        @click="multiply(0.5)"
      >
        Half
      </button>
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
        type="button"
        @click="multiply(2)"
      >
        Double
      </button>
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
        type="button"
        @click="add(-100)"
      >
        -100
      </button>
      <button
        class="px-4 py-2 bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
        type="button"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import LifeAudio from './LifeAudio'
import LifePoints from './LifePoints'

export default {
  components: { LifeAudio, LifePoints },
  data() {
    return {
      points: 8000,
      isNew: false
    }
  },
  watch: {
    points(val) {
      if (this.isNew) {
        this.isNew = false
      } else if (val > 0) {
        this.$refs.sounds.playChange()
      } else {
        this.$refs.sounds.playZero()
      }
    }
  },
  methods: {
    reset() {
      this.isNew = true
      this.points = 8000
      this.$refs.sounds.playStart()
    },
    multiply(factor) {
      this.points = Math.ceil(this.points * factor)
    },
    add(amount) {
      this.points = Math.max(0, this.points + amount)
    }
  }
}
</script>
