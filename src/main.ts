import { createApp } from 'vue'
import './styles/main.css'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)

initializeRouter(app)
app.use(ToastPlugin)
app.mount('#app')
