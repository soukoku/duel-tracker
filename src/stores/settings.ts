import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingsStore = defineStore('settings', () => {
  const defaultLifePoints = useStorage('app:defaultLP', 8000)
  const defaultPlayers = useStorage('app:defaultPlayers', 1)
  const volume = useStorage('app:volume', .5)
  const muted = useStorage('app:muted', false)

  return { defaultLifePoints, defaultPlayers, volume, muted }
})
