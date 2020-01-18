<template>
  <transition name="slide-up">
    <div
      v-if="visible"
      class="absolute h-screen w-screen top-0 left-0 z-40"
      @keydown.esc="tryCancel"
    >
      <div
        class="w-full h-full"
        style="background:rgba(0,0,0,.7);backdrop-filter: blur(2px);"
        @click.stop="tryCancel"
      ></div>

      <div
        class="absolute bottom-0 left-0 right-0 bg-blue-900 text-blue-100 rounded-t-sm py-4 text-center max-h-full overflow-auto"
        role="dialog"
        aria-label="New game settings dialog"
      >
        Track a new game with

        <div class="flex justify-center py-4">
          <LifePoints
            v-for="(pt, idx) in lifeList"
            :key="idx"
            :points="pt"
            class="transition mx-2 border rounded-sm px-4 cursor-pointer focus:outline-none"
            :class="{
              'border-blue-100 bg-blue-700 hover:bg-blue-500 focus:bg-blue-500':
                life === pt,
              'border-blue-500 bg-blue-800 hover:bg-blue-600 focus:bg-blue-600':
                life !== pt
            }"
            tabindex="0"
            @click.native="life = pt"
          />
        </div>

        and

        <div class="flex justify-center py-4">
          <span
            v-for="(pl, idx) in playerList"
            :key="idx"
            class="transition mx-2 border px-4 cursor-pointer focus:outline-none text-2xl rounded-full w-16 h-16 flex items-center justify-center font-semibold"
            :class="{
              'text-white border-blue-100 bg-blue-600 hover:bg-blue-500 focus:bg-blue-500':
                players === pl,
              'border-blue-500 bg-blue-800 hover:bg-blue-600 focus:bg-blue-600':
                players !== pl
            }"
            tabindex="0"
            @click="players = pl"
          >
            {{ pl }}
          </span>
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
      </div>
    </div>
  </transition>
</template>

<script>
import LifePoints from '@/components/LifePoints.vue'
import createFocusTrap from 'focus-trap'

export default {
  components: { LifePoints },
  props: {
    visible: Boolean,
    cancellable: Boolean
  },
  data() {
    return {
      lifeList: [8000, 4000],
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
          if (this.$el) {
            this.trap = createFocusTrap(this.$el).activate()
          }
        })
      } else {
        this.cleanUp()
      }
    }
  },
  methods: {
    cleanUp() {
      if (this.trap) this.trap.deactivate()
    },
    tryCancel(e) {
      if (this.cancellable) this.close(false)
    },
    close(accept) {
      const arg = accept ? { life: this.life, players: this.players } : null
      this.$emit('close', arg)
    }
  }
}
</script>
<style>
.slide-up-enter-active {
  transition: all 0.3s ease;
}
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
