<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="allCls"
    class="transition flex items-center justify-center font-semibold m-1 px-4 py-4 rounded-sm focus:outline-none focus:shadow-outline"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: String,
    type: { type: String, default: 'button' },
    disabled: Boolean
  },
  computed: {
    allCls() {
      return `${this.miscCss} ${this.colorCss}`
    },
    miscCss() {
      if (this.disabled) {
        return 'cursor-default'
      }
      return ''
    },
    colorCss() {
      if (!this.disabled) {
        if (this.color === 'red') {
          return `bg-red-200 text-red-900 ${
            this.disabled
              ? ''
              : 'hover:bg-red-600 hover:text-red-100 focus:bg-red-600 focus:text-red-100'
          }`
        }
        if (this.color === 'green') {
          return `bg-green-200 text-green-900 ${
            this.disabled
              ? ''
              : 'hover:bg-green-600 hover:text-green-100 focus:bg-green-600 focus:text-green-100'
          }`
        }
      }
      return `bg-gray-300 text-gray-800 ${
        this.disabled
          ? 'text-gray-500'
          : 'text-gray-800 hover:bg-gray-600 hover:text-gray-100 focus:bg-gray-600 focus:text-gray-100'
      }`
    }
  }
}
</script>
