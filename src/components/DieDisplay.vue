<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { onMounted, ref, watch, type Ref } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { type DiceValue, shuffleArray } from '@/util'

const props = defineProps<{ value: DiceValue }>()

// define transforms for showing a different face
const transforms = [{
  // 1
  transform: 'translateZ(-32px) rotateY(0deg)'
}, {
  // 2
  transform: 'translateZ(-32px) rotateY(0deg)'
}, {
  // 3
  transform: 'translateZ(-32px) rotateY(-90deg'
}, {
  // 4
  transform: 'translateZ(-32px) rotateY(90deg)'
}, {
  // 5
  transform: 'translateZ(-32px) rotateX(-90deg)'
}, {
  // 6
  transform: 'translateZ(-32px) rotateX(90deg)'
}]
const die = ref() as Ref<HTMLElement | undefined>

function animateToValue() {
  // generate animation to the value passed
  const frames = shuffleArray([...transforms, ...transforms])
  frames.push(transforms[props.value - 1])
  die.value?.animate(frames, { duration: 500, easing: 'ease-out', fill: 'forwards' })
}
onMounted(() => animateToValue())
watch(() => props.value, () => animateToValue())


// audio parts
const appSettings = useSettingsStore()
const rollAudio = ref() as Ref<HTMLAudioElement | undefined>
function updateVolume(val: number) {
  if (rollAudio.value) rollAudio.value.volume = val
}
onMounted(() => {
  console.log('second mount')
  updateVolume(appSettings.volume)
  rollAudio.value?.play()
})
watch(() => appSettings.volume, val => {
  updateVolume(val)
})

</script>
<template>
  <span ref="die" class="die" :class="'is-' + props.value">
    <span class="sr-only">{{ props.value }}</span>
    <SvgIcon class="text-red-600 face face-1" size="64">
      <circle cx="12" cy="12" r="4" />
    </SvgIcon>
    <SvgIcon class="text-gray-800 face face-2" size="64">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon class="text-gray-800 face face-3" size="64">
      <circle cx="6" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon class="text-gray-800 face face-4" size="64">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <SvgIcon class="text-gray-800 face face-5" size="64">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
    </SvgIcon>
    <SvgIcon class="text-gray-800 face face-6" size="64">
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </SvgIcon>
    <audio preload="auto" ref="rollAudio" class="hidden">
      <source src="@/assets/sounds/dice.mp3" type="audio/mpeg" />
      <source src="@/assets/sounds/dice.ogg" type="audio/ogg; codecs=vorbis" />
    </audio>
  </span>
</template>
<style>
/* modified from https://icodemag.com/3d-rolling-dice-css-javascript/ */
.die {
  transform-style: preserve-3d;
  transform: translateZ(-32px);
  transition: transform 1s;
  position: relative;
  width: 64px;
  height: 64px;
}

.die>.face {
  @apply border-2 border-gray-300 rounded bg-gray-50 absolute;
}

.die>.face-1 {
  transform: rotateY(0deg) translateZ(32px);
}

.die>.face-6 {
  transform: translateZ(-32px);
}

.die>.face-3 {
  transform: rotateY(90deg) translateZ(32px);
}

.die>.face-4 {
  transform: rotateY(-90deg) translateZ(32px);
}

.die>.face-5 {
  transform: rotateX(90deg) translateZ(32px);
}

.die>.face-2 {
  transform: rotateX(-90deg) translateZ(32px);
}
</style>