<template>
  <div class="cart-settle">
    <div class="settle-left">
      <cart-check-button
        class="cart_check_box"
        :isChecked="allChecked"
        @click.native="allCheckClick"
      />
      <span style="margin-top:10px">全选</span>
      <br />
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="settle-btn" @click="settleClick">去结算({{totalCount}})</div>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartSettle",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["totalPrice", "totalCount"]),
    allChecked() {
      if (this.$store.state.cartList.length === 0) return false;
      return this.$store.state.cartList.every(item => item.checked);
    }
  },
  methods: {
    allCheckClick() {
      this.$store.commit("allCheckClick");
    },
    settleClick() {
      if (this.$store.state.cartList.some(item => item.checked)) {
        let oldPirce = this.totalPrice;
        this.$store.commit("settleProduct");
        this.$toast.show(`购买成功,总共花费${oldPirce}元`);
      } else {
        this.$toast.show("您未选中商品");
      }
    }
  },
  components: {
    CartCheckButton
  }
};
</script>

<style scoped>
.cart-settle {
  display: flex;
  height: 50px;
  position: fixed;
  bottom: 49px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(228, 226, 226);
}
.cart_check_box {
  display: inline-block;
}
.settle-btn {
  background-color: var(--color-tint);
  height: 100%;
  padding: 0px 20px;
  color: white;
  line-height: 50px;
}
</style>