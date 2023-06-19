import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: HomeView
        // },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // },
        {
            path: '/glqxz',
            name: 'glqxz',
            component: () => import('../views/GameReq-glqxz.vue')
        },
        {
            path: '/gjqt',
            name: 'gjqt',
            component: () => import('../views/GameReq-gjqt.vue')
        }
    ]
})

export default router
