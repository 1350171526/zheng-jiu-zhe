<!-- 更多 -->
<script setup>

</script>

<template>
  <div class="group">
    <span class="more">···</span>
    <div class="layer">
      <div class="item">
        <div class="icon">
          <text class="iconfont icon-buganxingqu_line"></text>
        </div>
        <div>不感兴趣</div>
      </div>
      <div class="item">
        <div class="icon">
          <text class="iconfont icon-shouji"></text>
        </div>
        <div>手机续播</div>
      </div>
      <div class="item">
        <div class="icon">
          <text class="iconfont icon-jubao"></text>
        </div>
        <div>举报</div>
      </div>
      <div class="item">
        <div class="icon">
          <text class="iconfont icon-jianpan"></text>
        </div>
        <div>快捷键列表</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.group{
  cursor: pointer;
  position: relative;
  .more{
    text-align: center;
    letter-spacing: 2px; 
    font-size: 25px;
  }
  &:hover{
    .layer{
      opacity: 1;
      transform: none;
    }
  }
  .layer{
    width: 310px;
    font-size: 14px;
    opacity: 0;
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
    position: absolute;
    transition: all 0.2s 0.2s;
    transform: translateX(50%) scale(0, 1);
    bottom: 5px;
    right: 150%;
    background-color: #0F2743;
    border-radius: 10px;
    box-shadow: -5px -5px 15px  rgba(0,0,0,0.8);
    padding: 10px 0;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover{
        .icon{
          background-color: #33507287;
          &:hover{
            transform: scale(1.1);
            transition: all 0.2s 0.2s;
          }
        }
      }
      .icon{
        width: 50px;
        height: 50px;
        background-color: #335072;
        border-radius: 50%;
        margin-bottom: 10px;
        text{
          line-height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
        }
      }
    }
  }
}

</style>
