<template>
  <svg
    :style="{ width: size + 'px', height: size + 'px' }"
    viewBox="0 0 24 24"
    class="inline-block fill-current"
  >
    <title v-if="title">{{ title }}</title>
    <slot>
      <path v-if="resolvedPath" :d="resolvedPath" />
    </slot>
  </svg>
</template>

<script>
// from https://materialdesignicons.com/
const materialIcons = {
  Plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  Minus: 'M19,13H5V11H19V13Z',
  Close:
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  SlashForward: 'M7 21L14.9 3H17L9.1 21H7Z'
}

export default {
  props: {
    icon: String,
    pathData: String,
    size: { type: Number, default: 24 },
    title: String
  },
  computed: {
    resolvedPath() {
      return materialIcons[this.icon] || pathData
    }
  }
}
</script>
