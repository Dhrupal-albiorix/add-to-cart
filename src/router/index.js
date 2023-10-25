// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/HomeView.vue"),
  },
  {
    path: "/login-signup",
    name: "login-signup",
    component: () => import("@/layouts/Signup_Login.vue"),
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: () => import("@/layouts/Signup_Login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/layouts/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

export default router;
