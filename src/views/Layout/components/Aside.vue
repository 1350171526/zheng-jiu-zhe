<template>
  <div class="Aside">
    <div v-for="(item,index) in State" 
    :key="item.id"
     @click="switchType(item,index)"
     :class="{Color:index===activeindex}"
     >
      <span :class="item.icon" class="icon"></span>
      <span class="name">{{ item.name }}</span>
    </div> 
   
  </div> 
  
  
</template>

<script setup>
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { ref,defineEmits  } from "vue"
const activeindex = ref(0)
// 侧边导航列表信息
 const State = ref([
  {id:1,name:'首页',icon:'iconfont icon-shouye'},
  {id:2,name:"热门",icon:'iconfont icon-remen'},
  {id:3,name:"音乐",icon:'iconfont icon-yinle'},
  {id:4,name:"体育",icon:'iconfont icon-tiyu'},
  {id:5,name:"直播",icon:'iconfont icon-zhibo'},
  {id:6,name:"美食",icon:'iconfont icon-meishi'},
  {id:7,name:"知识",icon:'iconfont icon-zhishiku'},
  {id:8,name:"放映",icon:'iconfont icon-dianying'},
  {id:9,name:"社交",icon:'iconfont icon-shejiao'},
  {id:10,name:"动漫",icon:'iconfont icon-dongman'},
  {id:11,name:"我的",icon:'iconfont icon-wode'},
]) 
// 点击子组件触发父组件事件
const emit = defineEmits(['getVedio','getMusic','getHot'])
const switchType = (item,index) =>{
  activeindex.value = index
  if(item.id==1){
    emit('getVedio')
  }else if(item.id==2){
    emit('getMusic')
  }else if(item.id==3){
    emit('getHot')
  }else{
    ElMessage({
      type: 'success',
      message: '敬请期待'
    })
  }
}
</script>

 <style lang="scss" scoped>
 .Aside{
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content:space-around;
  align-items:center;
  overflow: hidden;
  div{
    width: 8vw;
    margin-left: 10px;
    white-space: nowrap;
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    
    &.Color{
      background-color: rgba(255, 255, 255, 0.4);  
    }  
    &:hover{
      background-color: rgba(255, 255, 255, 0.3); 
    }
    span{
      padding: 0 10px;
      line-height: 100%;
      display: flex;
      align-items: center;
    }
    
  }
 }


  @media screen and (max-width :876px){
    .Aside{
      div{
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  @media screen and (max-width :500px){
    .Aside{
      div{
        width: 7vw;
        flex-direction: column;
        span{
          padding: 0;
        }
        .name{
          display: none;
        }
      }
    }
  }
  @media screen and (max-width :375px){
    .Aside{
      div{
        display: none;
      }
    }
  }
  


 
</style>