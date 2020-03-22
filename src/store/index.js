import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCartCount(state, payload) {
      payload.count += 1;
    },
    addToCart(state, payload) {
      payload.count = 1;
      payload.checked = false;
      state.cartList.push(payload);
    },
    changeChecked(state, index) {
      state.cartList[index].checked = !state.cartList[index].checked;
    },
    allCheckClick(state) {
      let flag = state.cartList.some(item => !item.checked);
      state.cartList.map(item => {
        item.checked = flag;
      });
    },
    settleProduct(state) {
      state.cartList = state.cartList.filter(item => !item.checked);
    },
  },
  getters: {
    // 选中商品的价格
    totalPrice(state) {
      let total = 0;
      state.cartList
        .filter(item => item.checked)
        .map(item => {
          total += item.price * item.count;
        });
      return total.toFixed(2);
    },
    //选中的总数
    totalCount(state) {
      let total = 0;
      state.cartList
        .filter(item => item.checked)
        .map(item => {
          total += item.count;
        });
      return total;
    },
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve) => {
        let oldProduct = context.state.cartList.find((item) => item.iid === payload.iid);
        if (oldProduct) {
          context.commit("addToCartCount", oldProduct);
          resolve("商品+1");
        } else {
          context.commit("addToCart", payload);
          resolve("添加商品成功");
        }
      });
    },
  }
});