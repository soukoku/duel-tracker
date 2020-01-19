<template>
  <div class="flex flex-col md:w-1/2 text-lg">
    <DTextbox
      class="flex-none bg-white"
      inputClass="text-right font-semibold"
      type="number"
      min="0"
      :max="max"
      selectOnFocus
      :value="amount"
      readonly
    >
      <!-- <template v-slot:before>
            <span
              class="flex items-center pr-3 pl-2 bg-gray-300"
            >
              Delta
            </span>
          </template> -->
      <template v-slot:after>
        <DButton
          @click="$emit('apply', amount)"
          color="green"
          title="Add custom amount"
        >
          <SvgIcon icon="Plus" />
        </DButton>
        <DButton
          @click="$emit('apply', -amount)"
          color="red"
          title="Subtract custom amount"
        >
          <SvgIcon icon="Minus" />
        </DButton>
      </template>
    </DTextbox>
    <div class="equal-child flex-none flex text-lg">
      <DButton @click="append(1)">
        1
      </DButton>
      <DButton @click="append(2)">
        2
      </DButton>
      <DButton @click="append(3)">
        3
      </DButton>
    </div>
    <div class="equal-child flex-none flex text-lg">
      <DButton @click="append(4)">
        4
      </DButton>
      <DButton @click="append(5)">
        5
      </DButton>
      <DButton @click="append(6)">
        6
      </DButton>
    </div>
    <div class="equal-child flex-none flex text-lg">
      <DButton @click="append(7)">
        7
      </DButton>
      <DButton @click="append(8)">
        8
      </DButton>
      <DButton @click="append(9)">
        9
      </DButton>
    </div>
    <div class="equal-child flex-none flex text-lg">
      <DButton @click="update(0)" title="Clear amount">
        C
      </DButton>
      <DButton @click="append(0)">
        0
      </DButton>
      <DButton @click="backspace" title="Backspace">
        <SvgIcon icon="BackspaceOutline" />
      </DButton>
    </div>
  </div>
</template>

<script>
import DTextbox from './DTextbox.vue'

export default {
  components: {
    DTextbox
  },
  props: { amount: Number, max: { type: Number, default: 999999 } },
  methods: {
    update(amt) {
      this.$emit('update:amount', amt)
    },
    append(digit) {
      this.update(this.amount * 10 + digit)
    },
    backspace() {
      this.update(Math.floor(this.amount / 10))
    }
  }
}
</script>
