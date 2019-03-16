import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AuthCheck from './auth-check.js';
import GlobalLog from './global-log.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  beforeEach: GlobalLog,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/score',
      name: 'score',
      component: () => import( /* webpackChunkName: "about" */ './views/Score.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: AuthCheck,
      component: () => import( /* webpackChunkName: "about" */ './views/Settings.vue'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import( /* webpackChunkName: "about" */ './views/Vote.vue'),
    },
  ]
});
