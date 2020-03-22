<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tool-bar />
  </div>
</template>

<script>
import MainToolBar from "components/contert/maintoolbar/MainToolBar";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    MainToolBar
  }
};
</script>

<style>
@import url("assets/css/base.css");
#app {
}
</style>
