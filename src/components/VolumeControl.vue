<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/vue/24/solid'
import { computed, ref, watch } from 'vue'

const settings = useSettingsStore()

const volumePercent = ref(settings.volume * 100)
watch(volumePercent, val => {
  settings.volume = val / 100
})

const muteBtnText = computed(() => settings.muted ? 'Unmute audio' : 'Mute audio')
function toggleMute() {
  settings.muted = !settings.muted
}

</script>

<template>
  <div class="flex items-center">
    <label for="volume" class="sr-only">Audio volume</label>
    <input name="volume" type="range" min="0" max="100" step="1" :disabled="settings.muted"
      v-model.number="volumePercent" :title="volumePercent.toString()">
    <button type="button" @click="toggleMute" class="text-gray-500 hover:text-gray-600" :title="muteBtnText"
      :aria-pressed="settings.muted">
      <SpeakerXMarkIcon v-if="settings.muted" class="w-6 h-6" aria-hidden="true" />
      <SpeakerWaveIcon v-else class="w-6 h-6" aria-hidden="true" />
      <span class="sr-only">{{ muteBtnText }}</span>
    </button>
  </div>
</template>