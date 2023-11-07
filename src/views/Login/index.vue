<script setup>
import { ref} from "vue";
import { ElMessage } from 'element-plus';
import {HeaderStateStore} from "@/stores/HeaderState.js"
const HeaderState= HeaderStateStore()


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
  // 点击登录通过前端表单校验之后向后端发送post请求，后端验证账号密码之返回用户数据和token信息给前端渲染
  formRef.value.validate((valid) => {  
    if (valid) {  
      ElMessage.success('登录成功');  
      HeaderState.login()
      closeDialog()
    } else {  
      ElMessage.error('登录失败');  
      return false;  
    }  
  });  
}

const outlogin = () =>{
  HeaderState.outLogin()
  closeDialog()
  ElMessage('退出登录')
}

const emit = defineEmits(['update:visible']);
const closeDialog = () => {
  emit('update:visible', false); 
}
</script>
<template>
  
<el-dialog  
v-if="!HeaderState.isLogin"
v-model="dialogFormVisible"
title="Login"  
width="30%"  
modal
:close-on-click-modal = 'false'
@close="closeDialog"
center
> 
  <div>
    <el-form
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
        <el-input type="password" v-model="form.password" placeholder="请输入密码" />
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
<el-dialog 
v-else 
v-model="dialogFormVisible"
:close-on-click-modal = 'false'
@close="closeDialog"
>
  <div class="quit">
    <div class="outlogin" @click="outlogin">
      退出登录
    </div>
  </div>
</el-dialog>
</template>


<style lang="scss">
.el-dialog {
 background-color: #102844;
 box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
 border-radius: 10px;
 width: 400px;
 .quit{
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  .outlogin{
    cursor: pointer;
    color: #c5c2c2;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #FE2C55;
    border-radius: 8px;
    &:hover{
      background-color: #D21B46;
    }
    &:active{
      color: #fff;
    }
  }
 }
}
.el-dialog__header{
  cursor: default;
}
 .el-dialog__title {
    cursor: default;
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