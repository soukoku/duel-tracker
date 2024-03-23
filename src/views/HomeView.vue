<script setup lang="ts">
import LifePointsDisplay from '@/components/LifePointsDisplay.vue'
import DieDisplay from '@/components/DieDisplay.vue'
import VolumeControl from '@/components/VolumeControl.vue'
import { ref } from 'vue'
import { randomBetween, rollDice, type DiceValue } from '@/util'

const points = ref(8000)
const dice = ref([] as DiceValue[])

function castDice() {
  dice.value.push(rollDice())
}
// function changeDie() {

//   let newVal = dice.value + 1
//   if (newVal > 6) newVal = 1
//   dice.value = newVal as DiceValue
// }

function Test() {
  points.value = randomBetween(0, 8000)
}
function Zero() {
  points.value = 0
}
function Reset() {
  points.value = 8000
}
</script>

<template>
  <main>
    <VolumeControl />
    <button @click="Test">Change</button>
    <button @click="Zero">Zero</button>
    <button @click="Reset">Reset</button>
    <br>
    <LifePointsDisplay :points="points" animate sfx class="text-7xl" />
    <br>
    <button @click="castDice">Cast Dice</button>
    <button @click="dice = []">Clear Dice</button>
    <br>
    <div style="perspective: 300px; perspective-origin: 50% -20%;"
      class="flex items-center justify-center h-32 gap-6 border border-gray-200">
      <DieDisplay v-for="(val, idx) in dice" :key="idx" :value="val" />
    </div>
  </main>
</template>
