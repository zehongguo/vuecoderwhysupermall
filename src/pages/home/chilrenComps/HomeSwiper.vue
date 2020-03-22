<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="picture" @load="swiperImageLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    swiperImageLoad() {
      // !this.isLoad && this.isLoad = true;
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style>
</style>