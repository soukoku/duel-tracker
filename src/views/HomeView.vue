<script setup lang="ts">
import LifePointsDisplay from '@/components/LifePointsDisplay.vue'
import DieDisplay, { type DiceValues } from '@/components/DieDisplay.vue'
import VolumeControl from '@/components/VolumeControl.vue'
import { ref } from 'vue'
import { randomBetween } from '@/util'

const points = ref(8000)
const dice = ref(1 as DiceValues)

function changeDie() {
  let newVal = dice.value + 1
  if (newVal > 6) newVal = 1
  dice.value = newVal as DiceValues
}

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
    <button @click="changeDie">Change</button>
    <br>
    <div class="scene">
      <DieDisplay :value="dice" />
    </div>
  </main>
</template>
<style>
.scene {
  perspective: 2500px;
}
</style>