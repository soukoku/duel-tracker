<template>
  <svg
    viewBox="0 0 130 20"
    class="bg-blue-100 fill-current border border-gray-500"
  >
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      class="font-serif italic text-yellow-400"
      stroke="gray"
      stroke-width=".2%"
    >
      {{ points }}
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    points: Number
  }
}
</script>
