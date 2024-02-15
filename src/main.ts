import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import ElementPlus from 'element-plus'
import App from './App.vue'

// element-plus
import 'element-plus/dist/index.css'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
