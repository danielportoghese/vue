import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./components/Home.vue'),
    name: 'Home' // Adicionando um nome para a rota Home
  },
  {
    path: '/login',
    component: () => import('./components/Login.vue'),
    name: 'Login' // Adicionando um nome para a rota Home
  },
  {
    path: '/localStorage',
    component: () => import('./components/localStorage.vue'),
    name: 'LocalStorage' // Adicionando um nome para a rota LocalStorage
  },
  {
    path: '/cores',
    component: () => import('./components/Cores.vue'),
    name: 'Cores' // Adicionando um nome para a rota Cores
  },
  {
    path: '/swiper',
    component: () => import('./components/Swiper.vue'),
    name: 'Swiper' // Adicionando um nome para a rota Swiper
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
