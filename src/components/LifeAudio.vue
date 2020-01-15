<template>
  <div class="hidden">
    <audio preload="auto" ref="start">
      <source src="sounds/duel-start.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/duel-start.mp3" type="audio/mpeg" />
    </audio>
    <audio preload="auto" ref="change">
      <source src="sounds/life-change.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/life-change.mp3" type="audio/mpeg" />
    </audio>
    <audio preload="auto" ref="zero">
      <source src="sounds/life-zero.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/life-zero.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'

function stopOne(el) {
  el.pause()
  el.currentTime = 0
}
function each(nodes, act) {
  for (let i = 0; i < nodes.length; i++) act(nodes[i])
}

export default {
  computed: mapState(['volume']),
  watch: {
    volume(val) {
      this.updateVolume()
    }
  },
  mounted() {
    this.updateVolume()
  },
  methods: {
    updateVolume() {
      const nodes = this.$el.querySelectorAll('audio')
      each(nodes, a => (a.volume = this.volume))
    },
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
