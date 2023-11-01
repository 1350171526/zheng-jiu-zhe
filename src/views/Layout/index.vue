<script setup>
  import Aside from "./components/Aside.vue";
  import Headers from "./components/Header.vue";
  import Main from "./components/Main.vue";
  // import { ElMessage } from 'element-plus'
import { getVedioApi,getMusicApi,getHotApi } from '@/apis/video';
import { onMounted, ref, onBeforeUnmount } from 'vue';


const urlArr = ref([])
let marker = null
let type = ref("total")
const getVedio =async () =>{
  type.value = "total"
  const res = await getVedioApi(marker)
  urlArr.value = res.data.vedioArr
  marker = res.data.nextMarker
}

onMounted(() => {
  getVedio()
  keyListen()
  // console.log(new Data.getTime());
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', changeVideo);
})

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

const mousewheel = (e) =>{
  if(e.deltaY>0){
    nextVedio()
  }else if(e.deltaY<0){
    lastVedio()
  }
}

let index = ref(0)
// 下一个视频
let nextTigger = 0
const nextVedio =async () =>{
  // 节流防止频繁触发事件
  const now = Date.now()
  if(now - nextTigger<1500){
    return 
  }else if(index.value<urlArr.value.length-1){
    index.value++
  }else if(!marker){
    ElMessage({
      message: '暂无更多视频，即将返回第一条视频...',
      type: 'success',
      center: true,
    })
    setTimeout(()=>{
      index.value = 0
    },2000)
    return
  }else{
    // 判断视频的分类
    switch (type.value) {  
      case "total":  
        const res = await getVedioApi(marker)
        console.log(res);
        marker = res.data.nextMarker
        urlArr.value = [...urlArr.value,...res.data.vedioArr]
        index.value++
        break;  
      case "music":  
        const res1 = await getMusicApi(marker)
        console.log(res1);
        marker = res1.data.nextMarker
        urlArr.value = [...urlArr.value,...res1.data.vedioArr]
        index.value++ 
        console.log("获取热门");
        break;  
      case "hot":  
        const res2 = await getHotApi(marker)
        console.log(res2);
        marker = res2.data.nextMarker
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
  if(now - lastTigger<1500){
    return
  }else if(index.value>0){
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

const getMusic =async () =>{
  type.value = "music"
  marker = null
  index.value = 0
  const res = await getMusicApi()
  console.log(res)
  marker = res.data.nextMarker
  urlArr.value = res.data.vedioArr
}
const getHot =async () =>{
  type.value = "hot"
  index.value = 0
  const res = await getHotApi()
  marker = res.data.nextMarker
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
          @getVedio="getVedio"
          @getMusic="getMusic"
          @getHot="getHot"
          >
          </Aside>
        </el-aside>
        <el-main>
          <Main 
          :urlArr="urlArr" 
          :index="index" 
          @lastVedio="lastVedio()" 
          @nextVedio="nextVedio()"
          @mousewheel="mousewheel"
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
