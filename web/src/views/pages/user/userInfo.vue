<template>
  <el-container style="height: 94vh;">
  <div>用户首页</div>
  </el-container>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style>
.transition-box {
  text-align: center;
  margin-top: 5%;
  color: #F2F6FC;
  font-size: 30px;
}

h1 {
  color: aliceblue;
  font-size: 80px;
}

a {
  text-decoration: none;
  color: #67C23A;
}
</style>
