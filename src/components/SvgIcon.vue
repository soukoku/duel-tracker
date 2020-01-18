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
  SlashForward: 'M7 21L14.9 3H17L9.1 21H7Z',
  VolumeHigh:
    'M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z',
  VolumeOff:
    'M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z'
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
