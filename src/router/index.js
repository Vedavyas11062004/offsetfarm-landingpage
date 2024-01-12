import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue')
    },
    {
      path:'/products/trace',
      name: 'trace',
      component: () => import('../views/TraceView.vue')
    },
    {
      path:'/products/teamer',
      name: 'teamer',
      component: () => import('../views/TeamerView.vue')
    },
    {
      path:'/products/pulse',
      name: 'pulse',
      component: () => import('../views/PulseView.vue')
    },
    {
      path:'/products/snap',
      name: 'snap',
      component: () => import('../views/SnapView.vue')
    },
    {
      path:'/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue')
    },
    {
      path:'/legal/user',
      name: 'user',
      component: () => import('../views/LegalView-2.vue')
    },
    {
      path:'/legal/dataPolicy',
      name: 'dataPolicy',
      component: () => import('../views/LegalView-3.vue')
    },
    {
      path:'/legal/dataProcessing',
      name: 'dataProcessing',
      component: () => import('../views/LegalView-4.vue')
    }
  ]
})

export default router
