<!-- 点赞 -->
<script setup>
import { inject,ref, watch } from "vue"
const change = inject('change')
let number = ref()
number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
// 切换视频时通过provide传递参数改变number

watch(change, () => {  
  isSelect.value=false
  number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
}); 

const isSelect = ref(false)
const like = () =>{
  if(isSelect.value){
    number.value--
  }else{
    number.value++
  }
  isSelect.value = !isSelect.value 
}
</script>

<template>
  <div class="group">
    <div class="like" @click="like">
      <text class="iconfont icon-aixin" :class="isSelect ? 'select' : 'noselect'"></text>
      {{ number }}  
    </div>
    <div class="layer">
      <span>点赞</span>
      <span>Z</span>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.group{
  position: relative;
  cursor: pointer;
  .like{
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
    .select{
      animation: click 0.5s ease;
      animation-fill-mode: forwards;
    }
    &:hover{
      .noselect{
        animation: mymove 0.5s ease;
        animation-fill-mode: forwards;
      }
      
    }

  }
  text{
    height: 30px;
    font-size: 25px;
  }
  &:hover{
    .layer{
      opacity: 1;
      transform: none;
    }
  }
  .layer{
    opacity: 0;
    display: flex;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    white-space: nowrap;
    top: 5px;
    right: 150%;
    background-color: #0F2743;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: auto;
    &::before{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      top: 17px;
      right: -4px;
      background-color: #0F2743;

      transform: scale(1, 0.9) rotate(45deg);
    }
    :nth-child(1){
      margin-right: 10px;
    }
    :nth-child(2){
      border-radius: 3px;
      color: #000;
      text-align: center;
      line-height: 20px;
      width: 20px;
      height: 20px;
      background-color: #fff;
    }
  }
}
</style>