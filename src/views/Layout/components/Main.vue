<script setup>
 import * as qiniu from 'qiniu-js'
 
 
 console.log(qiniu);
//  const accessKey = 'h6BkfhZ-X2xcGqz-qcy7J5FFoo5zuHr8me1e_Nw1'  
// const secretKey = 'gzwDa0e4EgwUPVx3FzuvF05mw-kQJv8V6T9WUiBD'  
// const mac = new qiniu.auth.digest.Mac(accessKey, secretKey) 
// console.log(mac);
// const bucket = 'zheng-jiu-zhe'  
  
// const qiniuClient = new qiniu.auth.Client({  
//   accessKey,  
//   secretKey,  
// })  
  
// // 获取资源列表  
// qiniuClient.bucketList(bucket, null, function(err, data) {  
//   if (err) {  
//     console.error(err)  
//     return  
//   }  
//   console.log(data)  
// })
</script>

<template>
  <div class="main">
    <div class="left">
      <video 
      class="my-vedio"
      playsinline="true"
      src="http://s30eih4r2.hb-bkt.clouddn.com/League%20of%20Legends%20%28TM%29%20Client%202023-06-18%2017-43-57.mp4?e=1698390018&token=h6BkfhZ-X2xcGqz-qcy7J5FFoo5zuHr8me1e_Nw1:aZ-l2OdmQy7cGXy8gzSmrQIy0EQ=" 
      controls="controls" 
      type="video/mp4"
      loop
      autoplay="autoplay"
      muted
      controlsList="nodownload  noremoteplayback noplaybackrate" 
      disablePictureInPicture="true"
      ></video>
    </div>
    <div class="right">
      <span class="iconfont icon-jiantoushang"></span>
      <span class="iconfont icon-jiantouxia"></span>

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