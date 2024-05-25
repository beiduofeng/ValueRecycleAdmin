<script setup>
import { reactive, ref } from 'vue'
const ruleFormRef = ref()
import { checkAccountPassword } from "./utils.js"
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码，不可为空'))
  } else {
    callback()
  }
}

const accountValidate = (rule, value, callback) => {
  if (value === '' || !value) {
    callback(new Error('请输入账号，不可为空'))
  } else {
    callback();
  }
}

const ruleForm = reactive({
  pass: '',
  account: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  account: [{ validator: accountValidate, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const values = { ...ruleForm }
      console.log('submit!, ruleForm', values);

      // 调用登录接口， 登录成功跳转到其他页面，登录失败提示账号或者密码不对

      checkAccountPassword(values.account, values.pass);


    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<template>
  <div class="login">
    <div class="form-container">
      <div class="title">GREEN BIN 管理平台</div>
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)" :style="{ width: '100%' }">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<style scoped>
.login {
  height: 100%;
  background-image: url(../assets/trees.jpeg);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  width: 300px;
  height: 220px;
  padding-right: 70px;
  border: 1px solid #fefefe;
  border-radius: 4px;
  background-color: rgba(254, 254, 254, 0.9);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-weight: 500;
  height: 40px;
  margin: 24px 0px 12px 80px;
  font-size: 18px;
}
</style>
