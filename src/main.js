import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/tailwind.css'
import Antd from 'ant-design-vue'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
