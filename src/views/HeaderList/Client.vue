<!-- 客户端 -->
<template>
  <div class="Client">
    <div class="iconfont icon-xiazai"></div>
        <div>客户端</div>
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">
            <span class="iconfont icon-xiazai"></span>
            <div>高清流畅播放</div>
          </div>
          <div class="dropdown-item">
            <span class="iconfont icon-xiazai"></span>
            <div>好友消息通知</div>
          </div>
          <div class="dropdown-item">
            <span class="iconfont icon-xiazai"></span>
            <div>桌面便捷访问</div>
          </div>
          <div class="dropdown-item" style="background-color: red;border-radius: 0 0 10px 10px; ">
            <div>下载电脑客户端</div>
          </div>
        </div>
        

  </div>
    
</template>

<script setup>



</script>

<style lang="scss" scoped>
.Client{
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
        background-color:#102543; 
        opacity: 0;
        transition: all 0.2s 0.2s;
        transform: translateY(-100px) scale(1, 0);
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
      
/* .Client {
      position: relative;
      z-index: 600;
      justify-content: center;
      align-items: center;
      &:hover{
        .dropdown-content{
          opacity:1;
          transform: none;
        }
      }
      .dropdown-content {
        z-index: 999 ;
        position: absolute;
        top: 50px;
        left: 0px;
        border-left: 10px;
        background-color:#102543; 
        opacity: 0;
        transition: all 0.4s 0.2s;
        transform: translateY(-200px) scale(1, 0);
        border-radius: 4px;
        .dropdown-item{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          color: #fff;
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding-left: 10px;
          &:hover{
            background-color:rgba(37, 38, 50); 
          }
        }
      }
    } */


  

</style>


