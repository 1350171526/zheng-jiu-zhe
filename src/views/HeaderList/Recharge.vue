<!-- 充钱 -->
<script setup>
import {HeaderStateStore} from "@/stores/HeaderState.js"
const HeaderState= HeaderStateStore()

</script>


<template>
  <div class="Message">
    <span class="iconfont icon-yulebao"></span>
    <div>充牛币</div>
    <div class="dropdown-content" >
      <!-- 下拉菜单内容 -->
      <div class="dropdown-item up">
        <div v-if="HeaderState.isLogin">可充值牛币</div>
        <div v-else>登录后即可充值牛币</div>
      </div>
      <div class="dropdown-item middle">
        <div>1元=10牛币</div>
      </div>
      
      <div class="dropdown-item down" style="background-color:#ff2c55;border-radius: 0 0 10px 10px; ">
        <div v-if="HeaderState.isLogin">立即充值</div>
        <div v-else>立即登录</div>
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
  min-width: 220px;
  background-color:#0f2340; 
  opacity: 0;
  transition: all 0.2s 0.2s;
  transform: translateY(0px) scale(1, 0);
  border-radius: 10px;
  .dropdown-item{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 30px;
    line-height: 50px;
    
    
    .iconfont{
      padding-right: 10px;
    }

    &:hover{
      background-color:rgba(37, 38, 50); 
      border-radius: 10px;

    }
  }
  .up{
    height: 40px;
    color: #8f898f;
  }
  .middle{
    height: 60px;
    font-size: 18px;
    color: #e3e3e4;

  }
  .down{
    height: 40px;
  }
}
      



  

</style>


