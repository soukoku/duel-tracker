<template>
  <div class="flex flex-col p-4 max-w-3xl">
    <div class="flex-none flex mb-3">
      <div
        v-if="showPlayer"
        class="flex-none text-border text-yellow-400 md:text-xl"
      >
        {{ player.name }}
      </div>
      <LifePoints
        :points="player.life"
        :animate="!isNew"
        class="flex-auto"
      />
    </div>

    <div class="flex-auto flex flex-col md:flex-row mb-2 overflow-auto">
      <NumberPad
        class="md:w-1/2"
        :maxlength="6"
        :amount.sync="customAmount"
        @apply="add"
      />
      <div class="flex flex-col md:w-1/2 text-xl">
        <div class="equal-child flex-none flex flex-wrap">
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
          <DButton @click="multiply(2)" color="green">
            Double
          </DButton>
        </div>
        <div class="equal-child flex-none flex flex-wrap">
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
          <DButton @click="multiply(0.5)" color="red">
            Half
          </DButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberPad from './NumberPad.vue'
import LifePoints from './LifePoints.vue'

export default {
  components: {
    NumberPad,
    LifePoints
  },
  props: {
    player: { type: Object, required: true },
    showPlayer: Boolean
  },
  data() {
    return {
      isNew: true,
      customAmount: 0
    }
  },
  watch: {
    player() {
      this.isNew = true
    }
  },
  methods: {
    setLife(life) {
      this.isNew = false
      if (this.player.life !== life) {
        this.player.life = life
        this.$emit('change', life)
      }
    },
    multiply(factor) {
      this.setLife(Math.ceil(this.player.life * factor))
    },
    add(amount) {
      const parsed = Number(amount)
      if (!isNaN(parsed)) {
        this.setLife(Math.max(0, this.player.life + parsed))
      }
    }
  }
}
</script>
