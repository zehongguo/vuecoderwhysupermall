import Toast from './Toast.vue';
const toastObj = {};
toastObj.install = function (Vue) {
  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2. 使用new 创建一个组件对象
  const toastComp = new toastConstructor();
  // 3. 将组件对象挂载到dom元素上
  toastComp.$mount(document.createElement('div'));
  // 4. toast.$el对应的div
  document.body.appendChild(toastComp.$el);
  // 5. 将对象挂载到Vue prototype上
  Vue.prototype.$toast = toastComp;
};
export default toastObj;