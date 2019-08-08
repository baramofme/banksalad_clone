// Lib imports
import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// Routes
import {paths} from './paths';

const VueAnalytics = require('vue-analytics');

function route(path: any, view: any, name: any) {
    return {
        name: name || view,
        path,
        component: (resovle: any) => import(`@/views/${view}.vue`).then(resovle),
    };
}

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: paths.map((path: any) => route(path.path, path.view, path.name)).concat([
        {path: '*', redirect: '/dashboard'},
    ]),
    // routes: [
    //   {
    //     path: '/',
    //     name: 'home',
    //     component: Home,
    //   },
    //   {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //   },
    // ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0};
    },
});

Vue.use(Meta);

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
    Vue.use(VueAnalytics, {
        id: process.env.GOOGLE_ANALYTICS,
        router,
        autoTracking: {
            page: process.env.NODE_ENV !== 'development',
        },
    });
}

export default router;
