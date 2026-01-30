import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Landing from '../views/Landing.vue'


import Calculator24 from '../views/karats/K24/Calculator24.vue'
import Calculator22 from '../views/karats/K22/Calculator22.vue'
import Calculator21 from '../views/karats/K21/Calculator21.vue'
import Calculator18 from '../views/karats/K18/Calculator18.vue'
import Calculator14 from '../views/karats/K14/Calculator14.vue'
import Calculator10 from '../views/karats/K10/Calculator10.vue'
import Calculator8 from '../views/karats/K8/Calculator8.vue'
import Calculator6 from '../views/karats/K6/Calculator6.vue'


const routes = [
{ path: '/', redirect: '/login' },
{ path: '/login', component: Login },
{ path: '/landing', component: Landing },


{ path: '/24k', component: Calculator24 },
{ path: '/22k', component: Calculator22 },
{ path: '/21k', component: Calculator21 },
{ path: '/18k', component: Calculator18 },
{ path: '/14k', component: Calculator14 },
{ path: '/10k', component: Calculator10 },
{ path: '/8k', component: Calculator8 },
{ path: '/6k', component: Calculator6 }
]


const router = createRouter({
history: createWebHistory(),
routes
})


router.beforeEach((to, from, next) => {
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (to.path !== '/login' && !isLoggedIn) next('/login')
else next()
})


export default router