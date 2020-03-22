<template>
  <div class="home-recommend">
    <div v-for="item in recommends" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="picture" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {}
};
</script>

<style>
.home-recommend {
  display: flex;
  text-align: center;
  padding: 15px 0px 20px;
  border-bottom: 10px solid rgb(247, 247, 247);
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
}
</style>