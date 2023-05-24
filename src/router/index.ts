import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/todos/',
      name: 'todos',
      component: () => import('../views/TodosView.vue'),
      children: [
        {
          // Catch-all route for todos
          path: '/:catchAll(.*)',
          redirect: '/', // Redirect to the todos route
        },
      ],
    },
    {
      path: '/categories/',
      name: 'categories',
      component: () => import('../views/CategoryView.vue'),
    },
    {
      path: '/about/',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});

export default router;