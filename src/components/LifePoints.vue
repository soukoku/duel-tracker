<template>
  <div
    class="lp-text flex items-center justify-center
        font-serif italic text-yellow-400"
    :title="display + ' life points'"
  >
    {{ display }}
  </div>
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
      this.cleanUp()
      if (this.animate) {
        this.animateHandle = this.scrollNumber(this.display, val)
      } else {
        this.display = val
      }
    }
  },
  beforeDestroy() {
    this.cleanUp()
  },
  methods: {
    cleanUp() {
      if (this.animateHandle) this.animateHandle.stop()
    },
    scrollNumber(from, to) {
      this.display = to
      return {
        stop() {}
      }
    }
  }
}
</script>
<style>
.lp-text {
  font-size: 3.5em;
  text-shadow: -1px 0 #555, 0 1px #555, 1px 0 #555, 0 -1px #555;
}
@screen md {
  .lp-text {
    font-size: 7em;
  }
}
</style>
