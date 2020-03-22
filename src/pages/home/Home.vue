<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="home-tab-control"
      :titles="['流行','热销','上新']"
      @changetab="homechangetab"
      ref="tabcontrol1"
      v-show="isFixedTabControl"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="pullingUpdate"
    >
      <home-swiper :banner="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        class="home-tab-control"
        :titles="['流行','热销','上新']"
        @changetab="homechangetab"
        ref="tabcontrol2"
      />
      <goods-list :goodslistdata="goodsData" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/contert/tabcontrol/TabControl";
import GoodsList from "components/contert/goods/GoodsList";
import { BackTopMixin } from "../../common/mixin";
import HomeSwiper from "./chilrenComps/HomeSwiper";
import HomeRecommend from "./chilrenComps/HomeRecommend";
import HomeFeature from "./chilrenComps/HomeFeature";
import { getHomeMultiData, getHomeGoodsData } from "server/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [], positionY: 0 },
        new: { page: 0, list: [], positionY: 0 },
        sell: { page: 0, list: [], positionY: 0 }
      },
      currentGoodsType: "pop",
      tabOffsetTop: 0,
      isFixedTabControl: false,
      positionY: 0
    };
  },
  mixins: [BackTopMixin],
  computed: {
    goodsData() {
      return this.goods[this.currentGoodsType].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.positionY, 0);
  },
  deactivated() {
    this.positionY = this.$refs.scroll.bscroll.y;
  },
  created() {
    //获取首页的数据并赋值给data
    this.getHomeMultiDataInHome();
    this.getHomeGoodsDataInHome("pop");
    this.getHomeGoodsDataInHome("new");
    this.getHomeGoodsDataInHome("sell");
  },
  mounted() {
    //使用防抖函数防止多次刷新
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("imageLoadFinish", () => {
      refresh();
    });
  },
  methods: {
    getHomeMultiDataInHome() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsDataInHome(type) {
      getHomeGoodsData(type, this.goods[type].page + 1).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //数据加载完成后调用scroll方法
        this.$refs.scroll.finishPullUp();
        // this.$refs.scroll.refresh();
      });
    },
    homechangetab(index) {
      this.goods[this.currentGoodsType].positionY = this.positionY;
      switch (index) {
        case 0:
          this.currentGoodsType = "pop";
          break;
        case 1:
          this.currentGoodsType = "sell";
          break;
        case 2:
          this.currentGoodsType = "new";
          break;
        default:
          break;
      }
      this.$refs.scroll.scrollTo(
        0,
        this.goods[this.currentGoodsType].positionY,
        0
      );
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    contentScroll(position) {
      //mixin
      this.isShowBackTop(position);
      this.isFixedTabControl = -position.y > this.tabOffsetTop ? true : false;
      this.positionY = position.y;
    },
    pullingUpdate() {
      this.getHomeGoodsDataInHome(this.currentGoodsType);
    },
    //防抖函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
      this.goods["pop"].positionY = -this.tabOffsetTop;
      this.goods["sell"].positionY = -this.tabOffsetTop;
      this.goods["new"].positionY = -this.tabOffsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
}
.home-tab-control {
  position: relative;
  z-index: 999;
  top: -1px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  /* height: 100%; */
  /* position: absolute; */
  /* margin-bottom: 69px; */
}
</style>