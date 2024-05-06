import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/sobre',
    component: () => import('./components/Sobre.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
