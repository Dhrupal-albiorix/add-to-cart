// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/HomeView.vue'),
  },
  {
    path: '/sign-up',
    name : 'sign-up',
    component: () => import('@/layouts/SignUP.vue'),
  },
  {
    path: '/log-in',
    name : 'log-in',
    component: () => import('@/layouts/LogIn.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        console.log("savedPosition", savedPosition)
        return savedPosition;
    } else {
        console.log("savedPosition-else", savedPosition)
        return {
            left: 0,
            top: 0
        };

    }
} 
})

export default router
