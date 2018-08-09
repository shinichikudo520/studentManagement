<template>
    <div id="uploadInfo">
        <el-container>
            <!-- 头部内容 -->
            <el-header>
                <img src="../assets/img/logo.png" class="img-circle"> 某某某学校学生信息管理系统
            </el-header>
            <!-- 主体内容 -->
            <el-main>
                <div id="main">
                    <!-- 进度条 -->
                    <el-steps :active="selectPage" finish-status="success" simple style="margin-top: 20px" id="Progress">
                        <el-step title="1.基本信息" ></el-step>                   
                        <el-step title="2.学籍信息" ></el-step>
                        <el-step title="3.家庭信息" ></el-step>
                    </el-steps>
                    <!-- 信息 -->
                    <div class="studentInfo">
                        <!-- 信息填写区 -->
                        <el-row :gutter="20">
                            <!-- 基本信息第1页 -->
                            <div v-if="tabIndex===1">
                                <!-- 信息填写区 -->
                                <el-col :span="10" :offset="4">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                            <el-form-item label="姓名：">
                                                <el-col :span="10">
                                                    <label>张三</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="性别：">
                                                <el-col :span="10">
                                                    <label>男</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="姓名全拼：">
                                                <el-col :span="10">
                                                    <label>Zhang San</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生日期：">
                                                <el-col :span="16">
                                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="身份证类型：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="身份证号码：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请选择身份证号码"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <p id="promptInfo">所有带※项为必填项/必选项</p>

                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 上传图片 -->
                                <el-col :span="5">
                                    <div class="grid-content bg-purple" id="uploadImg">
                                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <span v-else class="avatar-uploader-icon">上传图片</span>
                                        </el-upload>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第2页 -->
                            <div v-if="tabIndex===2">
                                <!-- 信息填写区：左边 -->
                                <el-col :span="10" :offset="2">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                            <el-form-item label="名族：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择名族">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="国籍：">
                                                <el-col :span="10">
                                                    <label>中国</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="血型：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择血型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="健康状况：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择健康状况">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="政治面貌：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择政治面貌">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联系电话：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" id="phone" placeholder="请输入联系电话"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="户口性质：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择户口性质">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :span="10">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
                                            <el-form-item label="居住地类型：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择居住地类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="所属派出所：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择所属派出所">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="专业目录版本：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择专业目录版本">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="港澳台侨外类型：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择港澳台侨外类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生地行政区代码：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择出生地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="籍贯地行政区代码：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择籍贯地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="户口所在地行政区代码：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择户口所在地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第3页 -->
                            <div v-if="tabIndex===3">
                                <!-- 信息填写区：左边 -->
                                <el-col :span="10" :offset="2">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                            <el-form-item label="学制：">
                                                <el-col :span="10">
                                                    <label>四年</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学习形式：">
                                                <el-col :span="10">
                                                    <label>全日制</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="考试方式：">
                                                <el-col :span="10">
                                                    <label>笔试</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学生类别：">
                                                <el-col :span="10">
                                                    <label>职业高中生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="招生对象：">
                                                <el-col :span="10">
                                                    <label>应届高中毕业生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="婚姻状况：">
                                                <el-col :span="10">
                                                    <label>未婚</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="应试外国语种：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择应试外国语种">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :span="10">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="160px" :model="formLabelAlign">
                                            <el-form-item label="入学方式：">
                                                <el-col :span="10">
                                                    <label>统一入学考试</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="就读方式：">
                                                <el-col :span="10">
                                                    <label>走读</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学生来源：">
                                                <el-col :span="10">
                                                    <label>应届</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="招生方式：">
                                                <el-col :span="10">
                                                    <label>统一招生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="随班就读：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择随班就读">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="是否留守儿童：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择是否留守儿童">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="分段式培养关系：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择分段式培养关系">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第4页 -->
                            <div v-if="tabIndex===4">
                                <!-- 信息填写区：左边 -->
                                <el-col :span="10" :offset="2">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="160px" :model="formLabelAlign">
                                            <el-form-item label="联招合作类型：">
                                                <el-col :span="10">
                                                    <label>城乡联合办学</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="是否建档贫困户：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择是否建档贫困户">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :span="10">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
                                            <el-form-item label="联招合作办学形式：">
                                                <el-col :span="10">
                                                    <label>1+2</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联招合作学校办学形式：">
                                                <el-col :span="10">
                                                    <label>公办</label>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第5页 -->
                            <div v-if="tabIndex===5">
                                <!-- 信息填写区：左边 -->
                                <el-col :span="10" :offset="2">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                            <el-form-item label="关系：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择家庭成员关系">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="名族：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择名族">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="困难程度：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择困难程度">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="证件号码：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入证件号码"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="健康状况：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择健康状况">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭地址：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭地址"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭邮编：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭邮编"></el-input>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :span="12">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
                                            <el-form-item label="姓名：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入家人姓名"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联系电话：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入联系电话"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="证件类型：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择证件类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生年月：">
                                                <el-col :span="16">
                                                    <el-date-picker type="date" placeholder="选择出生年月" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="政治面貌：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入政治面貌"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭电话：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭电话"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="任职职务：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入任职职务"></el-input>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第6页 -->
                            <div v-if="tabIndex===6">
                                <!-- 信息填写区：左边 -->
                                <el-col :span="10" :offset="2">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                                            <el-form-item label="是否监护人：">
                                                <el-col :span="16">
                                                    <el-select v-model="form.region" placeholder="请选择是否监护人">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :span="12">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="180px" :model="formLabelAlign">
                                            <el-form-item label="工作单位/就读学校：">
                                                <el-col :span="16">
                                                    <el-input v-model="form.ID" placeholder="请输入工作单位"></el-input>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                        </el-row>
                        <!-- 按钮区 -->
                        <div id="btn">
                            <!-- 上一步和下一步按钮 -->
                            <el-row v-if="tabIndex<6">
                                <el-col :span="8" :offset="6">
                                    <el-button type="primary" @click="prevStep">上一步</el-button>
                                </el-col>
                                <el-col :span="8">
                                    <el-button type="primary" @click="nextStep">下一步</el-button>
                                </el-col>
                            </el-row>
                            <!-- 保存和提交按钮 -->
                            <el-row v-else>
                                <el-col :span="8" :offset="6">
                                    <el-button type="primary">保存</el-button>
                                </el-col>
                                <el-col :span="8">
                                    <el-button type="primary">确认提交</el-button>
                                </el-col>
                            </el-row>
                        </div>

                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "uploadInfo",
    data() {
        return {
            labelPosition: "right",
            formLabelAlign: {
                name: "",
                region: "",
                type: ""
            },
            form: {
                date1: "",
                ID: ""
            },
            imageUrl: "", //上传图片的路径
            tabIndex: 1,//信息页面
        };
    },
    methods: {
        //上传图片获得图片的路径
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        //判断上传图片格式
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        },
        // 上一步
        prevStep(){
            var _this = this;
            if( _this.tabIndex==1){
                return;
            }
            _this.tabIndex--;
        },
        //下一步
        nextStep(){
            var _this = this;
            if( _this.tabIndex==6){
                return;
            }
            _this.tabIndex++;
        },
    },
    computed:{
        //步骤进度
        selectPage(){
            var _this = this;
            if(_this.tabIndex<3){
                return 1;
            }
            else if(_this.tabIndex<5){
                return 2;
            }else{
                return 3;
            }
        }
    }
};
</script>

<style>
/* 全局样式 */
#uploadInfo body {
    padding: 0px;
    margin: 0px !important;
}
#uploadInfo {
    background-color: #f6f6f6;
    color: #101010;
    font-size: 1em;
}
/* 头部样式 */
#uploadInfo header {
    background-color: #236CC8;
    line-height: 60px;
    color: white;
    padding-left: 3%;
}
/* 头部logo样式 */
#uploadInfo header img {
    height: 100%;
    vertical-align: middle;
    margin-top: 1%;
}
/* 主体样式 */
main {
    padding-top: 0px;
}
#main {
    width: 70%;
    margin: 0 auto;
    background-color: white;
    padding: 20px 15px;
}
/* 学生信息样式 */
.studentInfo {
    padding-top: 30px;
}
.studentInfo > div:nth-child(1) {
    height: 356px;
}
/* 上传图片的样式 */
#uploadImg {
    width: 130px;
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-align: center;
    background-color: #e5e5e5;
}
.avatar-uploader-icon {
    font-size: 1em;
    width: 130px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    color: #101010;
}
.avatar {
    width: 130px;
    height: 178px;
    display: block;
}
.avatar-uploader-icon {
    font-size: 1em !important;
}
/* 必填项提示信息样式 */
#promptInfo {
    font-size: 0.8em;
    color: #ff0202;
}
/* 下一步按钮样式 */
#btn button {
    width: 35%;
    margin: 30px 0px;
    background:#236CC8 !important;
    border-color:#236CC8 !important;
}
/* 步骤进度条选中样式 */
#Progress .el-step__head.is-success {
    color: #236CC8 !important;
    border-color: #236CC8 !important;
}
#Progress .el-step__title.is-success {
    color: #236CC8 !important;
}
/* 步骤进度条未选中样式 */
#Progress .el-step__head.is-process {
    color: rgb(109, 112, 115) !important;
    border-color: rgb(109, 112, 115) !important;
}
#Progress .el-step__title.is-process {
    font-weight: 400;
    color: rgb(109, 112, 115) !important;
}
/* 步骤条样式 */
.el-step{
    cursor: pointer;
}
</style>
