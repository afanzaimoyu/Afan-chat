import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatHome from '../views/pages/chatHome/index.vue'
import Setting from '../views/pages/setting.vue'
import UserInfo from '../views/pages/user/userInfo.vue'
import EarnMoney from "@/views/pages/earnMoney/index.vue";
import Everyone from "@/views/pages/everyone/index.vue";
import Learn from "@/views/pages/learn/index.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: "/ChatHome",// 重定向

    },
    {
        path: "/ChatHome",
        name: "ChatHome",
        component: ChatHome,
    },
    {
        path: "/Setting",
        name: "Setting",
        component: Setting
    },
    {
        path: "/UserInfo",
        name: "UserInfo",
        component: UserInfo
    },
        {
        path: "/EarnMoney",
        name: "EarnMoney",
        component: EarnMoney
    },
        {
        path: "/Everyone",
        name: "Everyone",
        component: Everyone
    },
        {
        path: "/Learn",
        name: "Learn",
        component: Learn
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
