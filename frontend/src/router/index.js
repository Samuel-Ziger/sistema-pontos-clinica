// frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Error404 from '../pages/Error404.vue';
import Maintenance from '../pages/Maintenance.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/maintenance', component: Maintenance },
  { path: '/:pathMatch(.*)*', component: Error404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
