import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';
import {IndexRouter} from '@/router/modules/IndexRouter';
import {LoginRouter} from '@/router/modules/LoginRouter';

Vue.use(Router);

export const constantRoutes: RouteConfig[] = [
  IndexRouter,
  LoginRouter
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
});


