<template>
  <transition name="dialog-up">
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
        :aria-label="ariaLabel"
        :aria-modal="modal"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import createFocusTrap from 'focus-trap'

export default {
  props: {
    visible: Boolean,
    cancellable: Boolean,
    ariaLabel: String,
    modal: { type: Boolean, default: true }
  },
  data() {
    return {
      mounted: false
    }
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.mounted) this.setupFocusTrap()
      } else {
        this.cleanUp()
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.setupFocusTrap()
    }
    this.mounted = true
  },
  methods: {
    setupFocusTrap() {
      this.$nextTick(() => {
        if (this.$el) {
          this.trap = createFocusTrap(this.$el).activate()
        }
      })
    },
    cleanUp() {
      if (this.trap) this.trap.deactivate()
    },
    tryCancel() {
      if (this.cancellable) this.$emit('close', false)
    }
  }
}
</script>
<style>
.dialog-up-enter-active {
  transition: all 0.3s ease;
}
.dialog-up-leave-active {
  transition: all 0.3s ease;
}
.dialog-up-enter,
.dialog-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
