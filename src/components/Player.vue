<template>
  <div
    class="flex flex-col p-4 bg-no-repeat bg-center bg-cover"
    :style="styles"
  >
    <LifePoints :points="player.life" :animate="!isNew" class="mb-3" />

    <div class="button-row flex-none flex flex-wrap text-lg">
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
    <div class="button-row flex-none flex flex-wrap text-lg">
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
    <div class="flex-none flex flex-wrap text-lg font-semibold">
      <DTextbox
        class="flex-auto bg-white"
        inputClass="text-right font-semibold"
        type="number"
        min="0"
        max="90000"
        selectOnFocus
        v-model="customAmount"
      >
        <template v-slot:before>
          <span
            class="flex items-center whitespace-no-wrap px-2 text-gray-700 bg-gray-100"
          >
            Custom &gt;
          </span>
        </template>
        <template v-slot:after>
          <DButton
            @click="add(-customAmount)"
            color="red"
            title="Subtract custom amount"
          >
            <SvgIcon icon="Minus" />
          </DButton>
          <DButton
            @click="add(customAmount)"
            color="green"
            title="Add custom amount"
          >
            <SvgIcon icon="Plus" />
          </DButton>
        </template>
      </DTextbox>
    </div>
  </div>
</template>

<script>
import DTextbox from './DTextbox.vue'
import LifePoints from './LifePoints.vue'

export default {
  components: {
    DTextbox,
    LifePoints
  },
  props: {
    player: { type: Object, required: true }
  },
  data() {
    return {
      isNew: true,
      customAmount: 0
    }
  },
  computed: {
    styles() {
      return ''
      // max-width:640px; background-image:url(/imgs/bg-stars.jpg)
    }
  },
  watch: {
    'player.life': {
      handler(val) {
        if (this.isNew) {
          this.isNew = false
        }
      }
    }
  },
  methods: {
    multiply(factor) {
      this.player.life = Math.ceil(this.player.life * factor)
    },
    add(amount) {
      const parsed = Number(amount)
      if (!isNaN(parsed))
        this.player.life = Math.max(0, this.player.life + parsed)
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
