<template>
  <BaseDialog
    aria-label="New game settings dialog"
    :visible="visible"
    :cancellable="cancellable"
    @close="close"
  >
    Track a new game with

    <div class="flex flex-col lg:flex-row items-center justify-center py-4">
      <button
        v-for="(pt, idx) in lifeList"
        :key="idx"
        :id="`choose-life-${pt}`"
        class="transition m-2 border rounded-sm px-4 cursor-pointer focus:outline-none"
        :class="{
          'border-blue-100 bg-blue-700 hover:bg-blue-500 focus:bg-blue-500':
            life === pt,
          'border-blue-500 bg-blue-800 hover:bg-blue-600 focus:bg-blue-600':
            life !== pt
        }"
        @click="life = pt"
      >
        <LifePoints :points="pt" />
      </button>
    </div>

    and

    <div class="flex justify-center py-4">
      <button
        v-for="(pl, idx) in playerList"
        :key="idx"
        type="button"
        class="transition mx-2 border px-4 cursor-pointer focus:outline-none text-2xl rounded-full w-16 h-16 flex items-center justify-center font-semibold"
        :class="{
          'text-white border-blue-100 bg-blue-600 hover:bg-blue-500 focus:bg-blue-500':
            players === pl,
          'border-blue-500 bg-blue-800 hover:bg-blue-600 focus:bg-blue-600':
            players !== pl
        }"
        @click="players = pl"
      >
        {{ pl }}
      </button>
    </div>

    players

    <div class="flex justify-center mt-4 px-4">
      <!-- <DButton @click="close(false)" class="mx-2 w-32 ml-auto md:ml-0" v-if="cancellable">
            Cancel
          </DButton> -->
      <DButton @click="close(true)" color="green" class="mx-2 w-32">
        <SvgIcon icon="SwordCross" class="-ml-2 mr-1" />
        Start
      </DButton>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from './BaseDialog.vue'
import LifePoints from '@/components/LifePoints.vue'

export default {
  components: { BaseDialog, LifePoints },
  props: {
    visible: Boolean,
    cancellable: Boolean
  },
  data() {
    return {
      lifeList: [8000, 6000, 4000],
      playerList: [1, 2, 3, 4]
    }
  },
  computed: {
    life: {
      get() {
        return this.$store.state.defaultLife
      },
      set(val) {
        this.$store.commit('SET_DEFAULTLIFE', val)
      }
    },
    players: {
      get() {
        return this.$store.state.defaultPlayers
      },
      set(val) {
        this.$store.commit('SET_DEFAULTPLAYER', val)
      }
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(() => {
          const elId = `#choose-life-${this.life}`
          const el = document.querySelector(elId)
          if (el) el.focus()
        })
      }
    }
  },
  methods: {
    close(accept) {
      const arg = accept ? { life: this.life, players: this.players } : null
      this.$emit('close', arg)
    }
  }
}
</script>
