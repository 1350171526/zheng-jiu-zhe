<!-- 访问 -->
<template> 
  <div class="Access">
    <div class="iconfont icon-shandian"></div>
    <div>快捷访问</div>
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item-up">
            <span class="one"><img src="/src/assets/images/logo.png" alt="" width="45px" height="45px"></span>
            <span class="two">添加七牛到电脑桌面</span>
            <span class="three">下次可以在桌面快捷访问七牛</span>
            <span class="four">立即添加</span>
          </div>
          <div class="dropdown-item middle" >
            <span class="iconfont icon-shijianchajian"></span>
            <div class="Mad">
              <span>七牛浏览器插件</span>
              <span style="color: #464850; font-size: 12px;">点击下载插件</span>
            </div>
          </div>
          <div class="dropdown-item down">
            <span class="iconfont icon-shoucangjia"></span>
            <div class="Mad">
              <span>添加网页收藏夹</span>
              <span style="color: #464850; font-size: 12px;">点击添加七牛至收藏夹</span>
            </div>
          </div>
          </div>
        </div>
       
</template>

<script setup>

</script>

<style lang="scss" scoped>
.Access{
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
  min-width: 230px;
  background-color:#0f2340;
  opacity: 1;
  transition: all 0.2s 0.2s;
  transform: translateY(-100px) scale(1, 0);
  border-radius: 10px;
  
  .dropdown-item-up{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 190px;
    border-radius: 10px;
    
    span{
      padding: 5px;
    }
    .two{
      font-size: 16px;
    }
    .three{
      color: #6c6d75;
      font-size: 12px;
    }
    .four{
      background-color: #ff2c55;
      font-size: 14px;
      height: 40px;
      width: 200px;
      text-align: center;
      line-height: 25px;
      border-radius: 10px;
      margin-top: 5px;
    }
  }
  .dropdown-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;

    color: #fff;
    width: 100%;
    height: 60px;
    background-color:  #252632;
    .iconfont{
      padding-right: 10px;
    }
    .Mad{
      display: flex;
      flex-direction: column;
    justify-content: center;
    align-items: flex-start;
      height: 10px;
      
    }

  }
  .down{
    border-radius:0 0 10px 10px ;
  }
}
</style>

