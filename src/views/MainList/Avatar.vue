<script setup>

</script>

<template>
  <div class="group">
    <text class="iconfont icon-jurassic_user"></text>
    <div></div>
    <span>+</span>
  </div>
</template>

<style lang="scss" scoped>
.group{
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1296db;
  border-radius: 50%;
  div{
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    transform: translateY(60%);
  }
  span{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bolder;
    transform: translateY(50%);
  }
  text{
    height: 25px;
    font-size: 25px;
  }
  
}

</style>