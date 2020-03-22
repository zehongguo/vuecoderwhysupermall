<template>
  <div class="goods-list">
    <goods-item v-for="item in goodslistdata" :key="item.link" :goodsdata="item" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsList",
  props: {
    goodslistdata: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  components: {
    GoodsItem
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
}
</style>