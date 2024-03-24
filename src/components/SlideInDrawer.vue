<script setup lang="ts">
import { computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = withDefaults(defineProps<{
  isOpen: boolean,
  closeOnDismiss?: boolean,
  showCloseButton?: boolean,
  showOverlay?: boolean,
  slideFrom?: 'right' | 'left' | 'bottom'
}>(), {
  showOverlay: true,
  closeOnDismiss: true,
  slideFrom: 'bottom'
})
const emits = defineEmits<{ (e: 'update:isOpen', value: boolean): void }>()

// const slots = useSlots()

function tryClose(force: boolean) {
  if (force || props.closeOnDismiss) {
    emits('update:isOpen', false)
  }
}

const fromRight = computed(() => props.slideFrom === 'right')
const fromBottom = computed(() => props.slideFrom === 'bottom')
const enterFrom = computed(() => {
  return fromBottom.value ? 'translate-y-full' :
    fromRight.value ? 'translate-x-full' : '-translate-x-full'
})
const enterTo = computed(() => {
  return fromBottom.value ? 'translate-y-0' : 'translate-x-0'
})

</script>
<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="tryClose(false)">
      <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        v-if="showOverlay" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-400 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="fixed flex max-w-full pointer-events-none"
            :class="[fromBottom ? 'pt-10 bottom-0 inset-x-0' : fromRight ? 'pl-10 right-0 inset-y-0' : 'pr-10 left-0 inset-y-0']">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-300" :enter-from="enterFrom"
              :enter-to="enterTo" leave="transform transition ease-in-out duration-300" :leave-from="enterTo"
              :leave-to="enterFrom">
              <DialogPanel class="pointer-events-auto"
                :class="[fromBottom ? 'min-h-24 max-h-96 w-screen' : 'w-screen max-w-md']">
                <div class="flex flex-col h-full py-6 overflow-hidden bg-white"
                  :class="[fromBottom ? 'shadow-top-lg rounded-t-lg' : fromRight ? 'shadow-xl rounded-l-lg' : 'shadow-xl rounded-r-lg']">
                  <div class="flex-none px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
                        <slot name="title"></slot>
                      </DialogTitle>
                      <div class="flex items-center ml-3 h-7" v-if="showCloseButton">
                        <button type="button"
                          class="relative text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          @click="tryClose(true)">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex-1 px-4 mt-6 overflow-auto sm:px-6">
                    <slot></slot>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<style>
.shadow-top-lg {
  box-shadow: 0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>