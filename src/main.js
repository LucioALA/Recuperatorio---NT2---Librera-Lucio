import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'


/* ---------- ROUTER ---------- */
//https://router.vuejs.org/
//instalación: npm i vue-router



/* ---------- FORMULARIO AVANZADO ---------- */
//https://www.npmjs.com/package/vue-form
//instalación: npm i vue-form


Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
