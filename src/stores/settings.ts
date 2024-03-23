import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const defaultLife = ref(8000)
  const defaultPlayers = ref(1)
  const volume = ref(1)

  return { defaultLife, defaultPlayers, volume }
})
