<script setup>
import { ref} from "vue";
import { ElMessage } from 'element-plus';
import {HeaderStateStore} from "@/stores/HeaderState.js"
const HeaderState= HeaderStateStore()





//模拟发送短信
const isSendingSms = ref(false);

const sendSmsVerification = () => {
  // 模拟发送短信操作，实际操作根据您的需求来实现
  isSendingSms.value = true;

  // 模拟短信发送成功后的操作
  setTimeout(() => {
    // 恢复按钮状态
    isSendingSms.value = false;
    // 弹出提示框
    ElMessage.success('短信发送成功');
  }, 2000);
};



//表单校验(账户名和密码)
const form = ref({  
      account: '',  
      password: '' ,
      authcode:'',
      agree:false
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
  authcode:[{required: true, message: '验证码不能为空', trigger: 'blur'}],
  agree:[{
    validator:(rule,value,callback) => {
      if (value) {
        callback()
      }else{
        callback(new Error('请勾选协议'))
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
          ElMessage.success('登录成功');  
          
          HeaderState.isLogin=!HeaderState.isLogin
          dialogFormVisible.value=!dialogFormVisible.value
        } else {  
          ElMessage.error('登录失败');  
          return false;  
        }  
      });  
    }


const clickModal= ref(false)

const emit = defineEmits(['update:visible']);
const closeDialog = () => {
  emit('update:visible', false); // 通过 emit 事件通知父组件关闭对话框
}










</script>
<template>
  
  <el-dialog    
 v-model="dialogFormVisible"
title="Login"  
width="30%"  
modal
:close-on-click-modal = clickModal
@close="closeDialog"
center
> 
<div >
    <el-form
    v-if="true"
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="right"
    label-width="70px"
    status-icon 
    >
      
      <el-form-item prop="account" label="账号">
        <el-input v-model="form.account" placeholder="请输入手机号" />
        
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input  v-model="form.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label-width="22px" prop="agree">
        <el-checkbox size="large" v-model="form.agree">
          我已同意隐私条款和服务条款
        </el-checkbox>
      </el-form-item>
    </el-form>
  </div>
 

     <template #footer>    
       <span class="dialog-footer">    
        
         <el-button @click="closeDialog">退出</el-button>    
         <el-button type="primary" @click="doLogin">登录</el-button>    
       </span>    
     </template>
   </el-dialog>
</template>


<style lang="scss" >



.el-dialog {
 background-color: #102844;
 box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
 border-radius: 10px;
 width: 400px;
}
 .el-dialog__title {
    color: #fff;
    font-size: 45px;
    font-weight:500;
    text-shadow: -3px 2px 5px rgba(255, 255, 255, 0.7);
  }

 .el-form-item__label{
  color: rgb(255, 255, 255);
 }

 .el-dialog__body{
  padding-bottom: 0px !important;
 }



.custom_button{
  color: #7f8083 !important;

  background-color: #ffffff; 
  color: #fff;
}

.custom_button:hover {
  color: #fff;
  background-color: #ffffff !important; 
}

.custom_button:active {
  background-color: #ffffff !important; 
}
.custom_button:focus {
  color: #fff;
  background-color: #ffffff !important; 
}

</style>