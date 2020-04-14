import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: 'layout' */ '../Layouts/BasicLayout'),
    children: [
      // dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { icon: 'dashboard', title: '仪表盘' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: { title: '分析页' },
            component: () =>
              import(
                /* webpackChunkName: 'dashboard' */ '../views/Dashboard/Analysis'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/User',
    component: () =>
      import(/* webpackChunkName: 'User' */ '../Layouts/UserLayout'),
    children: [
      {
        path: '/user',
        redirect: '/User/login'
      },
      {
        path: '/User/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: 'User' */ '../views/User/Login')
      },
      {
        path: '/User/register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: 'User' */ '../views/User/Register')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: 'not found' */ '../views/NotFound')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
