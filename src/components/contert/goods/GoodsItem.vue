<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="goodsdata.show.img" alt="goodspic" @load="imageLoad" />
    <p>{{goodsdata.title}}</p>
    <div class="goods-item-tips">
      <div>
        <span class="goods-price">￥{{goodsdata.price}}</span>
      </div>
      <div>
        <span class="goods-collect">
          <img class="collect-icon" src="../../../assets/images/common/collect.svg" alt />
          {{goodsdata.cfav}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsdata: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoadFinish");
    },
    itemClick() {
      // this.$router.push("/detail/" + this.goodsdata.iid);
      this.$router.push("/detail/" + this.goodsdata.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin-bottom: 20px;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
}
.goods-item img {
  width: 100%;
  border-radius: 2%;
}
.goods-item-tips {
  display: flex;
  justify-content: space-between;
}
.goods-price {
  color: var(--color-tint);
}
.goods-collect {
  position: relative;
  z-index: -1;
}
.collect-icon {
  position: absolute;
  top: 1px;
  left: -20px;
  width: 16px !important;
  height: 16px;
  display: inline-block;
}
</style>