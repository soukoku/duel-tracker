module.exports = {
  pwa: {
    name: 'Duel Tracker',
    themeColor: '#2c5282',
    msTileColor: '#2c5282',
    assetsVersion: '1',
    manifestOptions: {
      description: 'A Yu-Gi-Oh! life point tracker with sounds.',
      background_color: '#2c5282',
      lang: 'en-US',
      orientation: 'portrait'
    },
    workboxOptions: {
      skipWaiting: true
    }
  }
}
