<template>
  <BaseDialog aria-label="Dice throw dialog" :visible="visible" @close="close">
    blah blah

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
