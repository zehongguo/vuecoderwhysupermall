<template>
  <div class="tool-bar-item" @click="itemClick">
    <div v-if="!isActived">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isTextActived">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBarItem",
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isTextActived() {
      return this.isActived ? { color: this.activeFontColor } : {};
    }
  },
  props: {
    path: String,
    activeFontColor: {
      type: String,
      default: "#ff5677"
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tool-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  margin-top: 3px;
}
.tool-bar-item img {
  width: 24px;
  height: 24px;
  margin-bottom: -3px;
}
</style>