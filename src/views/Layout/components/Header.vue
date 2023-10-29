<script setup>

</script>

<template>
  <div class="content">
    <div class="left">
      <img src="../../../assets/images/logo.png" alt="">
      <div class="title" >七牛</div>
    </div>
    <div class="middle">
      <input type="text" placeholder="搜索你感兴趣的内容">
      <span>
        <span class="iconfont icon-sousuo"></span>
        <div>搜索</div>
      </span>
    </div>
    <div class="right">
      <div class="item" >
        <span class="iconfont icon-yulebao"></span>
        <div>充牛币</div>
      </div>
      <div class="item" >
        <span class="iconfont icon-xiazai"></span>
        <div>客户端</div>
      </div>
      <div class="item" >
        <span class="iconfont icon-shandian"></span>
        <div>快捷访问</div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-tishi"></span>
        <div>通知</div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-weixin"></span>
        <div>私信</div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-zengjia"></span>
        <div>投稿</div>
      </div>
      <div class="item avatar" >
        <img src="../../../assets/images/avatat.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (max-width: 1240px) {
    .title{
      display: none;
      color: #000;
    }
  }
  @media screen and (max-width: 1024px) {
    .content{
      .right{
        .item{
          &:nth-child(-n+3){
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 876px) {
    .content{
      .right{
        .item{
          &:nth-child(n+4):nth-child(-n+6){
            display: none;
            // color: #000;
          }
        }
      }
    }
  }
  .content{
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      cursor: pointer;
      display: flex;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
      }
      .title{
        font-size: 24px;
      }
    }
  .middle{
    width: 350px;
    height: 50px;
    border: 2px solid #BABABD;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
      border: 2px solid #ffffff;
      span{
        cursor: pointer;
        background-color: #fff;
        color: #000;
      }
    }
    input{
      width:  250px;
      margin-left: 10px;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      caret-color: red;
      color: #fff;
    }
    span{
      display: flex;
      align-items: center;
      height: 50px;
      padding-right: 10px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      span{
        height: 50px;
        line-height: 50px;
      }
    }
    
  }
  
  
  .right{
    display: flex;

    .avatar{
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      :hover{
        transform: scale(1.2);
    }
    }
    
    .item{
      color: #b8b6b6;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    :hover{
        color: #fff;
        cursor: pointer;
    }
  }
    
  }
</style>
