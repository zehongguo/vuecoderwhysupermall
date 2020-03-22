<template>
  <div class="money-card">
    <div class="money-card-info" v-for="(item,index) in money" :key="index">
      <span class="money-span">{{item}}</span>
      {{info.unit[index]}}
      <div>{{info.text[index]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMoney",
  data() {
    return {
      info: {
        unit: ["元", "个", "分"],
        text: ["我的余额", "我的收藏", "我的积分"]
      }
    };
  },
  props: {
    money: {
      type: Array,
      default() {
        return [100.0, 10, 558];
      }
    }
  }
};
</script>

<style scoped>
.money-card {
  display: flex;
  background-color: white;
  border-bottom: 15px solid rgba(239, 239, 239, 0.664);
  font-size: 14px;
}
.money-card-info {
  flex: 1;
  border-left: 1px solid rgba(228, 228, 228, 0.349);
  color: rgb(24, 24, 24);
  text-align: center;
  padding: 20px 0px;
}
.money-span {
  color: rgb(252, 53, 4);
  font-size: 22px;
}
</style>