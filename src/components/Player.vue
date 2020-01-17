<template>
  <div class="p-4 border-2 border-gray-600">
    <LifeAudio ref="sounds" />
    <LifePoints :points="points" :animate="!isNew" />

    <div class="flex">
      <DButton @click="multiply(0.5)" color="red">
        Half
      </DButton>
      <DButton @click="multiply(2)" color="green">
        Double
      </DButton>
      <DButton @click="add(-100)" disabled color="red">
        -100
      </DButton>
      <DButton @click="reset">
        Reset
      </DButton>
    </div>
  </div>
</template>

<script>
import DButton from './DButton'
import LifeAudio from './LifeAudio'
import LifePoints from './LifePoints'

export default {
  components: { DButton, LifeAudio, LifePoints },
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
