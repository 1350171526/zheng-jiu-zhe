<template>
  <div class="Aside">
    <div v-for="(item,index) in State" 
    :key="item.id"
     @click="activeindex=index"
     :class="{Color:index===activeindex}"
     
     >
      <span :class="item.icon"></span>
      <span>{{ item.name }}</span>
    </div> 
   
  </div>
</template>

<script setup>
import { ref } from "vue"
const activeindex = ref('1')
const State = ref([
  {id:1,name:'首页',icon:'iconfont icon-shouye'},
  {id:2,name:"热门",icon:'iconfont icon-remen'},
  {id:3,name:"体育",icon:'iconfont icon-tiyu'},
  {id:4,name:"直播",icon:'iconfont icon-zhibo'},
  {id:5,name:"音乐",icon:'iconfont icon-yinle'},
  {id:6,name:"美食",icon:'iconfont icon-meishi'},
  {id:7,name:"知识",icon:'iconfont icon-zhishiku'},
  {id:8,name:"放映",icon:'iconfont icon-dianying'},
  {id:9,name:"社交",icon:'iconfont icon-shejiao'},
  {id:10,name:"动漫",icon:'iconfont icon-dongman'},
  {id:11,name:"我的",icon:'iconfont icon-wode'},
])




</script>

<style lang="scss" scoped>
.Aside div {  
  height: 60px;  
  text-align: center;  
  line-height: 60px;  
  border-radius: 15px;  
  &:hover {  
  background-color: rgba(255, 255, 255, 0.2);  
}  
&.Color{
  background-color: rgba(255, 255, 255, 0.4);  
  color: #fff;
}

} 

.Aside div span {  
  padding: 0 5px;  
  font-size: 16px;
} 




</style>