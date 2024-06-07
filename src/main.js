import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ru from 'element-plus/es/locale/lang/ru'

const app = createApp(App)

app.use(router)

app.use(ElementPlus, {
 locale: ru
})

app.mount('#app')
