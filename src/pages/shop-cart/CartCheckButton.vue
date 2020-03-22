<template>
  <div class="checkbox">
    <input type="checkbox" :checked="isChecked" />
  </div>
</template>
<script>
export default {
  props: {
    isChecked: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
