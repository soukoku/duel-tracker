<template>
  <div class="p-4 border-2 border-gray-600">
    <LifeAudio ref="sounds" />
    <LifePoints :points="points" :animate="!isNew" class="mb-4" />

    <div class="button-row flex text-lg">
      <DButton @click="add(-100)" color="red">
        <SvgIcon icon="Minus" title="Minus" />
        100
      </DButton>
      <DButton @click="add(-200)" color="red">
        <SvgIcon icon="Minus" title="Minus" />
        200
      </DButton>
      <DButton @click="add(-500)" color="red">
        <SvgIcon icon="Minus" title="Minus" />
        500
      </DButton>
      <DButton @click="add(-1000)" color="red">
        <SvgIcon icon="Minus" title="Minus" />
        1000
      </DButton>
      <DButton @click="add(-2000)" color="red">
        <SvgIcon icon="Minus" title="Minus" />
        2000
      </DButton>
      <DButton @click="multiply(0.5)" color="red" title="Half">
        1
        <SvgIcon icon="SlashForward" class="-ml-1 -mr-1" />
        2
      </DButton>
    </div>
    <div class="button-row flex text-lg">
      <DButton @click="add(100)" color="green">
        <SvgIcon icon="Plus" title="Plus" />
        100
      </DButton>
      <DButton @click="add(200)" color="green">
        <SvgIcon icon="Plus" title="Plus" />
        200
      </DButton>
      <DButton @click="add(500)" color="green">
        <SvgIcon icon="Plus" title="Plus" />
        500
      </DButton>
      <DButton @click="add(1000)" color="green">
        <SvgIcon icon="Plus" title="Plus" />
        1000
      </DButton>
      <DButton @click="add(2000)" color="green">
        <SvgIcon icon="Plus" title="Plus" />
        2000
      </DButton>
      <DButton @click="multiply(2)" color="green" title="Double">
        <SvgIcon icon="Close" />
        2
      </DButton>
    </div>
    <div class="flex text-lg">
      <DButton @click="reset" class="flex-none">
        Reset
      </DButton>
      <div class="flex-auto">
        
      </div>
    </div>
  </div>
</template>

<script>
import DButton from './DButton'
import LifeAudio from './LifeAudio'
import LifePoints from './LifePoints'
import SvgIcon from './SvgIcon'

export default {
  components: { DButton, LifeAudio, LifePoints, SvgIcon },
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
