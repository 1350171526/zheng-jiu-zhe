<!-- 上传 -->
<script setup>
import {uploadVedioApi} from '@/apis/upload'
import {HeaderStateStore} from "@/stores/HeaderState.js"
import * as qiniu from 'qiniu-js'
import { ElLoading, ElMessage } from 'element-plus'
import { ref } from "vue";

const HeaderState=HeaderStateStore()
const dialogVisible = ref(false)
const file = ref(null)
const fullscreenLoading = ref(false)
let progress = ref(0)
const fileName = ref('')

// 监听file的变化
const change = () =>{
  fileName.value = file.value.files[0].name
}
// 点击上传视频
const uploadFile = async() =>{
  // 没有文件信息的消息提示
  if(!file.value.files.length){
    ElMessage({
      type: 'warning',
      message: '请选择文件'
    })
    return;
  }
  // 调用上传接口获取七牛云token信息
  const res = await uploadVedioApi()
  let token = res.data
  let files = file.value.files[0]
  let key = null
  const putExtra = {};
  const config = {
    useCdnDomain: true,
    region: qiniu.region.z1
  };
  const observable = qiniu.upload(files, key, token, putExtra, config)
  const observer = {
    next(res){
      // 上传时的进度显示 progress
      progress.value = res.total.percent
      progress.value = Math.floor(progress.value)
      fullscreenLoading.value = true 
        if(progress.value === 100){
          fullscreenLoading.value = false
        }
    },
    error(err){
      // console.log(err);
      ElMessage({
        type: 'error',
        message: '上传失败'
    })
    },
    complete(res){
      // console.log('res');
      ElMessage.success('上传成功')
      dialogVisible.value = false
    }
  }
  observable.subscribe(observer)
}

// 进入上传页面前判断是否登录
const dialogVis = () =>{
  if(!HeaderState.isLogin){
    ElMessage('请先登录')
    return 
  }
  dialogVisible.value = true
}

</script>
<template>

  <div class="Client">
    <span class="iconfont icon-zengjia" ></span>
        <div>投稿</div> 
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">
            <div class="clickable" @click="dialogVis()" >发布视频</div>
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
      <input type="file" ref="file" @change="change()" accept="vedio/mp4">
      <div class="box">
        +
      </div>
      <div v-if="fileName" class="fileName">{{ fileName }}</div>
      <div v-if="fullscreenLoading" class="progress">{{ progress }}%</div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">退出</el-button>
        <el-button type="primary" 
        v-loading.fullscreen.lock="fullscreenLoading" 
        @click="uploadFile"
        element-loading-background="rgba(255,255,255,0.1)"
        >上传</el-button>
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
  margin-bottom: 30px;
  input{
    cursor: pointer;
    opacity: 0;
    width: 100px;
    height: 100px;
    position: absolute;
  }
  .fileName{
    color: grey;
    left: 50%;
    bottom: -30%;
    position: absolute;
    transform: translateX(-50%);
  }
  .progress{
    color: #1277dc;
    font-size: 20px;
    bottom: -170%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
  .box{
    width: 100px;
    height: 100px;
    font-size: 100px;
    border: #b8b6b6 solid 1px;
    border-radius: 3px;
    font-weight: 10;
    line-height: 80px;
    text-align: center;
  }
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
 
