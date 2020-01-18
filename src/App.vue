<template>
  <div id="app" class="h-screen w-screen bg-blue-900 flex flex-col">
    <Player
      v-if="currentPlayer"
      :player="currentPlayer"
      class="flex-auto overflow-auto bg-blue-800 border-b-2 border-blue-700"
      @change="lifeChanged"
    />
    <div class="flex-none p-4 pt-0 flex justify-center">
      <button
        v-for="(p, idx) in players"
        :key="idx"
        @click="currentPlayer = p"
        style="margin-top:-2px;"
        class="transition border-t-2 mx-1 py-2 px-4 md:px-8 rounded-b-lg focus:outline-none z-10"
        :class="{
          'border-transparent hover:border-blue-700 focus:border-blue-700 hover:bg-blue-800 focus:bg-blue-800 text-blue-200':
            p !== currentPlayer,
          'border-blue-200 hover:bg-blue-600 focus:bg-blue-600 text-blue-100 bg-blue-700':
            p === currentPlayer
        }"
      >
        <strong>
          {{ p.name }}
        </strong>
        <br />
        {{ p.life }}
      </button>
    </div>

    <div class="flex-none flex p-4">
      <LifeAudio ref="sounds" />
      <DButton @click="confirmRestart" class="flex-none w-32">
        Restart
      </DButton>
    </div>
    <RestartDialog
      :cancellable="!firstTime"
      :visible="showRestartDlg"
      @close="closeRestartPrompt"
    />
  </div>
</template>

<script>
import RestartDialog from '@/components/RestartDialog.vue'
import LifeAudio from '@/components/LifeAudio.vue'
import Player from '@/components/Player.vue'

export default {
  components: {
    RestartDialog,
    LifeAudio,
    Player
  },
  data() {
    return {
      firstTime: true,
      showRestartDlg: false,
      players: [],
      currentPlayer: null
    }
  },
  mounted() {
    this.confirmRestart()
  },
  methods: {
    lifeChanged(life) {
      if (life > 0) {
        this.$refs.sounds.playChange()
      } else {
        this.$refs.sounds.playZero()
      }
    },
    confirmRestart() {
      this.showRestartDlg = true
    },
    closeRestartPrompt(params) {
      if (params) {
        this.firstTime = true
        this.players = []
        for (let i = 0; i < params.players; ) {
          this.players.push({
            name: `Player ${++i}`,
            life: params.life
          })
        }
        this.currentPlayer = this.players[0]
        this.$refs.sounds.playStart()
      }
      this.$nextTick(() => {
        this.firstTime = false
        this.showRestartDlg = false
      })
    }
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
