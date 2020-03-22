<template>
  <div class="tool-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  components: {}
};
</script>

<style>
.tool-bar {
  display: flex;
  flex: 1;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 49px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -2px 5px rgba(212, 209, 209, 0.555);
}
</style>