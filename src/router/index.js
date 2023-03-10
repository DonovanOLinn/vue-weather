import { createRouter, createWebHistory } from 'vue-router';


import DashboardPage from '../views/DashboardPage.vue'
import LandingPage from '../views/LandingPage.vue'
import CityPage from '../views/CityPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // page for welcome 
            path: '/',
            name: 'home',
            component: LandingPage,
            meta: {
                title: "The Weather"
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage,
            meta: {
                title: "Dashboard"
            }
        },
        // We will need to configure the city view later
        {
            path: '/weather/:state/:city',
            name: "city",
            component: CityPage,
            meta: {
                title: "Weather"
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `${
        to.params.state ? 
        `${ to.params.city }, ${ to.params.state }`
        : 
        to.meta.title
    } | The Local Weather`;
    next();
})

export default router