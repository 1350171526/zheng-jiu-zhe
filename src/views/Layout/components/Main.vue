<script setup>

</script>

<template>
  <div class="main">
    <div class="left">
      <video 
      class="my-vedio"
      src="D:/视频/Videos/Captures/League of Legends (TM) Client 2023-06-18 17-43-57.mp4" 
      controls="controls" 
      type="video/mp4"
      loop
      autoplay="autoplay"
      muted
      ></video>
    </div>
    <div class="right">
      <span class="iconfont icon-jiantoushang"></span>
      <span class="iconfont icon-jiantouxia"></span>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .left{
    position: relative;
    width: 95%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3); 
    video{
      position: absolute;
      width: 100%;  
      height: 100%;  
      z-index: 99;
      object-fit: contain; 
    }
  }
  .right{
    height: 100px;
    width: 50px;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.6);
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #8F8F95;
    cursor: pointer;
    &:hover{
      color: #cec8c8;
      background-color: rgba(0, 0, 0, 0.8);
    }
    span{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        color: #fff;
      }
    }
  }
}

</style>