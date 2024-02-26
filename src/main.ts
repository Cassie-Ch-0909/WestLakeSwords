import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import WOW from 'wow.js'
import App from './App.vue'

// element-plus
import 'element-plus/dist/index.css'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import zh_CN from './locale/zh-CN'
import en_US from './locale/en-US'

new WOW({
  boxClass: 'wow', // 类名，在用户滚动时显示隐藏的框。
  animateClass: 'animate__animated', // 触发CSS动画的类名称
  offset: 300, // 定义浏览器视口底部与隐藏框顶部之间的距离。当用户滚动并到达此距离时，隐藏的框会显示出来。
  mobile: true, // 在移动设备上打开/关闭WOW.js。
  live: true, // 在页面上同时检查新的WOW元素。
}).init()

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => {
    return { top: 0 }
  },
})
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  allowComposition: true,
  locale: 'en-us',
  fallbackLocale: 'zh-cn',
  messages: {
    'en-us': en_US,
    'zh-cn': zh_CN,
  },
})

app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')
