import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('@/views/ShoppingCart.vue')
    },
    {
      path: '/tea-detail',
      name: 'tea-detail',
      component: () => import('@/views/TeaDetailView.vue')
    }
  ]
})

export default router
