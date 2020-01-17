<template>
  <div
    class="flex items-stretch border-2 border-gray-400 rounded-sm m-1"
    :class="{ 'shadow-outline': focused }"
  >
    <slot name="before"></slot>
    <input
      ref="input"
      v-model="valueReal"
      class="flex-auto focus:outline-none border-0 px-2"
      :class="inputClass"
      @focus="handleFocus"
      @blur="focused = false"
      v-bind="$attrs"
    />
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    inputClass: [String, Object],
    selectOnFocus: Boolean
  },
  data() {
    return {
      valueReal: this.value,
      focused: false
    }
  },
  watch: {
    value(val) {
      this.valueReal = val
    },
    valueReal(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleFocus() {
      this.focused = true
      if (this.selectOnFocus) {
        this.$refs.input.select()
      }
    }
  }
}
</script>
<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
