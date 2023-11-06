<script setup>
import Avatar from '@/views/MainList/Avatar.vue'
import Collect from '@/views/MainList/Collect.vue'
import Comment from '@/views/MainList/Comment.vue'
import Like from '@/views/MainList/Like.vue'
import Share from '@/views/MainList/Share.vue'
import More from '@/views/MainList/More.vue'

import { onMounted } from "vue"
onMounted(()=>{
  findvideocover()
})
const props = defineProps({
  urlArr: {
    type: Array, 
    default: []
  },
  index: {
    type: Number, 
    default: 0
  }
})
// 子组件触发父组件事件
const emit = defineEmits(['nextVedio']['lastVedio'])
const last = () =>{
  emit('lastVedio')
}
const next = () =>{
  emit('nextVedio')
}
// 鼠标滚轮事件
const mousewheel = (e) =>{
  if(e.deltaY>0){
    emit('nextVedio')
  }else if(e.deltaY<0){
    emit('lastVedio')
  }
}
// canvas绘制视频第一帧作为视频空白区域背景
const findvideocover = () =>{
    const  video = document.getElementById("upvideo"); 
    var canvas = document.getElementById('mycanvas') 
    const ctx = canvas.getContext('2d'); 
    video.crossOrigin = 'anonymous' 
    video.currentTime = 1 // 第一帧
    video.oncanplay = () => {
    canvas.width = video.clientWidth ; // 获取视频宽度
    canvas.height = video.clientHeight ; //获取视频高度
    // 利用canvas对象方法绘图
    ctx.drawImage(video, 0, 0, video.clientWidth,video.clientHeight)
  }
}

</script>

<template>
  <div class="main">
    <!-- 视频区域 -->
    <div class="video" @mousewheel="mousewheel">
      <!-- 预加载前一个视频 -->
      <div class="left">
        <video 
          playsinline="true"
          :src="props.urlArr[props.index-1]" 
          controls="controls" 
          type="video/mp4"
          preload
          muted
          controlsList="nodownload  noremoteplayback noplaybackrate" 
          disablePictureInPicture="true"
          v-if="props.urlArr"
        ></video>
      </div>
      <!-- 当前视频 -->
      <div class="left">
        <video 
          id="upvideo"
          playsinline="true"
          :src="props.urlArr[props.index]" 
          controls="controls" 
          type="video/mp4"
          loop
          autoplay="autoplay"
          muted
          controlsList="nodownload  noremoteplayback noplaybackrate" 
          disablePictureInPicture="true"
          v-if="props.urlArr"
        ></video>
        <div class="list">
          <div><Avatar/></div>
          <div><Like/></div>
          <div><Comment/></div>
          <div><Collect/></div>
          <div><Share/></div>
          <div><More/></div>
        </div>
        <canvas id='mycanvas'></canvas>
      </div>
      <!-- 预加载后一个视频 -->
      <div class="left">
        <video 
          preload
          playsinline="true"
          :src="props.urlArr[props.index+1]" 
          controls="controls" 
          type="video/mp4"
          muted
          controlsList="nodownload  noremoteplayback noplaybackrate" 
          disablePictureInPicture="true"
          v-if="props.urlArr"
        ></video>
      </div>
    </div>
    <!-- 右侧按钮 -->
    <div class="right">
      <span class="iconfont icon-jiantoushang" @click="last()"></span>
      <span class="iconfont icon-jiantouxia" @click="next()"></span>

    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (max-width :375px){
    .main{
      .video{
        width: 100% !important;
        height: 100vh - 6vh !important;
      }
      .right{
        display: none;
      }
    }  
}
@media screen and (max-width :876px){
    .main{
      .video{
        .left{
          &:nth-child(2){
            .list{
              display: none;
            }
          }
        }
      }
    }  
}


.main{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  .video{
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;

    
    .left{

      position: relative;
      border-radius: 20px;
      border: none;
      background-color: rgba(0, 0, 0, 0.3); 
      overflow: hidden;
      
      &:nth-child(2){
        height: 100%;
        width: 100%;
      }
    .list{
      height: 60%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-right: 30px;
      right: 0;
      top: 25%;
      transform: translateX(-50%);
      z-index: 100;

    }
    video{
      position: absolute;
      width: 100%;  
      height: 100%;  
      z-index: 99;
      object-fit: contain; 
    }
    canvas{
      width: 200%;
      height: 200%;
      position: absolute;
      left: -50%;
      top: -50%;
      filter: blur(40px);
    }
    video:focus { //取消视频边框外部出现白线
    outline: -webkit-focus-ring-color auto 0px;
    }
    video::-webkit-media-controls-timeline {
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%); 
        // margin: 0 auto;
        margin-bottom: 30px;
      }



    // 所有控件
    video::-webkit-media-controls {  
      border-radius: 20px;
      }
    
    } 
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


</style>