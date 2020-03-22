<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      :class="{active:currentIndex == index}"
      class="tab-control-item"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("changetab", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.active > span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
  padding: 5px;
}
</style>