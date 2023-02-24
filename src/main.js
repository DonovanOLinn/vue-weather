import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style.css'
import router from './router/index.js'
import { createAuth0 } from '@auth0/auth0-vue'

// createApp(App).use(router).mount('#app')
const app = createApp(App);

app
  .use(router)
  .use(
    createAuth0({
      domain: "dev-1s701z3q5cpck4i0.us.auth0.com",
      clientId: "IBtGAYtJlpwNJL7gHz4FTeE4cuOkJl5K",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.mount('#app');