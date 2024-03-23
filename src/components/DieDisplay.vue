<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { onMounted, ref, watch, type Ref } from 'vue'
import SvgIcon from './SvgIcon.vue'

const props = defineProps<{ value: 1 | 2 | 3 | 4 | 5 | 6 }>()

// audio parts
const appSettings = useSettingsStore()
const rollAudio = ref() as Ref<HTMLAudioElement | undefined>
function updateVolume(val: number) {
  if (rollAudio.value) rollAudio.value.volume = val
}
onMounted(() => {
  updateVolume(appSettings.volume)
  rollAudio.value?.play()
})
watch(() => appSettings.volume, val => {
  updateVolume(val)
})

</script>
<template>
  <span class="flex items-center justify-center m-2 die">
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
.die {}

.face {
  @apply border-2 border-gray-300 rounded bg-gray-50
}

.face-1 {}

.face-2 {}

.face-3 {}

.face-4 {}

.face-5 {}

.face-6 {}
</style>