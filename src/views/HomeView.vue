<script setup lang="ts">
import LifePointsDisplay from '@/components/LifePointsDisplay.vue'
import { ref } from 'vue'
import { randomBetween } from '@/util'

const points = ref(4000)

function Test() {
  points.value = randomBetween(0, 4000)
}
</script>

<template>
  <main>
    <button @click="Test">Test</button>
    <br>
    <LifePointsDisplay :points="points" animate sfx class="text-7xl" />

  </main>
</template>
