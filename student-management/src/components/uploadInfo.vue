<template>
    <div id="uploadInfo" :style="{height:bodyHeight+'px'}">
        <el-container>
            <!-- 头部内容 -->
            <el-header>
                <img src="../assets/img/logo.png" class="img-circle"> 某某某学校学生信息管理系统
            </el-header>
            <!-- 主体内容 -->
            <el-main>
                <div id="main">
                    <!-- 进度条 -->
                    <el-row>
                        <el-steps :active="selectPage" finish-status="success" simple style="margin-top:20px" id="Progress">
                            <el-step :md="8" :sm="8" :xs="8" title="1.基本信息" @click.native="changeTabIndex(1)"></el-step>
                            <el-step :md="8" :sm="8" :xs="8" title="2.学籍信息" @click.native="changeTabIndex(3)"></el-step>
                            <el-step :md="8" :sm="8" :xs="8" title="3.家庭信息" @click.native="changeTabIndex(5)"></el-step>
                        </el-steps>
                    </el-row>
                    <!-- 信息 -->
                    <div class="studentInfo">
                        <!-- 信息填写区 -->
                        <el-row :gutter="20" class="darkgray">
                            <!-- 基本信息第1页 -->
                            <div v-if="tabIndex===1">
                                <!-- 信息填写区 -->
                                <el-col :md="{span: 10, offset: 4}" :sm="{span: 12, offset: 2}" :xs="{span: 15, offset: 0}" class="leftStuInfo">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" :label-width="labelWidth" :model="formLabelAlign">
                                            <el-form-item label="姓名：" class="darkgray">
                                                <el-col :md="20" :sm="20" :xs="24">
                                                    <label>张三</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="性别：" class="grayish">
                                                <el-col :md="20" :sm="20" :xs="24">
                                                    <label>男</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="姓名全拼：" class="darkgray">
                                                <el-col :md="20" :sm="20" :xs="24">
                                                    <label>Zhang San</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生日期：" class="grayish">
                                                <el-col :md="20" :sm="19" :xs="22">
                                                    <el-date-picker type="date" placeholder="选择出生日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" :xs="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="身份证类型：" class="darkgray">
                                                <el-col :md="20" :sm="19" :xs="22">
                                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" :xs="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="身份证号码：" class="grayish">
                                                <el-col :md="20" :sm="19" :xs="22">
                                                    <el-input v-model="form.ID" placeholder="请选择身份证号码"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" :xs="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <p id="promptInfo">所有带※项为必填项/必选项</p>

                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 上传图片 -->
                                <el-col :md="5" :sm="4" :xs="3">
                                    <div class="grid-content bg-purple grayish" id="uploadImg" >
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
                                <el-col :md="{span: 9, offset: 2}" :sm="{span: 22, offset: 2}" :xs="{span: 23, offset: 1}" v-show="left">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="40%" :model="formLabelAlign">
                                            <el-form-item label="名族：" >
                                                <el-col :md="18" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择名族">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col  :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="国籍：" class="grayish">
                                                <el-col :md="18" :sm="11">
                                                    <label>中国</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="血型：" >
                                                <el-col :md="18" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择血型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}"  class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="健康状况：" class="grayish">
                                                <el-col :md="18" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择健康状况">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}"  class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="政治面貌：" >
                                                <el-col :md="18" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择政治面貌">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}"  class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联系电话：" class="grayish">
                                                <el-col :md="18" :sm="11">
                                                    <el-input v-model="form.ID" id="phone" placeholder="请输入联系电话"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}"  class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="户口性质：" >
                                                <el-col :md="18" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择户口性质">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}"  class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :md="{span: 10}" :sm="{span: 22, offset: 2}" v-show="right">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="40%" :model="formLabelAlign">
                                            <el-form-item label="居住地类型：">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择居住地类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="所属派出所：" class="grayish">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择所属派出所">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="专业目录版本：">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择专业目录版本">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="港澳台侨外类型：" class="grayish">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择港澳台侨外类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生地行政区代码：">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择出生地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="籍贯地行政区代码：" class="grayish">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择籍贯地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="户口所在地行政区代码：">
                                                <el-col :md="16" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择户口所在地行政区代码">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第3页 -->
                            <div v-if="tabIndex===3" class="clearLeftMagin">
                                <!-- 信息填写区：左边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 18, offset: 6}" v-show="left">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="学制：">
                                                <el-col :md="20" :sm="12">
                                                    <label>四年</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学习形式：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>全日制</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="考试方式：">
                                                <el-col :md="20" :sm="12">
                                                    <label>笔试</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学生类别：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>职业高中生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="招生对象：">
                                                <el-col :md="20" :sm="12">
                                                    <label>应届高中毕业生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="婚姻状况：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>未婚</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="应试外国语种：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择应试外国语种">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 18, offset: 6}" v-show="right">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="入学方式：">
                                                <el-col :md="20" :sm="12">
                                                    <label>统一入学考试</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="就读方式：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>走读</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="学生来源：">
                                                <el-col :md="20" :sm="12">
                                                    <label>应届</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="招生方式：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>统一招生</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="随班就读：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择随班就读">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="是否留守儿童：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择是否留守儿童">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="分段式培养关系：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择分段式培养关系">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第4页 -->
                            <div v-if="tabIndex===4" class="clearLeftMagin">
                                <!-- 信息填写区：左边 -->
                                <el-col :md="{span: 10, offset: 2}" :sm="{span: 20, offset: 4}">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="联招合作类型：">
                                                <el-col :md="20" :sm="12">
                                                    <label>城乡联合办学</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="是否建档贫困户：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择是否建档贫困户">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :md="{span: 10, offset: 2}" :sm="{span: 20, offset: 4}">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="联招合作办学形式：">
                                                <el-col :md="20" :sm="12">
                                                    <label>1+2</label>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联招合作学校办学形式：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <label>公办</label>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第5页 -->
                            <div v-if="tabIndex===5" class="clearLeftMagin">
                                <!-- 信息填写区：左边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 17, offset: 5}" v-show="left">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="关系：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择家庭成员关系">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="名族：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择名族">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="困难程度：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择困难程度">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="证件号码：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <el-input v-model="form.ID" placeholder="请输入证件号码"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="健康状况：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择健康状况">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭地址：" class="grayish">
                                                <el-col :md="20" :sm="12">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭地址"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭邮编：">
                                                <el-col :md="20" :sm="12">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭邮编"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 17, offset: 5}" v-show="right">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="姓名：">
                                                <el-col :md="20" :sm="11">
                                                    <el-input v-model="form.ID" placeholder="请输入家人姓名"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="联系电话：" class="grayish">
                                                <el-col :md="20" :sm="11">
                                                    <el-input v-model="form.ID" placeholder="请输入联系电话"></el-input>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="证件类型：">
                                                <el-col :md="20" :sm="11">
                                                    <el-select v-model="form.region" placeholder="请选择证件类型">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="出生年月：" class="grayish">
                                                <el-col :md="20" :sm="11">
                                                    <el-date-picker type="date" placeholder="选择出生年月" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="政治面貌：">
                                                <el-col :md="20" :sm="11">
                                                    <el-input v-model="form.ID" placeholder="请输入政治面貌"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="家庭电话：" class="grayish">
                                                <el-col :md="20" :sm="11">
                                                    <el-input v-model="form.ID" placeholder="请输入家庭电话"></el-input>
                                                </el-col>
                                            </el-form-item>
                                            <el-form-item label="任职职务：">
                                                <el-col :md="20" :sm="11">
                                                    <el-input v-model="form.ID" placeholder="请输入任职职务"></el-input>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 基本信息第6页 -->
                            <div v-if="tabIndex===6" class="clearLeftMagin">
                                <!-- 信息填写区：左边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 17, offset: 5}">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="是否监护人：">
                                                <el-col :md="20" :sm="12">
                                                    <el-select v-model="form.region" placeholder="请选择是否监护人">
                                                        <el-option label="区域一" value="shanghai"></el-option>
                                                        <el-option label="区域二" value="beijing"></el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :md="{span:1,offset:0}" :sm="{span:1,offset:1}" class="starLeftpadding">
                                                    <span class="redStar">※</span>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </el-col>
                                <!-- 信息填写区：右边 -->
                                <el-col :md="{span: 10, offset: 1}" :sm="{span: 17, offset: 5}">
                                    <div class="grid-content bg-purple">
                                        <el-form :label-position="labelPosition" label-width="45%" :model="formLabelAlign">
                                            <el-form-item label="工作单位/就读学校：" class="grayish">
                                                <el-col :md="20" :sm="11">
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
                                <el-col :md="{span: 8, offset: 6}" :sm="{span: 9, offset: 6}" :xs="{span: 9, offset: 6}" v-if="tabIndex!=1">
                                    <el-button type="primary" @click="prevStep">上一步</el-button>
                                </el-col>
                                <el-col :md="{span: 8}" :sm="{span: 9,offset:isCenter}" :xs="{span: 9,offset:isCenter}" >
                                    <div :class="{isCenter:isCenter}">
                                        <el-button type="primary" @click="nextStep">下一步</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <!-- 保存和提交按钮 -->
                            <el-row v-else>
                                <el-col :md="{span: 8, offset: 6}" :sm="{span: 8, offset: 6}" :xs="{span: 9, offset: 5}">
                                    <el-button type="primary">保存</el-button>
                                </el-col>
                                <el-col :md="8" :sm="10" :xs="9">
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
            tabIndex: 1, //信息页面
            bodyHeight: "", //页面高度
            bodyWidth: "", //页面宽度
            right:true,//右边信息是否显示
            left:true,//左边信息是否显示
            labelWidth:"40%",//信息label的宽度
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
        prevStep() {
            var _this = this;
            if (_this.tabIndex == 1) {
                return;
            }
            if (_this.bodyWidth < 992 ) {//＜992px时需要调用是否显示右边的封装方法
                if ( _this.tabIndex == 2 ||_this.tabIndex == 3 || _this.tabIndex == 5) 
                {//2、3、5页分左右两边信息，需调用右边显示方法
                    _this.showRight(true); //参数：右边是否显示状态  
                }
                else{//上面的操作会让右边显示 左边消失，有BUG,进行调整
                    _this.left = false;
                    _this.right = true;
                    _this.tabIndex--;
                }
            }else{//≥992px时同一页左右两边信息都显示，并且减页码
                _this.left = true;
                _this.right = true;
                _this.tabIndex--;
            }
        },
        //下一步
        nextStep() {
            var _this = this;
            if (_this.tabIndex == 6) {
                return;
            }
            if (_this.bodyWidth < 992 ) {//＜992px时需要调用是否显示右边的封装方法
                if ( _this.tabIndex == 2 ||_this.tabIndex == 3 || _this.tabIndex == 5) {//2、3、5页分左右两边信息，需调用右边显示方法
                     _this.showRight( false);  //参数：右边是否显示状态      
                }
                else{//上面的操作会让右边显示 左边消失，有BUG,进行调整
                    _this.left = true;
                    _this.right = false;
                    _this.tabIndex++;
                }
            }else{//≥992px时同一页左右两边信息都显示，并且加页码
                _this.left = true;
                _this.right = true;
                _this.tabIndex++;
            }             
        },
        //点击返回某一信息页面
        changeTabIndex(index) {
            var _this = this;
            _this.tabIndex = index;
        },
        //是否显示右边信息
        showRight( bol) {//右边状态：true显示/false隐藏
            var _this = this;
            if (_this.right == bol) {//如果右边是隐藏状态，右边显示操作不需要加页码
                _this.right = !bol;//右边显示
                _this.left = bol;//左边隐藏
            }else {//如果右边是显示状态
                _this.right = bol;//右边隐藏
                _this.left = !bol;//左边显示
                if(!bol){//右边隐藏操作，即显示下一页的左边，需要加页码
                    _this.tabIndex++;
                }else{
                    _this.tabIndex--;
                }
            }
        }
    },
    computed: {
        //步骤进度
        selectPage() {
            var _this = this;
            if (_this.tabIndex < 3) {
                return 1;
            } else if (_this.tabIndex < 5) {
                return 2;
            } else {
                return 3;
            }
        },
        //首页下一步按钮是否居中
        isCenter(){
            var _this = this;
            if(_this.tabIndex == 1){
                return 10
            }else{
                return 0
            }
        }
    },
    mounted() {
        var _this = this;  
        _this.bodyWidth = document.documentElement.clientWidth || document.body.clientWidth; 
        _this.bodyHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (_this.bodyWidth < 992 && _this.bodyWidth >= 768) {
            _this.right = false;
        }   
    },
    watch:{
        bodyWidth(value){
            if(value<376){
                var _this = this;
                _this.labelWidth = "46%";
            }
        }
    }
};
</script>

<style>
/* 媒体查询 */
/* ≤996px样式 */
@media screen and (max-width:996px) {
    /* 头部样式 */
    #uploadInfo header{
        height: 100px !important;
        margin-bottom: 3% !important;
    }
    /* 头部logo样式 */
    #uploadInfo header img {
        width: 10%;
        height: 100%;
        vertical-align: middle;
        margin-top: 1%;
    }
    /* 主体样式 */
    body{
        background-color:white !important;
    }
    #main {
        width: 88% !important;
    }
    .studentInfo > div:nth-child(1){
        margin-top: 3%;
        padding-top: 1%;
    }
    /* 上传图片div */
    #uploadImg{
        width: 120% !important;
        margin-left: 60%;
        margin-top: 14%;
    }
    /* 深灰浅灰条纹 */
    .darkgray{
        background-color: #E9E9E9 !important;
    }
    /* 浅灰色条纹 */
    .grayish{
        background-color: #F8F8F8 !important;
    }
    /* 消除首页基本信息左边距离 */
    .leftStuInfo{
        margin-left: 0 !important;
        padding-left: 0 !important;
    }
    /* 首页信息间距 */
    .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label{
        line-height: 50px !important;
    }
    /* 调整每一行信息的样式 */
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom:0px !important;
    }
    .el-col-sm-offset-2{
        margin-left: 0 !important;
    }
    .el-col {
        padding:0 !important;
    }
    .el-col-sm-22{
        width: 100% !important;
    }
    /* 清除左边间距 */
    .clearLeftMagin>div{
        margin-left: 0 !important;
        width: 100% !important;
    }
}
/* ＜376px样式 */
@media screen and (max-width:376px){
    /* 整体样式 */
    #main{
        padding: 9px 15px !important;
    }
    .el-main{
        padding: 20px 0;
    }
    /* 头部样式 */
    #uploadInfo header{
        height:86px !important;
    }
    /* 头部logo样式 */
    #uploadInfo header img{
        width: 24%;
        height:83% !important;
        margin-top: 6% !important;
    }
    /* 信息部分样式 */
    .studentInfo{
        padding-top:8px !important;
    }
    /* 步骤进度条样式 */
    .el-steps--simple{
        padding: 13px 3%;
    }
    .el-step.is-simple:not(:last-of-type) .el-step__title{
        max-width:70% !important;
    }
    .el-step.is-simple .el-step__title{
        font-size:12px;
    }
    /* 清除条纹颜色 */
    /* 深灰浅灰条纹 */
    .darkgray{
        background-color: transparent !important;
    }
    /* 浅灰色条纹 */
    .grayish{
        background-color: transparent !important;
    }
    /* 上传图片div */
    #uploadImg{
        width:106px !important;
        top: 5%;
        right: 28%;
        height: 120px;
    }
    .avatar-uploader-icon{
        line-height:119px !important;
    }
    /* 上一步下一步按钮样式 */
    #btn button{
        width:62% !important;
    }
    /* 每行信息间距 */
    .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label{
        line-height:44px !important
    }
}


/* ＞996px样式 */
/* 全局样式 */
html,
body {
    margin: 0;
    padding: 0;
    overflow: auto;
    background-color: #f6f6f6;
}
#uploadInfo body {
    padding: 0px;
    margin: 0px !important;
}
#uploadInfo {
    color: #101010;
    font-size: 1em;
}
/* 头部样式 */
#uploadInfo header {
    background-color: #236cc8;
    line-height: 15%;
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
    padding-top: 0px !important;
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
/* 上传图片的样式 */
#uploadImg {
    width: 68%;
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
    padding-left: 15%
}
/* 下一步按钮样式 */
#btn button {
    width: 35%;
    margin: 30px 0px;
    background: #236cc8 !important;
    border-color: #236cc8 !important;
}
/* 步骤进度条选中样式 */
.el-step.is-simple:not(:last-of-type) .el-step__title {
    max-width: 59% ;
}
#Progress .el-step__head.is-success {
    color: #236cc8 !important;
    border-color: #236cc8 !important;
}
#Progress .el-step__title.is-success {
    color: #236cc8 !important;
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
.el-step {
    cursor: pointer;
}
/* 必填项标识符 */
.redStar {
    color: red;
    font-size: 0.6em;
}
.starLeftpadding {
    padding-left: 0px !important;
}
</style>
