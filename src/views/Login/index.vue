<script setup>
import { ref} from "vue";
import { ElMessage } from 'element-plus';






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
          alert('登录成功');  
          dialogFormVisible.value=!dialogFormVisible.value
        } else {  
          alert('登录失败');  
          return false;  
        }  
      });  
    }


const clickModal= ref(false)

const emit = defineEmits(['update:visible']);
const closeDialog = () => {
  emit('update:visible', false); // 通过 emit 事件通知父组件关闭对话框
}


//点击显示短信验证并且切换
const isPasswordLogin=ref(true)
const changePasswordLogin=() => {
  isPasswordLogin.value=!isPasswordLogin.value
  //切换时清空表单gu
  form.value.password=''
}








</script>
<template>
  
  <el-dialog    
 v-model="dialogFormVisible"
title="账户登录"  
width="30%"  
modal
:close-on-click-modal = clickModal
@close="closeDialog"
> 
<div v-if="isPasswordLogin">
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
          <!-- 短信验证 -->
          <div v-else>
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
          <el-input  v-model="form.account" placeholder="请输入手机号" >
            <template #append>
              <el-button  @click="sendSmsVerification" :disabled="isSendingSms">
                {{ isSendingSms ? '发送中...' : '短信验证' }}
             </el-button>
             </template>
             </el-input>
           </el-form-item>
              <el-form-item prop="password" label="验证码">
                <el-input  v-model="form.authcode" placeholder="请输入短信"/>
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
        <el-button   class="custom_button"  @click="changePasswordLogin">{{ isPasswordLogin?'短信登录':'密码登录' }}</el-button> 
         <el-button @click="closeDialog">退出</el-button>    
         <el-button type="primary" @click="doLogin">登录</el-button>    
       </span>    
     </template>
   </el-dialog>
</template>


<style lang="scss" scoped>

.custom_button{
  color: #7f8083 !important;

  background-color: #ffffff; /* 设置按钮的颜色 */
  color: #fff;
}
/* 点击时保持颜色不变 */
.custom_button:hover {
  color: #fff;
  background-color: #ffffff !important; /* 点击时保持颜色不变 */
}
/* 点击时保持颜色不变 */
.custom_button:active {
  background-color: #ffffff !important; /* 点击时保持颜色不变 */
}
.custom_button:focus {
  color: #fff;
  background-color: #ffffff !important; /* 点击时保持颜色不变 */
}

</style>