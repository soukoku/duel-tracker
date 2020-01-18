<template>
  <div>
    <DButton
      :title="volume ? 'Sound enabled' : 'Sound disabled'"
      @click="toggle"
    >
      <SvgIcon :icon="volume ? 'VolumeHigh' : 'VolumeOff'" />
    </DButton>
    <audio preload="auto" ref="start" class="hidden">
      <source src="sounds/duel-start.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/duel-start.mp3" type="audio/mpeg" />
    </audio>
    <audio preload="auto" ref="change" class="hidden">
      <source src="sounds/life-change.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="sounds/life-change.mp3" type="audio/mpeg" />
    </audio>
    <audio preload="auto" ref="zero" class="hidden">
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
function each(nodes, act) {
  for (let i = 0; i < nodes.length; i++) act(nodes[i])
}

export default {
  watch: {
    volume(val) {
      this.updateVolume()
    }
  },
  computed: {
    volume: {
      get() {
        return this.$store.state.volume
      },
      set(val) {
        this.$store.commit('SET_VOLUME', val)
      }
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
    toggle() {
      if (this.volume) this.volume = 0
      else this.volume = 1
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
