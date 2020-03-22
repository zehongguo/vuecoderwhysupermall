<template>
  <div id="detail_bottom_bar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
#detail_bottom_bar {
  font-size: 0.65rem;
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;
}
.bottom_left {
  display: flex;
  flex: 1;
}
.bottom_left > div {
  flex: 1;
  border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
  display: block;
  background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  width: 1rem;
  height: 1rem;
  margin: 8px auto;
}
.service .icon {
  background-position: 0 -2.4rem;
}
.shop .icon {
  background-position: 0 -4.5rem;
}
.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
  color: white;
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>