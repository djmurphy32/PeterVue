import VueRouter from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import HomePage from '@/components/HomePage.vue'
import Portfolio from '@/components/Portfolio.vue'
import { Page } from './Page'

function createRouter(): VueRouter {
  const router = new VueRouter({
    mode: 'history',

    routes: [
      {
        path: '/portfolio',
        name: Page.Portfolio,
        component: Portfolio,
      },
      {
        path: '/',
        name: Page.Home,
        component: HomePage,
      },
      {
        path: '*',
        name: Page.NotFound,
        component: NotFound,
      },
    ],
  })

  return router
}

export default createRouter
