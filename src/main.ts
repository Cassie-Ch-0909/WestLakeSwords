import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// element-plus
import 'element-plus/dist/index.css'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import zh_CN from './locale/zh-CN'
import en_US from './locale/en-US'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
