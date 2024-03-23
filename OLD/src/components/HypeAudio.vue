<template>
  <div>
    <DButton
      class="flex-none ml-auto"
      :title="playing ? 'Stop the hype' : 'Hype it up!'"
      @click="toggleHype"
      :color="playing ? 'red' : 'none'"
    >
      <SvgIcon icon="Fire" />
    </DButton>
    <audio
      preload="none"
      ref="audio"
      class="hidden"
      @play="playing = true"
      @pause="playing = false"
      @ended="handleEnd"
    >
      <source src="sounds/hype-critias.mp3" type="audio/mpeg" />
      <source src="sounds/hype-critias.ogg" type="audio/ogg; codecs=vorbis" />
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playing: false
    }
  },
  watch: {
    volume(val) {
      this.updateVolume()
    }
  },
  computed: {
    volume: {
      get() {
        return this.$store.state.volume
      }
    }
  },
  mounted() {
    this.updateVolume()
  },
  methods: {
    updateVolume() {
      this.$refs.audio.volume = this.volume
    },
    handleEnd() {
      this.playing = false
      this.$refs.audio.currentTime = 0
    },
    toggleHype() {
      if (this.playing) this.$refs.audio.pause()
      else this.$refs.audio.play()
    }
  }
}
</script>
