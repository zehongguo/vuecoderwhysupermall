<template>
  <div id="detail">
    <nav-bar-item class="nav-bar-item" ref="navbar" @titleClick="titleClick" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <goods-info :goods="goods" />
      <shop-info :shop="shop" />
      <detail-nav-image :imagesInfo="detailInfo" @imageLoadDone="imageLoadDone" />
      <detail-params :paramInfo="paramInfo" ref="paramsRef" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import NavBarItem from "./childComps/NavBarItem";
import DetailSwiper from "./childComps/DetailSwiper";
import GoodsInfo from "./childComps/GoodsInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import ShopInfo from "./childComps/DetailShopInfo";
import DetailParams from "./childComps/DetailParams";
import DetailNavImage from "./childComps/DetailNavImage";
import Scroll from "../../components/common/scroll/Scroll";
import { BackTopMixin } from "../../common/mixin";
import { getDetailGoodsData, GoodsData, Shop, GoodsParam } from "server/detail";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      themePositionYs: [],
      currentIndex: 0
    };
  },
  mixins: [BackTopMixin],
  components: {
    NavBarItem,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    DetailNavImage,
    DetailParams,
    Scroll,
    DetailBottomBar
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailGoodsDataInDetail();
  },
  mounted() {},
  methods: {
    ...mapActions(["addCart"]),
    getDetailGoodsDataInDetail() {
      getDetailGoodsData(this.iid).then(res => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new GoodsData(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
      });
    },
    imageLoadDone() {
      this.$refs.scroll.refresh();
      this.themePositionYs.push(0);
      this.themePositionYs.push(this.$refs.paramsRef.$el.offsetTop);
      this.themePositionYs.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      index < 2 &&
        this.$refs.scroll.scrollTo(0, -this.themePositionYs[index], 300);
    },
    contentScroll(position) {
      //mixin
      this.isShowBackTop(position);
      let positionY = -position.y;
      for (let i = 0; i < this.themePositionYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themePositionYs[i] &&
          positionY < this.themePositionYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = i;
        }
      }
    },
    addToCart() {
      const product = {
        iid: this.iid,
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        image: this.topImages[0]
      };
      this.addCart(product).then(res => this.$toast.show(res));
    }
  }
};
</script>

<style scoped>
.nav-bar-item {
  position: relative;
  z-index: 1000;
  background-color: #fff;
}
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  height: 100vh;
}
.content {
  overflow: hidden;
  height: calc(100% - 44px - 49px);
}
</style>