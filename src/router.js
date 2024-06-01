import { createWebHashHistory, createRouter } from 'vue-router'

import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;