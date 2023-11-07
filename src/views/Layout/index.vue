<script setup>
  import Aside from "./components/Aside.vue";
  import Headers from "./components/Header.vue";
  import Main from "./components/Main.vue";
  // import { ElMessage } from 'element-plus'
import { getVedioApi,getMusicApi,getHotApi } from '@/apis/video';
import { onMounted, ref, onBeforeUnmount, provide } from 'vue';


const urlArr = ref([])
let type = ref("total")
// 获取首页视频
// 后端返回一组视频的每条视频应该包含视频链接、视频作者id、头像信息、是否被此用户关注点赞或收藏，视频id、点赞数、评论数、收藏数、分享数、等信息
const getVedio =async () =>{
  type.value = "total"
  const res = await getVedioApi()
  urlArr.value = res.data.vedioArr
}

onMounted(() => {
  getVedio()
  keyListen()
})
// 页面卸载钱移除监听事件
onBeforeUnmount(() => {
  document.removeEventListener('keydown', changeVideo);
})
// 键盘上下键监听事件
const keyListen = () =>{
  document.addEventListener('keydown', changeVideo);
}
const changeVideo = (e) =>{
  if(e.key == "ArrowUp"){
      lastVedio()
  }
  if(e.key == "ArrowDown"){
    nextVedio()
  }
}

let change = ref(false)
// 下一个视频
let index = ref(0)
let nextTigger = 0
provide('change',change)
const nextVedio =async () =>{
  // 节流防止频繁触发事件
  const now = Date.now()
  if(now - nextTigger<1000){
    return 
  }else if(index.value<urlArr.value.length-2){
    change.value = !change.value
    index.value++
  }else{
    change.value = !change.value
    // 判断视频的分类
    switch (type.value) {  
      case "total":  
        const res = await getVedioApi()
        urlArr.value = [...urlArr.value,...res.data.vedioArr]
        index.value++
        break;  
      case "music":  
        const res1 = await getMusicApi()
        urlArr.value = [...urlArr.value,...res1.data.vedioArr]
        index.value++ 
        break;  
      case "hot":  
        const res2 = await getHotApi()
        urlArr.value = [...urlArr.value,...res2.data.vedioArr]
        index.value++  
        break;  
      default:  
        break;  
    }
    
  }
  nextTigger = now
}
// 上一个视频
let lastTigger = 0
const lastVedio = () =>{
  // 节流防止频繁触发事件
  let now = Date.now()
  if(now - lastTigger<1000){
    return
  }else if(index.value>0){
    change.value = !change.value
    index.value--
  }else{
    ElMessage({
      message: '已经是第一条视频',
      type: 'success',
      center: true,
    })
  }
  lastTigger = now
}

// 点击首页全部视频
const clickVideo = () =>{
  urlArr.value = []
  index.value = 0
  getVedio()
}
// 点击音乐视频
const clickMusic =async () =>{
  urlArr.value = []
  index.value = 0
  type.value = "music"
  const res = await getMusicApi()
  urlArr.value = res.data.vedioArr
}
// 点击热门视频
const clickHot =async () =>{
  urlArr.value = []
  index.value = 0
  type.value = "hot"
  const res = await getHotApi()
  urlArr.value = res.data.vedioArr
}


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><Headers ></Headers></el-header>
      <el-container>
        <el-aside class="aside">
          <Aside
          @getVedio="clickVideo"
          @getMusic="clickMusic"
          @getHot="clickHot"
          >
          </Aside>
        </el-aside>
        <el-main>
          <Main 
          :urlArr="urlArr" 
          :index="index" 
          @lastVedio="lastVedio()" 
          @nextVedio="nextVedio()"
          >
          </Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style lang="scss" scoped>
  @media screen and (max-width :375px){
    .common-layout{
      .header{
        height: 0 !important;
      }
      .aside{
        width: 0 !important;
      }
      .el-main{
        padding: 3vh !important;
      }
    }
  }

  .common-layout{
    color: #fff;

    .header{
      width: 100vw;
      height: 10vh;
    }

    .aside{
      width: 10vw;
      height: 90vh;
    }

  }

</style>
