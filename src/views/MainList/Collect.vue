<script setup>
let number = Math.floor(Math.random() * (10000 - 0 + 1)) + 0

</script>

<template>
  <div class="group">
    <text class="iconfont icon-shoucang"></text>
    {{ number }}
  </div>
  
</template>

<style lang="scss" scoped>
.group{
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  text{
    height: 30px;
    font-size: 25px;
  }
}
  
</style>