import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import '@/assets/less/index.less'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/api/mock'
import "./style.css"
import api from '@/api/api'
const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$api = api
app.use(ElementPlus)
app.use(pinia)
app.use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}