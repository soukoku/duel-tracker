<template>
  <BaseDialog
    aria-label="Coin and dice dialog"
    :visible="visible"
    cancellable
    @close="close"
  >
    <div class="flex flex-wrap justify-center px-4 mb-4">
      <!-- <transition-group tag="div" class="flex flex-wrap justify-center"> -->
      <Coin v-for="(coin, idx) in coins" :key="idx" :head="!!coin" />
      <!-- </transition-group> -->
      <button
        type="button"
        title="Clear coin rolls"
        @click="coins = []"
        v-if="coins.length"
        class="transition self-center p-2 rounded-full hover:bg-blue-700 focus:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        <SvgIcon icon="Close" />
      </button>
    </div>

    <div class="flex flex-wrap justify-center px-4 mb-4">
      <!-- <transition-group tag="div" class="flex flex-wrap justify-center"> -->
      <Die v-for="(die, idx) in dice" :key="idx" :value="die" />
      <!-- </transition-group> -->
      <button
        type="button"
        title="Clear dice rolls"
        @click="dice = []"
        v-if="dice.length"
        class="transition self-center p-2 rounded-full hover:bg-blue-700 focus:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        <SvgIcon icon="Close" />
      </button>
    </div>

    <div class="equal-child flex justify-center sp mt-4 px-4">
      <DButton @click="close" class="mx-2" style="max-width:10em">
        Close
      </DButton>
      <DButton
        @click="tossCoin"
        class="mx-2"
        style="max-width:10em"
        color="green"
        :disabled="coins.length >= maxList"
      >
        <SvgIcon icon="Coin" class="-ml-2 mr-1" />
        Toss
      </DButton>
      <DButton
        @click="rollDice"
        class="mx-2"
        style="max-width:10em"
        color="green"
        :disabled="dice.length >= maxList"
      >
        <SvgIcon icon="Dice3" class="-ml-2 mr-1" />
        Roll
      </DButton>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from './BaseDialog.vue'
import Coin from '@/components/Coin.vue'
import Die from '@/components/Die.vue'

function getRandomNum() {
  var array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  return array[0]
}

export default {
  components: { BaseDialog, Coin, Die },
  props: {
    visible: Boolean
  },
  data() {
    return {
      coins: [],
      dice: []
    }
  },
  computed: {
    maxList() {
      return 8
    }
  },
  methods: {
    tossCoin() {
      this.coins.push(getRandomNum() % 2)
    },
    rollDice() {
      this.dice.push(1 + (getRandomNum() % 6))
    },
    close() {
      this.coins = []
      this.dice = []
      this.$emit('close', false)
    }
  }
}
</script>
