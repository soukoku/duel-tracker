<template>
  <span
    class="m-2 w-16 h-16 rounded flex items-center justify-center border-2 border-gray-300 bg-gray-200 text-black"
    :title="value"
  >
    <SvgIcon v-if="value === 1" size="100%">
      <circle cx="12" cy="12" r="4" fill="red" />
    </SvgIcon>
    <SvgIcon v-if="value === 2" size="100%">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon v-if="value === 3" size="100%">
      <circle cx="6" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon v-if="value === 4" size="100%">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon v-if="value === 5" size="100%">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
    </SvgIcon>
    <SvgIcon v-if="value === 6" size="100%">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <!-- <audio preload="auto" ref="audio" class="hidden">
      <source src="sounds/dice.mp3" type="audio/mpeg" />
      <source src="sounds/dice.ogg" type="audio/ogg; codecs=vorbis" />
    </audio> -->
  </span>
</template>

<script>
export default {
  props: {
    value: Number
  }
  // mounted() {
  //   // play sound once
  //   const vol = this.$store.state.volume
  //   if (vol) {
  //     this.$refs.audio.volume = vol
  //     this.$refs.audio.play()
  //   }
  // }
}
</script>
