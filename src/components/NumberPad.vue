<template>
  <div class="flex flex-col md:w-1/2 text-xl font-bold">
    <div
      class="flex-none flex items-stretch bg-white border-2 border-gray-300 text-gray-800 rounded-sm m-1"
    >
      <!-- <template v-slot:before>
            <span
              class="flex items-center pr-3 pl-2 bg-gray-300"
            >
              Delta
            </span>
          </template> -->
      <div class="flex-auto flex items-center justify-end px-2 text-gray-700">
        {{ amount }}
      </div>
      <div class="flex-none flex">
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
      </div>
    </div>
    <div class="equal-child flex-none flex">
      <DButton @click="append(1)" :disabled="!canAdd">
        1
      </DButton>
      <DButton @click="append(2)" :disabled="!canAdd">
        2
      </DButton>
      <DButton @click="append(3)" :disabled="!canAdd">
        3
      </DButton>
    </div>
    <div class="equal-child flex-none flex">
      <DButton @click="append(4)" :disabled="!canAdd">
        4
      </DButton>
      <DButton @click="append(5)" :disabled="!canAdd">
        5
      </DButton>
      <DButton @click="append(6)" :disabled="!canAdd">
        6
      </DButton>
    </div>
    <div class="equal-child flex-none flex">
      <DButton @click="append(7)" :disabled="!canAdd">
        7
      </DButton>
      <DButton @click="append(8)" :disabled="!canAdd">
        8
      </DButton>
      <DButton @click="append(9)" :disabled="!canAdd">
        9
      </DButton>
    </div>
    <div class="equal-child flex-none flex">
      <DButton @click="update(0)" title="Clear amount">
        C
      </DButton>
      <DButton @click="append(0)" :disabled="!canAdd">
        0
      </DButton>
      <DButton @click="backspace" title="Backspace">
        <SvgIcon icon="BackspaceOutline" />
      </DButton>
    </div>
  </div>
</template>

<script>
export default {
  props: { amount: Number, maxlength: Number },
  computed: {
    canAdd() {
      if (this.maxlength) return this.amount.toString().length < this.maxlength
      return true
    }
  },
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
