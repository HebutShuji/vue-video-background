import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件
import VideoBg from 'vue-videobg'

import './css/common.css'
import './less/common.less'
import 'element-ui/lib/theme-chalk/index.css'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(Element)
Vue.use(VueRouter)
// Vue.component('video-gb', VideoBg)

const router = new VueRouter({
    routes
})

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/home') {
        return next({ path: '/home' })
    }
    next()
})

new Vue({ store,

    // el: 'body',
    // components:{ VideoBg },
    router
}).$mount('#app')
