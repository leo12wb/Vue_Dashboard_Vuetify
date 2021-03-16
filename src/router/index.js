import Vue from 'vue'
import VueRouter from 'vue-router'
import siteLayout from '../layout/siteLayout.vue'
import adminLayout from '../layout/adminLayout.vue'
import NotFound from '../views/NotFoundPage.vue'

/* Site */

/* Admin */
import Overview from '../views/Dashboard/Overview/Overview.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: siteLayout,
    redirect:'/',
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminLayout,
    redirect:'/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'home',
        name: 'home',
        component: Home
      },
    ]  
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
