import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Link.vue')
  },
  {
    path: '/redirects',
    name: 'Redirect',
    component: () => import('../views/Redirect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
