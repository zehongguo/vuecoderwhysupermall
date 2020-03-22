<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/images/common/back.svg" alt />
      </div>
      <div slot="center" class="detail-nav-bar">
        <div
          v-for="(item,index) in ['商品','参数','评论','推荐']"
          :key="item"
          @click="itemClick(index)"
          class="nav-bar-item"
          :class="{active:currentIndex === index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "NavBarItem",
  data() {
    return {
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-nav-bar {
  display: flex;
}
.nav-bar-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>