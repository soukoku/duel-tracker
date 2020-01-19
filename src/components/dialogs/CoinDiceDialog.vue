<template>
  <BaseDialog
    aria-label="Coin and dice dialog"
    :visible="visible"
    cancellable
    @close="close"
  >
    Not implemented yet

    <div class="flex justify-center mt-4 px-4">
      <DButton @click="close" class="mx-2 w-32">
        Close
      </DButton>
      <DButton @click="tossCoin" class="mx-2" color="green">
        <SvgIcon icon="Coin" class="-ml-2 mr-1" />
        Toss coin
      </DButton>
      <DButton @click="throwDice" class="mx-2" color="green">
        <SvgIcon icon="Dice3" class="-ml-2 mr-1" />
        Throw dice
      </DButton>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from './BaseDialog.vue'

export default {
  components: { BaseDialog },
  props: {
    visible: Boolean
  },
  data() {
    return {}
  },
  methods: {
    tossCoin() {},
    throwDice() {},
    close() {
      this.$emit('close', false)
    }
  }
}
</script>
