import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

import 'vue-material-design-icons/styles.css'
import './style/main.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('menu-icon', MenuIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
