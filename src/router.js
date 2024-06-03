// 1引入创建路由
import { createWebHashHistory, createRouter } from 'vue-router'
// 引入一个一个可能要呈现的组件
import Login from './pages/Login.vue';
import Order from './pages/home/Order/Order.vue';
import Worker from './pages/home/Worker/Worker.vue';
import Home from './pages/Home.vue';

const routes = [           //一个一个的路由规则
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/worker', component: Worker },
    { path: '/order', component: Order },
];
// 创建路由器
const router = createRouter({
    history: createWebHashHistory(),  //路由器的工作模式
    routes,  //一个一个的路由规则
});
//把路由器暴露出去
export default router;
// 这样在浏览器里切换不同的路径（home,login...）路由器就会帮我们切换显示不同的页面了