<template>
  <div
    class="lp-text bg-blue-100 flex items-center justify-center
        border border-gray-500 
        font-serif italic text-yellow-400"
  >
    {{ display }}
  </div>
  <!-- <svg
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
    </svg> -->
</template>

<script>
export default {
  props: {
    animate: { type: Boolean },
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
<style>
.lp-text {
  font-size: 4em;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
@screen md {
  .lp-text {
    font-size: 7em;
  }
}
</style>
