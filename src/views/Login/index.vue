<script setup>
import { ref} from "vue";
//点击弹出登录框

//表单校验(账户名和密码)
const form = ref({  
      username: '',  
      password: ''  
    }); 
const rules = {
  account: [{  
  required: true,  
  message: '手机号不能为空',  
  trigger: 'blur'  
}, {  
  pattern: /^1[3-9]\d{9}$/,  
  message: '手机号格式不正确',  
  trigger: 'blur'  
}],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min:6, max:14, message: '密码在6-14位之间', trigger: 'blur' }
  ],
  agree:[{
    validator:(rule,value,callback) => {
      if (value) {
        callback()
      }else{
        callback(new Error('错误'))
      }


    }
  }]
}
    
const dialogFormVisible = ref(true)
//获取form实例统一校验
const formRef = ref(null); 
const doLogin = () => {  
      formRef.value.validate((valid) => {  
        if (valid) {  
          alert('提交成功');  
          dialogFormVisible.value=false
        } else {  
          alert('校验失败');  
          return false;  
        }  
      });  
    }








</script>



<template>
 <el-dialog    
 v-model="dialogFormVisible"
title="登录"    
width="30%"   
draggable
modal

 
> 
    <el-form
            ref="formRef"
              :model="form"
              :rules="rules"
              label-position="right"
              label-width="70px"
              status-icon
              
              
            >
              <el-form-item prop="account" label="手机号">
                <el-input v-model="form.account" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
            </el-form>
     <template #footer>    
       <span class="dialog-footer">    
         <el-button @click="dialogFormVisible =false">退出</el-button>    
         <el-button type="primary" @click="doLogin">登录</el-button>    
       </span>    
     </template>    
   </el-dialog> 
</template>


<style lang="scss" scoped>

</style>