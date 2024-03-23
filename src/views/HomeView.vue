<script setup lang="ts">
import LifePointsDisplay from '@/components/LifePointsDisplay.vue'
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

  </main>
</template>
