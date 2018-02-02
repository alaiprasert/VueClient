import Vue from 'vue';
import Router from 'vue-router';

//Views
import Main from '../views/Main.vue';
import Thing from '../views/Thing.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main'
    }, {
      path: '/page1',
      component: Thing,
      name: 'Thing'
    }
  ]
});
