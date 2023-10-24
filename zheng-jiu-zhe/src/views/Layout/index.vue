<script setup>
  import Aside from "./components/Aside.vue";
  import Headers from "./components/Header.vue";
  import Main from "./components/Main.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><Headers></Headers></el-header>
      <el-container>
        <el-aside class="aside"><Aside></Aside></el-aside>
        <el-main><Main></Main></el-main>
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
