<template>
  <div class="p-4 border-2 border-gray-600">
    <LifeAudio ref="sounds" />
    <LifePoints :points="points" :animate="!isNew" class="mb-4" />

    <div class="flex button-row">
      <DButton @click="add(-100)" color="red">
        -100
      </DButton>
      <DButton @click="add(-200)" color="red">
        -200
      </DButton>
      <DButton @click="add(-500)" color="red">
        -500
      </DButton>
      <DButton @click="add(-1000)" color="red">
        -1000
      </DButton>
      <DButton @click="add(-2000)" color="red">
        -2000
      </DButton>
      <DButton @click="multiply(0.5)" color="red">
        1/2
      </DButton>
    </div>
    <div class="flex button-row">
      <DButton @click="add(100)" color="green">
        +100
      </DButton>
      <DButton @click="add(200)" color="green">
        +200
      </DButton>
      <DButton @click="add(500)" color="green">
        +500
      </DButton>
      <DButton @click="add(1000)" color="green">
        +1000
      </DButton>
      <DButton @click="add(2000)" color="green">
        +2000
      </DButton>
      <DButton @click="multiply(2)" color="green">
        x2
      </DButton>
    </div>
    <DButton @click="reset">
      Reset
    </DButton>
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
<style>
.button-row > button {
  flex-grow: 1;
  flex-basis: 0;
}
</style>
