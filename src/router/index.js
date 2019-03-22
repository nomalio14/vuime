// router/index.js
import Vue from 'vue'
import Router from 'vue-router'
 
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import peoplePage from '@/components/peoplePage'
 
Vue.use(Router)
 
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: page1
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