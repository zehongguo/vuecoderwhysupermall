<template>
  <div class="goods-info" v-if="Object.keys(goods).length !== 0">
    <div class="goods-info-title">{{goods.title}}</div>
    <div class="goods-info-price">
      <span class="goods-info-new-price">{{goods.newPrice}}</span>
      <span class="goods-info-old-price">{{goods.oldPrice}}</span>
      <span class="goods-info-discount">{{goods.discount}}</span>
    </div>
    <div class="goods-columns">
      <div v-for="item in goods.columns" :key="item">{{item}}</div>
    </div>
    <div class="goods-services">
      <div class="goods-services-item" v-for="item in goods.services" :key="item.name">
        <img
          :src="item.icon || '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'"
          alt
        />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding: 15px 8px;
  border-bottom: 6px solid #f2f5f8;
}
.goods-info-title {
  font-size: 22px;
  color: rgb(40, 40, 40);
}
.goods-info-price {
  margin: 8px 0px;
  position: relative;
}
.goods-info-new-price {
  color: var(--color-tint);
  font-size: 26px;
}
.goods-info-old-price {
  display: inline-block;
  margin: 0px 10px;
  text-decoration: line-through;
  color: #ccc;
}
.goods-info-discount {
  background-color: var(--color-tint);
  color: white;
  display: inline-block;
  padding: 3px;
  border-radius: 4px;
  font-size: 14px;
  position: absolute;
  bottom: 0;
}
.goods-columns {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(131, 131, 131, 0.173);
  color: #ccc;
  padding: 10px 0px;
  margin-bottom: 20px;
}
.goods-services {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-content: center;
  padding-bottom: 6px;
}
.goods-services-item {
  display: flex;
  align-items: center;
}
.goods-services img {
  width: 14px;
  height: 14px;
  margin-right: 2px;
}
</style>