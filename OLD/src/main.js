import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/tailwind.css'
import DButton from '@/components/DButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.component('DButton', DButton)
Vue.component('SvgIcon', SvgIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
