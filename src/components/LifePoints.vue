<template>
  <div
    class="lp-text text-border flex items-center justify-center
        font-serif italic text-yellow-400"
    :title="display + ' life points'"
  >
    {{ display }}
  </div>
</template>

<script>
function randomBetween(min, max) {
  // ensure max > min
  if (min > max) {
    let tmp = min
    min = max
    max = tmp
  }
  // use at least 2 digits for max during display scramble
  if (min < 10) min = 99

  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

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
        this.scrambleTo(this.display, val)
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
      clearInterval(this.timeout)
    },
    scrambleTo(from, to) {
      const audioMs = to ? 1100 : 1300 // longer for zero audio
      const intervalMs = 25
      let steps = audioMs / intervalMs

      this.timeout = setInterval(() => {
        this.display = randomBetween(from, to)
        steps--
        if (steps === 0) {
          this.display = to
          this.cleanUp()
        }
      }, intervalMs)
    }
  }
}
</script>
<style>
.lp-text {
  font-size: 3.5em;
}
@screen md {
  .lp-text {
    font-size: 7em;
  }
}
</style>
