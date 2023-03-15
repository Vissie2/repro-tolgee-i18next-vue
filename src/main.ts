import { createApp } from 'vue'

import './assets/main.css'
import App from './App.vue'

import i18nextVue from 'i18next-vue'
import { i18next } from './i18n'

createApp(App).use(i18nextVue, { i18next }).mount('#app')
