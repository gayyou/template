import {RouteConfig} from 'vue-router';
import Index from '@/views/Index.vue';
import Constraint from '@/components/indexModule/rightSection/constraint/Constraint.vue';
import UploadContainer from '@/components/indexModule/rightSection/upload/Upload.vue';
import UserPage from '@/components/indexModule/rightSection/userPage/UserPage.vue';

export const IndexRouter: RouteConfig = {
  path: '/index',
  component: Index,
  redirect: '/index/constraint',
  name: 'index',
  meta: {
    title: 'IndexPage',
    icon: 'component'
  },
  children: [
    {
      path: 'constraint',
      component: Constraint,
      name: 'Constraint'
    },
    {
      path: 'upload',
      component: UploadContainer,
      name: 'Upload'
    },
    {
      path: 'userpage',
      component: UserPage,
      name: 'UserPage'
    }
  ]
};
