import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 外部组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/config/i18n'
// 自定义组件
import {copyToClipboard} from '@/util/util'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 自定义方法
/*
*  复制
*/
Vue.prototype.$copy = function (value, mes) {
    if (copyToClipboard(value)) {
        this.$message.success(mes)
    }
}


new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
