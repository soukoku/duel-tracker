<template>
  <span
    class="m-2 w-16 h-16 rounded-full flex items-center justify-center border-2 border-yellow-700 text-yellow-900"
    :class="{ 'bg-yellow-400': head, 'bg-yellow-500': !head }"
    :title="head ? 'Head' : 'Tail'"
  >
    <SvgIcon v-if="head" icon="AccountTie" :size="40" />
    <span v-if="!head" class="font-bold tracking-tighter">
      TAIL
    </span>
    <audio preload="auto" ref="audio" class="hidden">
      <source src="sounds/coin.mp3" type="audio/mpeg" />
      <source src="sounds/coin.ogg" type="audio/ogg; codecs=vorbis" />
    </audio>
  </span>
</template>

<script>
export default {
  props: {
    head: Boolean
  },
  mounted() {
    // play sound once
    const vol = this.$store.state.volume
    if (vol) {
      this.$refs.audio.volume = vol
      this.$refs.audio.play()
    }
  }
}
</script>
