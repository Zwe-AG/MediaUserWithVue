import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/homepage',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/newsDetail/:newsID',
    name: 'newsDetail',
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
