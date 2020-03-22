<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  box-shadow: 0px 1px 2px rgb(235, 231, 231);
  line-height: 44px;
  text-align: center;
  width: 100%;
}
.left,
.right {
  width: 60px;
  line-height: 55px;
}
.center {
  flex: 1;
}
</style>