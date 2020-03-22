import Vue from 'vue';
import App from './App.vue';
import router from './router/routers';
import store from './store/index';
import toast from './components/common/toast';
import FaskClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(toast);
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FaskClick.attach(document.body);
  }, false);
}
Vue.use(VueLazyLoad, {
  loading: require('./assets/images/common/placeholder.png'),
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');