<template>
  <div class="p-4 border-2 border-gray-600">
    <LifePoints :points="points" />
  </div>
</template>

<script>
import LifePoints from './LifePoints'

export default {
  components: { LifePoints },
  data() {
    return {
      points: 8000
    }
  },
  methods: {}
}
</script>
