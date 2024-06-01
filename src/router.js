import { createWebHashHistory, createRouter } from 'vue-router'

import Login from './pages/Login.vue';
import Home from './pages/home/Home.vue';
import Order from './pages/home/Order.vue';
import Worker from './pages/home/Worker.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/worker', component: Worker },
    { path: '/order', component: Order },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;