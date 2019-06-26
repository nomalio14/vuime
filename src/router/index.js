// router/index.js
import Vue from 'vue'
import Router from 'vue-router'

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import peoplePage from '@/components/peoplePage'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/peoplePage',
      component: peoplePage
    }
  ],
  linkExactActiveClass: 'is-active'
})
