<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="login_from">
        <el-form ref="form" :model="loginForm" :rules="loginFormRules" label-width="0px">
          <el-form-item prop="username">
            <el-input  prefix-icon="el-icon-search" v-model='loginForm.username'></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password"  prefix-icon="el-icon-search" v-model='loginForm.password'></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetFrom">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return{
        loginForm:{
          username:'zs',
          password:'123'
        },
        loginFormRules:{
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      resetFrom(){
        console.log(this)
        this.$refs.form.resetFields()
      },
      login(){
        this.$refs.form.validate(vaild=>{
          console.log(vaild)
          // if(!vaild){
          //   return
          // }
          // this.$http.post('')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_container{
    height:100%;
    width:100%;
    background:#2b4b6b;
    position:relative;
    .login_box{
      width: 450px;
      height: 300px;
      background:#fff;
      border-radius: 3px;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
      .avatar_box{
        height:130px;
        width:130px;
        border:1px solid #eee;
        border-radius: 50%;
        padding:10px;
        box-shadow: 0 0 10px #ddd;
        position:absolute;
        left:50%;
        transform:translate(-50%,-50%);
        background:#fff;
        img{
          width:100%;
          height:100%;
          border-radius: 50%;
          background:#eee;
        }
      }
      .login_from{
        position:absolute;
        bottom:0;
        width:100%;
        padding:0 20px;
        box-sizing: border-box;
        .btns{
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
