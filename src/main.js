import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from '@/api'
import { readCookie, createCookie, deleteCookie, errorLogger,localStorageUtil } from '@/util.js'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

import axios from 'axios'

axios.defaults.withCredentials=true;//让ajax携带cookie
//axios.defaults.headers.common['Content-Type'] = 'application/json';
Vue.prototype.$axios = axios;

Vue.use(VueRouter);

Vue.prototype.$createCookie = createCookie
Vue.prototype.$readCookie = readCookie
Vue.prototype.$deleteCookie = deleteCookie
Vue.prototype.$errorLogger = errorLogger
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
