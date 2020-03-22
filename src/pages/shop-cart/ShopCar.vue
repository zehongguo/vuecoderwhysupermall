<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{shopCount}})</div>
    </nav-bar>
    <cart-item />
    <cart-settle />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartItem from "./CartItem";
import CartSettle from "./CartSettle";
export default {
  name: "ShopCar",
  computed: {
    shopCount() {
      let count = 0;
      this.$store.state.cartList.map(item => {
        count += item.count;
      });
      return count;
    }
  },
  components: {
    NavBar,
    CartItem,
    CartSettle
  }
};
</script>
 
<style scoped>
.cart-nav-bar {
  background-color: var(--color-tint);
  color: white;
}
</style>