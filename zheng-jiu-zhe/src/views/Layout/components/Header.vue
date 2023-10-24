<script setup>

</script>

<template>
  <div class="content">
    <div class="left">
      <div class="logo">logo</div>
      <div class="title">七牛</div>
    </div>
    <div class="middle">
      <input type="text" placeholder="搜索你感兴趣的内容">
      <span>
        <span>icon</span>
        <span>搜索</span>
      </span>
    </div>
    <div class="right">
      <div class="item">
        <div>icon</div>
        <div>充抖币</div>
        
      </div>
      <div class="item">
        
        <div>icon</div>
        <div>客户端</div>
      </div>
      <div class="item">
        
        <div>icon</div>
        <div>快捷访问</div>
      </div>
      <div class="item">
        
        <div>icon</div>
        <div>通知</div>
      </div>
      <div class="item">
        
        <div>icon</div>
        <div>私信</div>
      </div>
      <div class="item">
        
        <div>icon</div>
        <div>投稿</div>
      </div>
      <div class="item">
        头像
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      .title{
        font-size: 24px;
        height: 10vh;
        display: flex;
        align-items: center;

      }
    }
  .middle{
    width: 400px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
      margin-left: 10px;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      caret-color: red;
    }
    span{
      margin-right: 10px;
    }
  }
  .right{
    display: flex;
    .item{
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
  }
    
  }
</style>
