<template>
  <div class="head-info">
    <div class="avatar">
      <img src="~assets/images/profile/avatar.svg" alt="头像" />
      <div class="login-info">
        <div style="margin:0px 0px 5px 4px;">登录/注册</div>
        <div class="phone-info">
          <img src="~assets/images/profile/phone.svg" alt="手机" />
          <span>暂无绑定手机号码</span>
        </div>
      </div>
    </div>
    <div class="loginbtn">
      <img src="~assets/images/common/arrow-left.svg" alt="按钮" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeadInfo"
};
</script>

<style scoped>
.head-info {
  color: white;
  background-color: var(--color-tint);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 10px 0px;
}
.avatar {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.avatar img {
  width: 80px;
  height: 80px;
}
.login-info {
  margin-left: 8px;
}
.phone-info {
  display: flex;
}
.phone-info img {
  width: 20px;
  height: 20px;
}
.loginbtn img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>