import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('pages/home/Home.vue');
const Category = () => import('pages/category/Category.vue');
const ShopCar = () => import('pages/shop-cart/ShopCar.vue');
const Profile = () => import('pages/profile/Profile.vue');
const Detail = () => import('pages/detail/Detail.vue');

Vue.use(VueRouter);

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: "/home",
  component: Home,
}, {
  path: "/category",
  component: Category,
}, {
  path: '/shop-car',
  component: ShopCar,
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/detail/:iid',
  component: Detail
}, ];
export default new VueRouter({
  routes
});