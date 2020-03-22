<template>
  <tool-bar>
    <tool-bar-item path="/home">
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tool-bar-item>
    <tool-bar-item path="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tool-bar-item>
    <tool-bar-item path="/shop-car">
      <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tool-bar-item>
    <tool-bar-item path="/profile">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tool-bar-item>
  </tool-bar>
</template>

<script>
import ToolBar from "components/common/toolbar/ToolBar.vue";
import ToolBarItem from "components/common/toolbar/ToolBarItem.vue";
export default {
  name: "MainToolBar",
  components: {
    ToolBar,
    ToolBarItem
  }
};
</script>

<style>
</style>