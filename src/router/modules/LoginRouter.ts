import {RouteConfig} from 'vue-router';
import Login from '@/views/Login.vue';

export const LoginRouter: RouteConfig = {
  path: '/login',
  component: Login,
  name: 'Login',
  meta: {
    title: 'login',
    icon: 'component'
  },
  children: []
};
