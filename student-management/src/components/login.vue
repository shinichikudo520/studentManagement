<template>
    <div id="login-page" :style="{height:bodyHeight+'px'}">
        <el-container>
            <el-form ref="form" :model="form">
                <el-form-item>
                    <h4>用户登录</h4>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.stuId" placeholder="请输入您的学号" id="stuId"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.stuPwd" placeholder="请输入您的密码" id="stuPwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.verification" placeholder="请输入您的验证码" id="verification"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox v-model="checked">记住密码</el-checkbox>
                        </el-col>
                        <el-col :span="12">
                            <a href="#">忘记密码</a>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="uploadInfo">登录</el-button>
                </el-form-item>
            </el-form>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            //登录账号的信息
            form: {
                stuId: "",
                stuPwd: "",
                verification: ""
            },
            checked: false, //是否记住密码
            bodyHeight: ""
        };
    },
    methods: {
        uploadInfo() {
            this.$router.push({ path: "/uploadInfo" });
        }
    },
    mounted() {
        var _this = this;
        _this.bodyHeight =  document.documentElement.clientHeight || document.body.clientHeight;
    }
};
</script>

<style>
/* 整体样式 */
html,
body {
    margin: 0;
    padding: 0;
}
#login-page {
    color: white;
    background: url("../assets/img/backgroundImage.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
#login-page .el-container {
    width: 35%;
    margin: 0 auto;
    transform: translateY(35%);
    background-color: rgba(0, 0, 0, 0.5);
    padding-bottom: 3%;
}
/* 记住密码 */
.el-checkbox {
    color: #fff;
}
.el-checkbox__inner:hover {
    border-color: #fff;
}
/* 忘记密码 */
#login-page a {
    text-decoration: none;
    color: white;
    display: inline-block;
    width: 100%;
    text-align: right;
}
/* 表单整体 */
#login-page form {
    width: 60%;
    margin: 0 auto;
    padding-top: 20px;
}
/* 表单标题 */
#login-page form h4 {
    text-align: center;
}
/* 登陆按钮样式 */
#login-page .el-button {
    width: 100%;
    background-color: #236cc8;
}
/* 输入框样式 */
#stuId {
    background: url("../assets/img/550992895391150069.png") 10px 5px no-repeat;
}
#stuPwd {
    background: url("../assets/img/75331576642112394.png") 10px 5px no-repeat;
}
#verification {
    background: url("../assets/img/175459425380158681.png") 10px 5px no-repeat;
}
#stuId,
#stuPwd,
#verification {
    padding-left: 40px;
    background-size: 20px;
    background-color: #fff;
    outline: none;
}
</style>
