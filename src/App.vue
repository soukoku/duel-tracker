<template>
  <div id="app">
    <ScoreCalculator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ScoreCalculator from '@/components/ScoreCalculator.vue';

export default {
  name: 'app',
  components: {
    ScoreCalculator,
  },
};
</script>
