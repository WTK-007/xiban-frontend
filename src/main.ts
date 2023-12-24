import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/route.ts";
import "../global.css"

const app = createApp(App);

const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
});

app.use(router);
app.mount('#app');







