import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App)
import kittyui from "adeng-ui"
import { Button } from 'adeng-ui'
app.use(kittyui)
app.use(Button)
console.log(kittyui);

app.mount('#app') 