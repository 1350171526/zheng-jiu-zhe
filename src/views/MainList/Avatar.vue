<!-- 作者头像 -->
<script setup>
const homepage = () =>{
  // 点击作者头像
  // 1.向后端发送请求（视频作者id）根据作者ID获取作者主页信息
  // 进入主页根据信息渲染页面
}
</script>

<template>
  <div class="group">
    <text class="iconfont icon-jurassic_user" @click="homepage()">
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
  width: 37px;
  height: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1296db;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 0 5px 3px rgba(0,0,0,0.2);
  cursor: pointer;
  .item{
    width: 18px;
    height: 18px;
    background-color: red;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    transform: translateY(50%);
  }
  .font{
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    font-size: 18px;
    line-height: 18px;
    font-weight: bolder;
    transform: translateY(40%);
    
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
  :hover{
  .add{
    opacity: 1;
    transform: none;
  }
  }
  text{
    font-size: 20px !important;
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
    opacity: 1;
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