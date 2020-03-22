<template>
  <div class="list-item">
    <img src="../../../assets/images/profile/shopping.svg" alt="icon" />
    <span>{{info}}</span>
  </div>
</template>

<script>
export default {
  name: "ProfileListItem",
  props: {
    icon: {
      type: String,
      default: "../../../assets/images/profile/shopping.svg"
    },
    info: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.list-item {
  padding: 10px 5px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.list-item img {
  width: 20px;
  height: 20px;
  margin: 0px 5px;
}
</style>  