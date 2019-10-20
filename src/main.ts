import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
<<<<<<< HEAD
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
=======
import 'view-design/dist/styles/iview.css';
import { Button, Upload } from 'view-design';

Vue.component('Button', Button);
Vue.component('Upload', Upload);



>>>>>>> 84cb759d6a60971ad9eef0b5dbb9157db481e7ed

Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
