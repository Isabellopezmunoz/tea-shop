import { createApp } from 'vue'
import '@/styles/base.css'
import router from './router'

const app = createApp({
  template: `
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  `
})

app.use(router)

app.mount('#app')
