import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus提供的插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus国际化配置
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入模板的全局样式
import '@/styles/index.scss'
// svg配置
import 'virtual:svg-icons-register'
// 引入自定义插件，用于注册整个项目的全局组件
import GlobalComponents from '@/components'
// 引入路由
import router from './router'
// 引入仓库
import pinia from './store'
// 获取应用实例对象
const app = createApp(App)
// 安装element-plush插件
app.use(ElementPlus, {
  locale: zhCn, // element-plus 中文配置
})
// 安装自定义插件，触发install方法
app.use(GlobalComponents)
// 安装仓库pinia
app.use(pinia)
// 注册路由
app.use(router)
// 将app挂载到容器上
app.mount('#app')
