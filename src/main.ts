import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'view-design/dist/styles/iview.css';
import iviewUI from 'view-design'


Vue.use(iviewUI)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
