<script setup lang="ts">
import LifePointsDisplay from '@/components/LifePointsDisplay.vue'
import DieDisplay from '@/components/DieDisplay.vue'
import VolumeControl from '@/components/VolumeControl.vue'
import { ref } from 'vue'
import { randomBetween } from '@/util'

const points = ref(8000)

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
    <DieDisplay :value="1" />
    <DieDisplay :value="2" />
    <DieDisplay :value="3" />
    <DieDisplay :value="4" />
    <DieDisplay :value="5" />
    <DieDisplay :value="6" />
  </main>
</template>
