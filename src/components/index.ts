import { App, Component } from 'vue'
// 引入项目中全部的组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponent: Record<string, Component> = {
  SvgIcon,
  Pagination,
}

// 使用自定义插件管理所有全局组件
export default {
  // 务必使用install方法，接收app
  install(app: App) {
    // 遍历注册全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  },
}
