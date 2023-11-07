<!-- 评论 -->
<script setup>

import { inject,ref, watch } from "vue"
const change = inject('change')
let number = ref()
number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
// 切换视频时通过provide传递参数改变number

watch(change, () => {  
  number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
}); 

const getComment = () =>{
  // 点击评论向后端发送评论请求接口，参数（当前用户id，视频id）
  // 后端在数据库根据视频id将对应的评论发送给前端渲染
  // 如果在评论表中匹配到当前用户的id则把它放到评论第一位
}
</script>

<template>
  <div class="group">
    <div class="comment" @click="getComment">
      <text class="iconfont icon-pinglun"></text>
      {{ number }}
    </div>

  <div class="layer">
    <span>评论</span>
    <span>X</span>
  </div>

  </div>

</template>

<style lang="scss" scoped>
.group{
  position: relative;

  cursor: pointer;
  .comment{
    display: flex;
    align-items: center;
    flex-direction: column;
    &:hover{
      .iconfont{
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
    white-space: nowrap;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
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