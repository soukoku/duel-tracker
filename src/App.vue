<template>
  <div id="app" class="h-screen w-screen overflow-auto bg-blue-900">
    <Player />
    <!-- <VolumeControl /> -->
  </div>
</template>

<script>
import Player from '@/components/Player.vue'
// import VolumeControl from '@/components/VolumeControl.vue'

export default {
  components: {
    Player
    // VolumeControl
  }
}
</script>
