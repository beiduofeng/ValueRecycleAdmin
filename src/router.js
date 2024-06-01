import { createWebHashHistory, createRouter } from 'vue-router'

import Login from './pages/Login.vue';
import Order from './pages/Order/Order.vue';
import Worker from './pages/Workers/Worker.vue';
import Menu from './pages/Menu.vue';

const routes = [
    { path: '/', component: Menu },
    { path: '/login', component: Login },
    { path: '/worker', component: Worker },
    { path: '/order', component: Order },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;