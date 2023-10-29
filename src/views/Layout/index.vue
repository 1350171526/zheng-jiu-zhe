<script setup>
  import Aside from "./components/Aside.vue";
  import Headers from "./components/Header.vue";
  import Main from "./components/Main.vue";

import { getVedioApi,getMusicApi,getHotApi } from '@/apis/video';
import { onMounted, ref, onBeforeUnmount } from 'vue';


const urlArr = ref()
const getVedio =async () =>{
  const res = await getVedioApi()
  urlArr.value = res.data
}

onMounted(() => {
  getVedio()
  keyListen()
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyListen);
})

const keyListen = () =>{
  document.addEventListener('keydown', function(e) {  
    if(e.key == "ArrowUp"){
      lastVedio()
    }
    if(e.key == "ArrowDown"){
      nextVedio()
    }
});
}

const mousewheel = (e) =>{
  if(e.deltaY>0){
    nextVedio()
  }
  if(e.deltaY<0){
    lastVedio()
  }
}

let index = ref(0)
// 下一个视频
const nextVedio = () =>{
  if(index.value<urlArr.value.length-1){
    index.value++
  }else{
    index.value = 0
  }
}
// 上一个视频
const lastVedio = () =>{
  if(index.value>0){
    index.value--
  }else{
    index.value = urlArr.value.length-1
  }
}


</script>

<template>
  <div class="common-layout">
    <el-container @keydown.up="lastVedio()" @keydown.down="nextVedio()">
      <el-header class="header"><Headers></Headers></el-header>
      <el-container>
        <el-aside class="aside"><Aside></Aside></el-aside>
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
