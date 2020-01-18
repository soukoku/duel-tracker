<template>
  <BaseDialog aria-label="Coin toss dialog" :visible="visible" @close="close">
    Not implemented yet

    <div class="flex justify-center mt-4 px-4">
      <DButton @click="close" class="mx-2 w-32">
        Close
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
    close() {
      this.$emit('close', false)
    }
  }
}
</script>
