<template>
  <div id="app" class="h-screen w-screen bg-blue-900 flex flex-col select-none">
    <div class="flex-auto overflow-auto bg-blue-800 border-b-2 border-blue-700">
      <Player
        v-for="p in players"
        :key="p.name"
        v-show="currentPlayer === p"
        :player="p"
        @change="lifeChanged"
      />
    </div>
    <div class="flex-none p-4 pt-0 flex justify-center">
      <button
        v-for="(p, idx) in players"
        :key="idx"
        type="button"
        @click="currentPlayer = p"
        style="margin-top:-2px;"
        class="transition border-t-2 mx-1 py-2 px-4 md:px-8 rounded-b-lg focus:outline-none focus:shadow-outline z-10"
        :class="{
          'border-transparent hover:border-blue-700 focus:border-blue-700 hover:bg-blue-800 focus:bg-blue-800 text-blue-200':
            p !== currentPlayer,
          'border-blue-200 hover:bg-blue-600 focus:bg-blue-600 text-blue-100 bg-blue-700':
            p === currentPlayer
        }"
        :title="`Switch to ${p.name}`"
      >
        <strong>
          {{ p.name }}
        </strong>
        <br />
        {{ p.life }}
      </button>
    </div>

    <div class="flex-none flex p-4 pt-0">
      <DButton
        @click="confirmRestart"
        class="flex-none md:w-32"
        title="Track a new game"
      >
        <SvgIcon icon="Restart" class="md:-ml-2 md:mr-1" />
        <span class="hidden md:inline">
          Restart
        </span>
      </DButton>
      <DButton
        @click="showCdDlg = true"
        class="flex-none"
        title="Toss coin or throw dice"
      >
        <SvgIcon icon="Coin" class="flex-none md:-ml-2 md:mr-1" />
        <SvgIcon icon="Dice3" class="flex-none md:mr-1" />
        <span class="hidden md:inline">
          Coin and dice
        </span>
      </DButton>
      <HypeAudio class="flex-none ml-auto" />
      <LifeAudio ref="sounds" class="flex-none" />
    </div>
    <RestartDialog
      :cancellable="!firstTime"
      :visible="showRestartDlg"
      @close="closeRestartPrompt"
    />
    <CoinDiceDialog :visible="showCdDlg" @close="showCdDlg = false" />
  </div>
</template>

<script>
import CoinDiceDialog from '@/components/dialogs/CoinDiceDialog.vue'
import RestartDialog from '@/components/dialogs/RestartDialog.vue'
import LifeAudio from '@/components/LifeAudio.vue'
import HypeAudio from '@/components/HypeAudio.vue'
import Player from '@/components/Player.vue'

export default {
  components: {
    CoinDiceDialog,
    RestartDialog,
    LifeAudio,
    HypeAudio,
    Player
  },
  data() {
    return {
      firstTime: true,
      showRestartDlg: false,
      showCdDlg: false,
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
