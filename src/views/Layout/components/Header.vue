<script setup>
import { ref ,onMounted} from "vue"


const isDropdownVisible = ref(window.innerWidth <= 1024) // 初始值为屏幕宽度小于等于1024px  
  
  onMounted(() => {  
    window.addEventListener('resize', () => {  
      isDropdownVisible.value = window.innerWidth <= 1024 // 更新屏幕宽度大于等于1024px时显示组件  
    })  
  }) 

</script>

<template>
  <div class="content">
    <div class="left">
      <img src="../../../assets/images/logo.png" alt="">
      <div class="title" >七牛</div>
    </div>
    <div class="middle">
      <input type="text" placeholder="搜索你感兴趣的内容">
      <div class="search">
        <span class="iconfont icon-sousuo"></span>
        <div>搜索</div>
      </div>
    </div>
    <div class="right">
      <div class="item" >
        <span class="iconfont icon-yulebao"></span>
        <div>充牛币</div>
      </div>
      <div class="item" >
        <span class="iconfont icon-xiazai"></span>
        <div>客户端</div>
      </div>
      <div class="item" >
        <span class="iconfont icon-shandian"></span>
        <div>快捷访问</div>
      </div>
      <div class="item menu" v-if="isDropdownVisible" >
        <span class="iconfont icon-xiazai curr"></span>
        更多
        <div class="dropdown-content" >
          <!-- 下拉菜单内容 -->
          <div class="dropdown-item">充牛币</div>
          <div class="dropdown-item">客户端</div>
          <div class="dropdown-item">快捷访问</div>
        </div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-tishi"></span>
        <div>通知</div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-weixin"></span>
        <div>私信</div>
      </div>
      <div class="item">
        
        <span class="iconfont icon-zengjia"></span>
        <div>投稿</div>
      </div>
      <div class="item avatar" >
        <img src="../../../assets/images/avatat.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (max-width: 1240px) {
    .title{
      display: none;
      color: #000;
    }
  }
  @media screen and (max-width: 1024px) {
    .content{
      .right{
        .item{
          &:nth-child(-n+3){
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 876px) {
    .content{
      .right{
        .item{
          &:nth-child(n+4):nth-child(-n+6){
            display: none;
            // color: #000;
          }
        }
      }
    }
  }
  @media screen and (max-width :375px){
    .content{
      display: none !important;
    }
  }

  .content{
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .left{
      cursor: pointer;
      display: flex;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
      }
      .title{
        font-size: 24px;
      }
    }
  .middle{
    overflow: hidden;
    margin: 0 20px;
    width: 350px;
    height: 50px;
    border: 2px solid #BABABD;
    border-radius: 15px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    &:hover{
      border: 2px solid #ffffff;
      .search {
        cursor: pointer;
        background-color: #fff;
        color: #000;
      }
    }
    input{
      width:  250px;
      margin-left: 10px;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      caret-color: red;
      color: #fff;
    }
    .search{
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      height: 50px;
      padding-right: 10px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      span{
        height: 50px;
        padding-right: 10px;
        line-height: 50px;
      }
      div{
        white-space: nowrap;
      }
    }
    
  }
  
  
  .right{
    display: flex; 
    .menu {
      position: relative;
      z-index: 600;
      &:hover{
        .dropdown-content{
          opacity:1;
          transform: none;
        }
      }
      .dropdown-content {
        z-index: 999 ;
        position: absolute;
        top: 50px;
        left: 0px;
        border-left: 10px;
        min-width: 120px;
        background-color:rgba(51, 51, 51); 
        opacity: 0;
        transition: all 0.4s 0.2s;
        transform: translateY(-200px) scale(1, 0);
        border-radius: 4px;
        .dropdown-item{
          color: #fff;
          width: 100%;
          height: 50px;
          line-height: 50px;
          padding-left: 10px;
          &:hover{
            background-color:rgba(37, 38, 50); 
          }
        }
      }
    }

    .avatar{
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      :hover{
        transform: scale(1.2);
    }
    }
    
    .item{
      white-space: nowrap;
      color: #b8b6b6;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    :hover{
        color: #fff;
        cursor: pointer;
    }
  }
    
  }
</style>
