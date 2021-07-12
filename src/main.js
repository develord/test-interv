import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import treeContents from './components/treeContents'
import treeFolder from './components/treeFolder'
import userCard from './components/userCard'

const app = createApp(App)
app.component('treeFolder', treeFolder)
app.component('treeContents', treeContents)
app.component('userCard', userCard)

app.use(router).mount('#app')
