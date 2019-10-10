import Vue from 'vue'
import Router from 'vue-router'
import Create from './pages/create';
import Update from "./pages/update";
import Overview from "./pages/overview"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'overview',
            component: Overview
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/update/:id',
            name: 'update',
            component: Update
        }


    ]
})