<template>
  <div id="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(msg, duration = 1500) {
      this.message = msg;
      this.isShow = true;
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    }
  }
};
</script>

<style>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(20, 20, 20, 0.632);
  padding: 8px 10px;
  border-radius: 4px;
  z-index: 99999;
}
</style>