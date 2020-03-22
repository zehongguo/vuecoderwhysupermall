<template>
  <div class="wapper" ref="wapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      bscroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    },
    refresh() {
      this.bscroll.refresh();
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    });
    this.bscroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.bscroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  }
};
</script>

<style scoped>
</style>