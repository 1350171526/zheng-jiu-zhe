<!-- 上传 -->
<template>
  <div class="Client">
    <span class="iconfont icon-zengjia" @click="centerDialogVisible = true"></span>
        <div>投稿</div> 
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">
            <div class="clickable">发布视频</div>
            <div>视频管理</div>
            <div>作品数据</div>
            <div>直播数据</div>
            <div>创作者学习中心</div>
            <div>创作者服务平台</div>
            <div>剪映专业版</div>
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
        left: -80px;
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
          flex-direction: column;
          align-items: center;
          color: #fff;
          width: 100%;
          height: 100%;
          line-height: 50px;
          border-radius: 10px;
           .clickable {  
              cursor: pointer; 
                }  
  
&> div:not(.clickable) {  
  cursor: not-allowed; 
  background-color:#102543 !important;

}
          div{
            width: 100%;
            padding-left: 30px;
            &:hover{
            background-color: rgba(37, 38, 50);
            
          }
          }
          
        }
      }
</style>
 
