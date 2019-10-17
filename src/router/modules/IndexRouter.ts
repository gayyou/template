import {RouteConfig} from 'vue-router';
import Index from '@/views/Index.vue';

export const IndexRouter: RouteConfig = {
  path: '/index',
  component: Index,
  name: 'Index',
  meta: {
    title: 'IndexPage',
    icon: 'component'
  },
  children: []
};
