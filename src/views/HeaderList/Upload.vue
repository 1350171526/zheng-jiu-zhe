<!-- 上传 -->
<script setup>
import { ElLoading } from 'element-plus'
import { ref } from "vue";
const dialogVisible = ref(false)


const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '上传中',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}



</script>





<template>

  <div class="Client">
    <span class="iconfont icon-zengjia" ></span>
        <div>投稿</div> 
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">
            <div class="clickable" @click="dialogVisible = true" >发布视频</div>
            <div>视频管理</div>
            <div>作品数据</div>
            <div>直播数据</div>
            <div>创作者学习中心</div>
            <div>创作者服务平台</div>
            <div>剪映专业版</div>
          </div>
        </div>
  </div>

  <!-- 点击发布视频 -->
  <el-dialog
    :close-on-click-modal = "false"
    v-model="dialogVisible"
    width="30%"
    center
    :show-close="false"
  >
    <div class="upfile">
      <input type="file" ref="file">
      <div class="box">
        +
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">退出</el-button>
        <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="openFullScreen1">上传</el-button>
      </span>
    </template>
  </el-dialog>

    
</template>



<style lang="scss" scoped>
.upfile{
  position: relative;
  cursor: default;
  display: flex;
  justify-content: center;
  
  input{
    cursor: pointer;
    opacity: 0;
    width: 100px;
    height: 100px;
    position: absolute;
    // transform: translateX(50%) translateY(50%);
  }
  .box{
    width: 100px;
    height: 100px;
    font-size: 100px;
    // background-color: red;
    border: #b8b6b6 solid 1px;
    border-radius: 3px;
    font-weight: 10;
    line-height: 80px;
    text-align: center;
  }
  margin-bottom: 30px;
}
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
        background-color:#0f2340; 
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
  background-color:#0f2340 !important;

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
 
