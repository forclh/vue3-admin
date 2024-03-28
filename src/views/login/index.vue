<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading
              :disabled="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

// 收集账号和密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user.ts'
let userStore = useUserStore()
// 获取路由器
let router = useRouter()
// 定义变量控制按钮加载效果
let loading = ref(false)
// 登录按钮的回调(通过pinia仓库实现)
const login = async () => {
  loading.value = true // 登录加载效果
  // 1.通知仓库发送请求
  try {
    await userStore.userLogin(loginForm) // 也可以使用.then的语法
    // 2. 请求成功->编程时导航跳转到首页展示数据的地方
    router.push('/')
    // 登录成功的提示信息
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (error) {
    // 3. 请求失败->弹出登录失败的信息|加载效果消失
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
