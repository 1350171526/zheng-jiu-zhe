<script setup>

</script>

<template>
  <div class="group">
    <text class="iconfont icon-jurassic_user">
      <div class="layer">
        <span>进入作者主页</span>
        <span>F</span>
      </div>
    </text>
    <div class="item"></div>
    <span class="font">
      +
      <div class="add">
        <span>关注</span>
        <span>G</span>
      </div>
    </span>

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
  margin-bottom: 10px;
  cursor: pointer;
  .item{
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    transform: translateY(60%);
  }
  .font{
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
    &:not(.group):hover{
    .add{
      opacity: 1;
      transform: none;
    }
  }
  .add{
    font-size: 14px;
    opacity: 0;
    display: flex;
    white-space: nowrap;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    top: -50%;
    right: 150%;
    background-color: #0F2743;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: auto;

    &::before{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      top: 17px;
      right: -4px;
      background-color: #0F2743;
      transform: scale(1, 0.9) rotate(45deg);
    }
    :nth-child(1){
      margin-right: 10px;
    }
    :nth-child(2){
      border-radius: 3px;
      color: #000;
      text-align: center;
      line-height: 20px;
      width: 20px;
      height: 20px;
      background-color: #fff;
    }
  }
  }
  .iconfont{
    height: 25px;
    font-size: 25px;
    &:hover{
    .layer{
      opacity: 1;
      transform: none;
    }
   }
  .layer{
    font-size: 14px;
    opacity: 0;
    display: flex;
    white-space: nowrap;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    top: 0;
    right: 150%;
    background-color: #0F2743;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: auto;
    &::before{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      top: 17px;
      right: -4px;
      background-color: #0F2743;
      transform: scale(1, 0.9) rotate(45deg);
    }
    :nth-child(1){
      margin-right: 10px;
    }
    :nth-child(2){
      border-radius: 3px;
      color: #000;
      text-align: center;
      line-height: 20px;
      width: 20px;
      height: 20px;
      background-color: #fff;
    }
  }
  }


}

</style>