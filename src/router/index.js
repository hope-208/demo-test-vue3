import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: 'Profile'
      },
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/vechicles',
      name: 'vechicles',
      meta: {
        title: 'Vechicles'
      },
      component: () => import('@/views/VechiclesView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      meta: {
        title: 'Setting'
      },
      component: () => import('@/views/SettingView.vue')
    },
    {
      path: '/not-found',
      name: '404',
      meta: {
        title: 'Not found'
      },
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
