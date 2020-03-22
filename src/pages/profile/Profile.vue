<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <profile-head-info />
    <profile-money />
    <profile-list style="border-bottom: 15px solid #f5f5f5" :list-info="listInfo1" />
    <profile-list :list-info="listInfo2" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileHeadInfo from "./childrenComps/ProfileHeadInfo";
import ProfileMoney from "./childrenComps/ProfileMoney";
import ProfileList from "./childrenComps/ProfileList";
export default {
  name: "Profile",
  data() {
    return {
      listInfo1: [
        {
          icon: "@assets/images/profile/pointer.svg",
          info: "我的消息"
        },
        {
          icon: "@assets/images/profile/shopping.svg",
          info: "积分商城"
        },
        {
          icon: "@assets/images/profile/vip.svg",
          info: "会员卡"
        }
      ],
      listInfo2: [
        {
          icon: "@assets/images/profile/cart.svg",
          info: "我的购物车"
        },
        {
          icon: "@assets/images/profile/pointer.svg",
          info: "下载购物App"
        }
      ]
    };
  },
  components: {
    NavBar,
    ProfileHeadInfo,
    ProfileMoney,
    ProfileList
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.267);
}
</style>