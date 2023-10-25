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
const activeindex = ref('')
const State = ref([
  {id:1,name:'首页',icon:'iconfont icon-shouye'},
  {id:2,name:"热门",icon:'iconfont icon-remen'},
  {id:3,name:"体育",icon:'iconfont icon-tiyu'}
])




</script>

<style lang="scss" scoped>
.Aside div {  
  height: 50px;  
  text-align: center;  
  line-height: 50px;  
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
} 




</style>