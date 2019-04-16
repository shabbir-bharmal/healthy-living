import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'

import routes from './routes';

import Autocomplete from "./layouts/autocomplete.vue";
import Card from "./layouts/card.vue";

Vue.component("autocomplete", Autocomplete);
Vue.component("card", Card);

Vue.config.productionTip = false;

Vue.use(VueRouter);
//Vue.use(BootstrapVue);

const router = new VueRouter({routes});

require('../style.css');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');