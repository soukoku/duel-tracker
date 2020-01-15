<template>
  <svg
    viewBox="0 0 160 40"
    style="max-height:120px;"
    class="bg-blue-100 fill-current max-w-full
    border border-gray-500 
    font-serif italic text-4xl text-yellow-400"
  >
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      stroke="gray"
      stroke-width=".4%"
    >
      {{ display }}
    </text>
  </svg>
</template>

<script>
export default {
  props: {
    points: { type: Number, required: true }
  },
  data() {
    return {
      display: this.points
    }
  },
  watch: {
    points(val) {
      this.display = val
    }
  }
}
</script>
