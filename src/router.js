import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';
import { localStorageUtil } from '@/util.js'

/*

const routes = [

  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { name: 'list', path: '', component: () => import('@/components/MovieList.vue') },
      { name: 'detail', path: '/detail/:id?', component: () => import('@/components/Detail.vue'), props: true },
      { name: 'paycode', path: '/paycode', component: () => import('@/components/PayCode.vue') },
      { name: 'playvideo', path: '/playvideo', component: () => import('@/components/PlayVideo.vue') },
    ],
  },

]

const router = new VueRouter({
  routes,
})



router.beforeEach((to, from, next) => {
  const video = localStorageUtil.read('video');
  
  if (video) {
    console.log(to)
    if (to.path !== '/') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }


  
  //next()
})

export default router


*/


export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        { name: 'list', path: '', component: () => import('@/components/MovieList.vue') },
        { name: 'detail', path: 'detail/:id?', component: () => import('@/components/Detail.vue'), props: true},
        { name: 'paycode', path: 'paycode', component: () => import('@/components/PayCode.vue') },
        { name: 'playvideo', path: 'playvideo', component: () => import('@/components/PlayVideo.vue')},
      ],
    },
  ],
});

