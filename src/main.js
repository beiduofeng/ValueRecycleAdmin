/** @file 被 index.html 引入，整个 vue 应用的入口  */
import './assets/main.css'
import { createApp } from 'vue'
// 参考 element-puls 文档 https://element-plus.org/zh-CN/guide/quickstart.html
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router.js'
// vue app
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
// 挂载应用到页面上
app.mount('#app-container')
