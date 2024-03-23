<script setup lang="ts">
import { watch, onBeforeUnmount, ref } from 'vue'
import { randomBetween } from '@/util'

const props = defineProps<{
  points: number,
  animate?: boolean
}>()

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
  </span>
</template>
