<template>
  <div>
    <profile-list-item
      v-for="item in listInfo"
      :key="item.icon"
      :icon="item.icon"
      :info="item.info"
    />
  </div>
</template>

<script>
import ProfileListItem from "./ProfileListItem";
export default {
  name: "profileList",
  props: {
    listInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    ProfileListItem
  }
};
</script>

<style>
</style>