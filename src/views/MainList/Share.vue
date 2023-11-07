<!-- 分享 -->
<script setup>
import { inject,ref, watch } from "vue"
const change = inject('change')
let number = ref()
number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
// 切换视频时通过provide传递参数改变number

watch(change, () => {  
  number.value = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
}); 

// 页面onMounted时调用接口向后端发送获取好友信息请求 参数（当前用户id）
// 后端根据当前用户id将当前用户好友表处理后返回前端
</script>

<template>
  <div class="group">
    <div class="share">
      <text class="iconfont icon-fenxiang"></text>
      {{ number }}
    </div>
    
    <div class="layer">
      <span class="top">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="搜索">
      </span>
      <span class="middle">
        <span class="share">分享给朋友</span>
        <div class="item" v-for="item in 3" :key="item">
          <div class="left">
            <div class="icon">
              <text class="iconfont icon-jurassic_user"></text>
            </div>
            <span>用户{{ item }}</span>
          </div>
          <div class="right">
            <span>分享</span>
          </div>
        </div>
      </span>
      <span class="bottom">
        <div class="left">其他分享方式</div>
        <div class="right">
          <text class="iconfont icon-weixin1"></text>
          <text class="iconfont icon-QQ"></text>
          <text class="iconfont icon-erweima"></text>
          <text class="iconfont icon-lianjie"></text>
        </div>
      </span>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.group{
  position: relative;
  cursor: pointer;
  .share{
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
    width: 300px;
    height: 470px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    white-space: nowrap;
    bottom: 5px;
    right: 150%;
    background-color: #0F2743;
    border-radius: 5px;
    padding: 10px 20px;
    box-shadow: -5px -5px 15px  rgba(0,0,0,0.8);
    cursor: auto;
    .top{
      width: 100%;
      height: 30px;
      margin-top: 5px;
      margin-bottom: 15px;
      background-color: #3F506B;
      display: flex;
      align-items: center;
      border-radius: 5px;

      span{
        margin: 0 10px;
        &:nth-child(2){
          margin-right: 10px;
        }
      }
      input{
        background-color:transparent;
        border: none;
        outline: none;
        caret-color: red;

      }
    }
    .middle{
      border-top: rgba(57, 57, 63, 0.8) solid 1px;
      padding: 10px 0;
      
      .item{
        margin-top: 10px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          display: flex;
          align-items: center;
          
          .icon{
            width: 40px;
            height: 40px;
            background-color: #1296db;
            border-radius: 50%;
            margin-right: 15px;
            text-align: center;
          }
          
        }
        .right{
          background-color: #FE2C55;
          padding: 5px 20px;
          border-radius: 5px;
          cursor: pointer;
          &:hover{
            background-color: #D21B46;

          }
        }
      }
    }
    .bottom{
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      position: absolute;
      left: 0;
      bottom: 0;
      .left{
        margin-left: 15px;
      }
      .right{
        display: flex;
        flex: 1;
        justify-content: space-around;
        .iconfont{
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
