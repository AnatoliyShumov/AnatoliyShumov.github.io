import Vue from 'vue'
import App from './components/App.vue'
import { ClientTable } from "vue-tables-2";


let options = {};
let useVuex = false;
let theme = "bootstrap4";
let template = "default";
Vue.use(ClientTable, options, useVuex, theme, template);

Vue.config.productionTip = false;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
