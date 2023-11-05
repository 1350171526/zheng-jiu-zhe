<!-- 上传 -->
<template>
  <div class="Upload">
    <span class="iconfont icon-zengjia" @click="centerDialogVisible = true"></span>
        <div>投稿</div>
    <!-- <form action="file" @click="upload"></form>
    <button>
      上传
    </button> -->
  <el-dialog v-model="centerDialogVisible" title="点击按钮上传" width="30%" center>
    
    <form action="file" @click="upload"></form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">
          上传
        </el-button>
        <el-button @click="centerDialogVisible = false">退出</el-button>
        
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";


const centerDialogVisible = ref(false)




</script>

<style lang="scss" scoped>
.Upload{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


</style>
