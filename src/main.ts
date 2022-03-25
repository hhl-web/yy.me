import { createApp } from 'vue'
import App from './app/index.vue'
import appConfig from './app/index';


const app =createApp(App);
for(const key of appConfig){
    console.log(key)
    app.use(key)
}

app.mount('#app');

