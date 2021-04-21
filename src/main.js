import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header'
import './theme.css'


const app =createApp(App)

app.component('the-header', Header)

app.mount('#app')