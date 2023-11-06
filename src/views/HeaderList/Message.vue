<!-- 私信 -->
<script setup>
import {HeaderStateStore} from "@/stores/HeaderState.js"
const HeaderState=HeaderStateStore()

</script>

<template>
  <!-- 登录后显示的页面 -->
  <div class="group" v-if="HeaderState.isLogin">
  <div class="share">
    <span class="iconfont icon-weixin"></span>
      <div>私信</div>
  </div>
  
  <div class="layer">
    <span class="top">
      <div>私信</div>
    </span>
    <span class="middle">
      <span class="share">给好友发消息</span>
      <div class="item" v-for="item in 6" :key="item">
        <div class="left">
          <div class="icon">
            <text class="iconfont icon-jurassic_user"></text>
          </div>
          <span>用户{{ item }}</span>
        </div>
        <div class="right">
          <span>私信</span>
        </div>
      </div>
    </span>
    
    </div>
  </div>
  <!-- 未登录的页面 -->
  <div class="Message" v-else>
    <span class="iconfont icon-weixin"></span>
        <div>私信</div>
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">
            <div>登录后即可查看私信消息</div>
          </div>
          
          <div class="dropdown-item" style="background-color:#ff2c55;border-radius: 0 0 10px 10px; ">
            <div>立即登录</div>
          </div>
        </div>
        
  </div>
</template>



<style lang="scss" scoped>
.Message{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 600;
  &:hover{
    .dropdown-content{
      opacity: 1;
      transform: none;
      
      
    }
  }
}
.dropdown-content {
        z-index: 999 ;
        position: absolute;
        top: 50px;
        left: -50px;
        border-left: 10px;
        min-width: 160px;
        background-color:#0f2340; 
        opacity: 0;
        transition: all 0.2s 0.2s;
        transform: translateY(0) scale(1, 0);
        border-radius: 10px;
        .dropdown-item{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          width: 100%;
          height: 50px;
          line-height: 50px;
          
          .iconfont{
            padding-right: 10px;
          }

          &:hover{
            background-color:rgba(37, 38, 50); 
            border-radius: 10px;

          }
        }
      }




      //登录之后的样式
      .group{
  position: relative;
  cursor: pointer;
  .share{
    display: flex;
    align-items: center;
    flex-direction: column;
    
  }
  text{
    height: 30px;
    font-size: 25px;
  }
  &:hover{
    .layer{
      opacity: 1;
      transform: none;
    }
  }
  .layer{
    z-index: 999;
    width: 300px;
    height: 470px;
    opacity: 0;
    display: flex;
    top: 50px;
    left: -190px;
    flex-direction: column;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateY(-100px) scale(1, 0);
    white-space: nowrap;
    bottom: 5px;
    right: 150%;
    background-color:#0f2340;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: auto;
    .top{
      width: 100%;
      height: 30px;
      margin-top: 5px;
      margin-bottom: 15px;
      font-size: 16px;
      color: #b1b1b6;
      
      display: flex;
      align-items: center;
      border-radius: 5px;

      span{
        margin: 0 10px;
        &:nth-child(2){
          margin-right: 10px;
        }
      }
      input{
        background-color:transparent;
        border: none;
        outline: none;
        caret-color: red;

      }
    }
    .middle{
      border-top: rgba(57, 57, 63, 0.8) solid 1px;
      padding: 10px 0;
      overflow: auto;
      &::-webkit-scrollbar {display:none}

      
      .item{
        margin-top: 10px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .left{
          display: flex;
          align-items: center;
          
          .icon{
            width: 40px;
            height: 40px;
            background-color: #1296db;
            border-radius: 50%;
            margin-right: 15px;
            text-align: center;
          }
          
        }
        .right{
          background-color: #FE2C55;
          padding: 5px 20px;
          border-radius: 5px;
          cursor: pointer;
          &:hover{
            background-color: #D21B46;

          }
        }
      }
    }
    
  }
}
      

  

</style>


