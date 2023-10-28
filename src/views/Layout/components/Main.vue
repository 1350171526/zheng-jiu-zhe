<script setup>
import { ref } from 'vue';

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

const emit = defineEmits(['nextVedio']['lastVedio'])
const last = () =>{
  emit('lastVedio')
}
const next = () =>{
  emit('nextVedio')
}

</script>

<template>
  <div class="main">
    <div class="left">
      <video 
      class="my-vedio"
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
    </div>
    <div class="right">
      <span class="iconfont icon-jiantoushang" @click="last()"></span>
      <span class="iconfont icon-jiantouxia" @click="next()"></span>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .left{
    position: relative;
    width: 95%;
    height: 100%;
    border-radius: 20px;
    border: none;
    background-color: rgba(0, 0, 0, 0.3); 
    video{
      transition: box-shadow 0.3s ease-in-out !important; /* 添加过渡效果 */  
      box-shadow: none !important;  
      position: absolute;
      width: 100%;  
      height: 100%;  
      z-index: 99;
      object-fit: contain; 
     
    }
    video::-webkit-media-controls-timeline {
        width: 100%;
        position: absolute;
        left: -15px;
        margin-bottom: 30px;
      }



    // 所有控件
    video::-webkit-media-controls {  
      border-radius: 20px;
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