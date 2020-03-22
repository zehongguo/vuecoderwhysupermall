<template>
  <div class="cart-item-container" v-if="cartList.length != 0">
    <scroll class="content">
      <div class="cart-item" v-for="(item,index) in cartList" :key="item.iid">
        <div class="icon-btn">
          <cart-check-button
            @click.native="checkClick(index)"
            :isChecked="item.checked"
            ref="checkButtonRef"
          />
        </div>
        <div class="right-content">
          <div>
            <img :src="item.image" alt="picture" />
          </div>
          <div class="right-info">
            <div class="info-title">{{item.title}}</div>
            <div class="info-desc">{{item.desc}}</div>
            <div class="info-price">
              <div class="info-price-price">￥{{item.price}}</div>
              <div>x{{item.count}}</div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CartItem",
  components: {
    CartCheckButton,
    Scroll
  },
  methods: {
    checkClick(index) {
      this.$store.commit("changeChecked", index);
    }
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style scoped>
.cart-item-container {
  width: 100vw;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-top: 10px;
}
.icon-btn {
  margin: 0px 5px;
}
.right-content {
  display: flex;
}
.right-content img {
  display: inline-block;
  width: 100px;
  height: 120px;
  border-radius: 5px;
}
.right-info {
  font-size: 14px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-title,
.info-desc {
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-title {
  font-size: 16px;
  color: rgb(37, 37, 37);
}
.info-price {
  display: flex;
  justify-content: space-between;
}
.info-price-price {
  font-size: 16px;
  color: rgb(253, 61, 2);
}
</style>