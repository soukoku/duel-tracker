<template>
  <div class="hidden">
    <audio preload ref="start">
      <source src="sounds/duel-start.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/duel-start.mp3" type="audio/mpeg" />
    </audio>
    <audio preload ref="change">
      <source src="sounds/life-change.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/life-change.mp3" type="audio/mpeg" />
    </audio>
    <audio preload ref="zero">
      <source src="sounds/life-zero.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/life-zero.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
function stopOne(el) {
  el.pause()
  el.currentTime = 0
}
function each(arr, act) {
  for (let i = 0; i < arr.length; i++) act(arr[i])
}

export default {
  mounted() {
    const nodes = this.$el.querySelectorAll('audio')
    each(nodes, a => (a.volume = 0.2))
  },
  methods: {
    stop() {
      const nodes = this.$el.querySelectorAll('audio')
      each(nodes, stopOne)
    },
    playStart() {
      this.stop()
      this.$refs.start.play()
    },
    playChange() {
      this.stop()
      this.$refs.change.play()
    },
    playZero() {
      this.stop()
      this.$refs.zero.play()
    }
  }
}
</script>
