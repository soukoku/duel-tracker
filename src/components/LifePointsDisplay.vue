<script setup lang="ts">
import { watch, onBeforeUnmount, ref, type Ref, onMounted } from 'vue'
import { randomBetween } from '@/util'
import { useSettingsStore } from '@/stores/settings'

const props = defineProps<{
  points: number,
  animate?: boolean,
  sfx?: boolean
}>()

// audio parts
const appSettings = useSettingsStore()
const changeLifeAudio = ref() as Ref<HTMLAudioElement | undefined>
const zeroLifeAudio = ref() as Ref<HTMLAudioElement | undefined>
function updateVolume(val: number) {
  if (changeLifeAudio.value) changeLifeAudio.value.volume = val
  if (zeroLifeAudio.value) zeroLifeAudio.value.volume = val
}
onMounted(() => updateVolume(appSettings.volume))
watch(() => appSettings.volume, val => {
  updateVolume(val)
})
function playForLife(targetLP: number) {
  stopAudio(changeLifeAudio.value)
  stopAudio(zeroLifeAudio.value)
  if (targetLP === 0) zeroLifeAudio.value?.play()
  else changeLifeAudio.value?.play()
}
function stopAudio(el?: HTMLAudioElement) {
  if (!el) return
  el.pause()
  el.currentTime = 0
}


// display parts
let intervalHandle: ReturnType<typeof setTimeout>
function cleanup() {
  if (intervalHandle) clearInterval(intervalHandle)
}
/**
 * Updates the display to the new number with a scrambling number
 * for some time just like the anime.
 * @param from 
 * @param to 
 */
function scrambleTo(from: number, to: number) {
  const audioMs = to ? 1200 : 1400 // longer for zero life point audio
  const intervalMs = 25
  let steps = audioMs / intervalMs

  intervalHandle = setInterval(() => {
    display.value = randomBetween(from, to)
    steps--
    if (steps === 0) {
      display.value = to
      cleanup()
    }
  }, intervalMs)
}

const display = ref(0)
watch(() => props.points, val => {
  cleanup()
  if (props.sfx) playForLife(val)
  if (props.animate) {
    scrambleTo(display.value, val)
  } else {
    display.value = val
  }
}, { immediate: true })

onBeforeUnmount(() => {
  cleanup()
})

</script>

<template>
  <span class="inline-flex items-center justify-center font-serif italic leading-none text-yellow-400 text-border">
    {{ display }}
    <audio preload="auto" ref="changeLifeAudio" class="hidden" :muted="appSettings.muted">
      <source src="@/assets/sounds/life-change.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="@/assets/sounds/life-change.mp3" type="audio/mpeg" />
    </audio>
    <audio preload="auto" ref="zeroLifeAudio" class="hidden" :muted="appSettings.muted">
      <source src="@/assets/sounds/life-zero.ogg" type="audio/ogg; codecs=vorbis" />
      <source src="@/assets/sounds/life-zero.mp3" type="audio/mpeg" />
    </audio>
  </span>
</template>
