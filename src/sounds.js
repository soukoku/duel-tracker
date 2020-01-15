import 'ion-sound'

ion.sound({
  sounds: [
    {
      name: 'duel-start'
    },
    {
      name: 'life-change'
    },
    {
      name: 'life-zero'
    }
  ],
  volume: 0.3,
  path: 'sounds/',
  preload: true
})

export function playStart() {
  console.log('start')
  ion.sound.stop()
  ion.sound.play('duel-start')
}
export function playLifeChange() {
  console.log('down')
  ion.sound.stop()
  ion.sound.play('life-change')
}
export function playLifeZero() {
  console.log('zero')
  ion.sound.stop()
  ion.sound.play('life-zero')
}
