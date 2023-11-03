import './assets/main.css'
import '../src/assets/iconfont/iconfont.css'

import './assets/fonts/iconfont.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')