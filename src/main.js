import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})
export default store
import App from './App.vue'

const app=createApp(App)//.mount('#app')
app.use(store)
app.mount('#app')