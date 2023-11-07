<!-- 收藏 -->
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
// // 前端调用接口获取视频时传递参数（当前用户id，视频id）
// 后端根据当前视频id在当前用户收藏表中判断是否有此id，返回给前端渲染
const like = () =>{
  // 点击收藏向后端发送请求,后端在数据库根据视频id放在当前用户收藏表中

  // 前端无感操作点击收藏修改样式
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
    <div class="collect" @click="like">
      <text class="iconfont icon-shoucang" :class="isSelect ? 'select' : 'noselect'"></text>
      {{ number }}
    </div>
    <div class="layer">
      <span class="top">选择收藏夹</span>
      <span class="middle">
        <text class="iconfont icon-zhishiku"></text>
        <span>暂无收藏夹</span>
      </span>
      <span class="bottom">
        <span>新建收藏夹</span>
      </span>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.group{
  cursor: pointer;
  position: relative;
  .collect{
    display: flex;
    align-items: center;
    flex-direction: column;
    &:hover{
      .noselect{
        animation: mymove 0.5s ease;
        animation-fill-mode: forwards;
      }
    }
    .select{
      animation: click 0.5s ease;
      animation-fill-mode: forwards;
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
    cursor: auto;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    bottom: 5px;
    right: 150%;
    background-color: #0F2743;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: -5px -5px 15px  rgba(0,0,0,0.8);
    .top{
      // color: #686871;
      margin-right: 200px;
    }
    .middle{
      color: #808188;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 50px;
      .iconfont{
        width: 120px;
        height: 120px;
        font-size: 100px;
        line-height: 120px;
        text-align: center;
      }
    }
    .bottom{
      width: 60%;
      margin: 20px 0;
      text-align: center;
      padding: 10px 0px;
      background-color: #FE2C55;
      border-radius: 10px;
      cursor: pointer;
      &:hover{
        background-color: #D21B46;
      }
    }
  }
  
}
  
</style>