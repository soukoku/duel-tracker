<template>
  <div id="app" class="h-screen w-screen bg-blue-900 select-none">
    <div class="h-full flex flex-col" :aria-hidden="hasModalDialog">
      <div
        class="flex-auto overflow-auto bg-blue-800 border-b-2 border-blue-700 flex justify-center"
      >
        <Player
          v-for="p in players"
          :key="p.name"
          v-show="currentPlayer === p"
          :player="p"
          :showPlayer="players.length > 1"
          @change="lifeChanged"
        />
      </div>
      <div v-if="players.length > 1" class="flex-none px-4 flex justify-center">
        <button
          v-for="(p, idx) in players"
          :key="idx"
          type="button"
          @click="currentPlayer = p"
          style="margin-top:-2px;"
          class="transition border-t-2 mx-1 p-2 md:px-8 rounded-b-lg focus:outline-none focus:shadow-outline z-10"
          :class="{
            'border-transparent hover:border-blue-700 focus:border-blue-700 hover:bg-blue-800 focus:bg-blue-800 text-blue-200':
              p !== currentPlayer,
            'border-blue-200 hover:bg-blue-600 focus:bg-blue-600 text-blue-100 bg-blue-700':
              p === currentPlayer
          }"
          :title="`Switch to ${p.name}`"
        >
          <strong class="whitespace-no-wrap">
            {{ p.name }}
          </strong>
          <br />
          <span class="text-yellow-400">
            {{ p.life }}
          </span>
        </button>
      </div>

      <div class="flex-none flex p-4 lg:mx-auto lg:w-1/2 max-w-full">
        <DButton
          id="newgame-btn"
          @click="showNewGameDlg = true"
          class="flex-none"
          title="Track a new game"
        >
          <SvgIcon icon="Restart" class="md:-ml-2 md:mr-1" />
          <span class="hidden md:inline">
            New game
          </span>
        </DButton>
        <DButton
          @click="showCdDlg = true"
          class="flex-none"
          title="Toss coin or roll dice"
        >
          <SvgIcon icon="Coin" class="flex-none md:-ml-2 mr-1" />
          <SvgIcon icon="Dice3" class="flex-none md:mr-1" />
          <span class="hidden md:inline">
            Coin and dice
          </span>
        </DButton>
        <HypeAudio class="flex-none ml-auto" />
        <LifeAudio ref="sounds" class="flex-none" />
      </div>
    </div>
    <NewGameDialog
      :cancellable="!firstTime"
      :visible="showNewGameDlg"
      @close="closeRestartPrompt"
    />
    <CoinDiceDialog :visible="showCdDlg" @close="showCdDlg = false" />
  </div>
</template>

<script>
import CoinDiceDialog from '@/components/dialogs/CoinDiceDialog.vue'
import NewGameDialog from '@/components/dialogs/NewGameDialog.vue'
import LifeAudio from '@/components/LifeAudio.vue'
import HypeAudio from '@/components/HypeAudio.vue'
import Player from '@/components/Player.vue'

export default {
  components: {
    CoinDiceDialog,
    NewGameDialog,
    LifeAudio,
    HypeAudio,
    Player
  },
  data() {
    return {
      firstTime: true,
      showNewGameDlg: true,
      showCdDlg: false,
      players: [],
      currentPlayer: null
    }
  },
  computed: {
    hasModalDialog() {
      return this.showNewGameDlg || this.showCdDlg
    }
  },
  methods: {
    lifeChanged(life) {
      if (life > 0) {
        this.$refs.sounds.playChange()
      } else {
        this.$refs.sounds.playZero()
      }
    },
    closeRestartPrompt(params) {
      this.firstTime = false
      this.showNewGameDlg = false
      if (params) {
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
      // somehow nexttick doesn't work here
      setTimeout(() => {
        document.querySelector('#newgame-btn').focus()
      }, 50)
    }
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
