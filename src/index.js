/**
 * Created by laipraserta on 25/1/18.
 */

import Vue from 'vue';
import router from './router';
import App from './App.vue'

//Semantic ui
// import SuiVue from 'semantic-ui-vue';
// import 'semantic-ui-css'
// import sui from 'semantic-ui/dist/semantic';
// import 'semantic-ui/dist/semantic.css'

import BootStrapVue from 'bootstrap-vue';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootStrapVue);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
