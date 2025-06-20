<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
<!--                <el-col :span="12"  v-if="sessionTable !='huishouYuyue'">-->
<!--                    <el-form-item class="select" v-if="type!='info'"  label="垃圾出库申请" prop="huishouYuyueId">-->
<!--                        <el-select v-model="ruleForm.huishouYuyueId" :disabled="ro.huishouYuyueId" filterable placeholder="请选择垃圾出库申请" @change="huishouYuyueChange">-->
<!--                            <el-option-->
<!--                                    v-for="(item,index) in huishouYuyueOptions"-->
<!--                                    v-bind:key="item.id"-->
<!--                                    :label="item.huishouYuyueUuidNumber"-->
<!--                                    :value="item.id">-->
<!--                            </el-option>-->
<!--                        </el-select>-->
<!--                    </el-form-item>-->
<!--                </el-col>-->

                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="报名编号" prop="huishouYuyueUuidNumber">
                        <el-input v-model="huishouYuyueForm.huishouYuyueUuidNumber"
                                  placeholder="报名编号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="报名编号" prop="huishouYuyueUuidNumber">
                            <el-input v-model="ruleForm.huishouYuyueUuidNumber"
                                      placeholder="报名编号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="报名理由" prop="huishouYuyueText">
                        <el-input v-model="huishouYuyueForm.huishouYuyueText"
                                  placeholder="报名理由" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="报名理由" prop="huishouYuyueText">
                            <el-input v-model="ruleForm.huishouYuyueText"
                                      placeholder="报名理由" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="出库时间" prop="huishouChukuTime">
                        <el-input v-model="huishouYuyueForm.huishouChukuTime"
                                  placeholder="出库时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="出库时间" prop="huishouChukuTime">
                            <el-input v-model="ruleForm.huishouChukuTime"
                                      placeholder="出库时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="申请状态" prop="huishouYuyueYesnoValue">
                        <el-input v-model="huishouYuyueForm.huishouYuyueYesnoValue"
                                  placeholder="申请状态" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="申请状态" prop="huishouYuyueYesnoValue">
                            <el-input v-model="ruleForm.huishouYuyueYesnoValue"
                                      placeholder="申请状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="审核回复" prop="huishouYuyueYesnoText">
                        <el-input v-model="huishouYuyueForm.huishouYuyueYesnoText"
                                  placeholder="审核回复" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="审核回复" prop="huishouYuyueYesnoText">
                            <el-input v-model="ruleForm.huishouYuyueYesnoText"
                                      placeholder="审核回复" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='huishouYuyue' ">
                    <el-form-item class="input" v-if="type!='info'"  label="审核时间" prop="huishouYuyueShenheTime">
                        <el-input v-model="huishouYuyueForm.huishouYuyueShenheTime"
                                  placeholder="审核时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="审核时间" prop="huishouYuyueShenheTime">
                            <el-input v-model="ruleForm.huishouYuyueShenheTime"
                                      placeholder="审核时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
            <input id="huishouYuyueId" name="huishouYuyueId" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="运输名称" prop="chukuName">
                       <el-input v-model="ruleForm.chukuName"
                                 placeholder="运输名称" clearable  :readonly="ro.chukuName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="运输名称" prop="chukuName">
                           <el-input v-model="ruleForm.chukuName"
                                     placeholder="运输名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="运输编号" prop="chukuUuidNumber">
                       <el-input v-model="ruleForm.chukuUuidNumber"
                                 placeholder="运输编号" clearable  :readonly="ro.chukuUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="运输编号" prop="chukuUuidNumber">
                           <el-input v-model="ruleForm.chukuUuidNumber"
                                     placeholder="运输编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.chukuPhoto" label="运输照片" prop="chukuPhoto">
                        <file-upload
                            tip="点击上传运输照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.chukuPhoto?$base.url+ruleForm.chukuPhoto:''"
                            @change="chukuPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.chukuPhoto" label="运输照片" prop="chukuPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.chukuPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="运输地点" prop="chukuAddress">
                       <el-input v-model="ruleForm.chukuAddress"
                                 placeholder="运输地点" clearable  :readonly="ro.chukuAddress"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="运输地点" prop="chukuAddress">
                           <el-input v-model="ruleForm.chukuAddress"
                                     placeholder="运输地点" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="运输类型" prop="chukuTypes">
                        <el-select v-model="ruleForm.chukuTypes" :disabled="ro.chukuTypes" placeholder="请选择运输类型">
                            <el-option
                                v-for="(item,index) in chukuTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="运输类型" prop="chukuValue">
                        <el-input v-model="ruleForm.chukuValue"
                            placeholder="运输类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="运输目的地" prop="chukuMudiAddress">
                       <el-input v-model="ruleForm.chukuMudiAddress"
                                 placeholder="运输目的地" clearable  :readonly="ro.chukuMudiAddress"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="运输目的地" prop="chukuMudiAddress">
                           <el-input v-model="ruleForm.chukuMudiAddress"
                                     placeholder="运输目的地" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="运输介绍" prop="chukuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.chukuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.chukuContent" label="运输介绍" prop="chukuContent">
                            <span v-html="ruleForm.chukuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                huishouYuyueForm: {},
                ro:{
                    huishouYuyueId: false,
                    chukuName: false,
                    chukuUuidNumber: false,
                    chukuPhoto: false,
                    chukuAddress: false,
                    chukuTypes: false,
                    chukuMudiAddress: false,
                    chukuContent: false,
                    chukuDelete: false,
                    insertTime: false,
                },
                ruleForm: {
                    huishouYuyueId: '',
                    chukuName: '',
                    chukuUuidNumber: new Date().getTime(),
                    chukuPhoto: '',
                    chukuAddress: '',
                    chukuTypes: '',
                    chukuMudiAddress: '',
                    chukuContent: '',
                    chukuDelete: '',
                    insertTime: '',
                },
                chukuTypesOptions : [],
                huishouYuyueOptions : [],
                rules: {
                   huishouYuyueId: [
                              { required: true, message: '垃圾运输不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chukuName: [
                              { required: true, message: '运输名称不能为空', trigger: 'blur' },
                          ],
                   chukuUuidNumber: [
                              { required: true, message: '运输编号不能为空', trigger: 'blur' },
                          ],
                   chukuPhoto: [
                              { required: true, message: '运输照片不能为空', trigger: 'blur' },
                          ],
                   chukuAddress: [
                              { required: true, message: '运输地点不能为空', trigger: 'blur' },
                          ],
                   chukuTypes: [
                              { required: true, message: '运输类型不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   chukuMudiAddress: [
                              { required: true, message: '运输目的地不能为空', trigger: 'blur' },
                          ],
                   chukuContent: [
                              { required: true, message: '运输介绍不能为空', trigger: 'blur' },
                          ],
                   chukuDelete: [
                              { required: true, message: '逻辑删除不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");

          this.$route.query.id
          console.log(this.$route.query.id, 88888)
          this.huishouYuyueChange(this.$route.query.id)

            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=chuku_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.chukuTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `huishouYuyue/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.huishouYuyueOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            huishouYuyueChange(id){
                this.$http({
                    url: `huishouYuyue/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.huishouYuyueForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `chuku/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.huishouYuyueChange(data.data.huishouYuyueId)
                        _this.ruleForm.chukuContent = _this.ruleForm.chukuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                  this.ruleForm.huishouYuyueId = this.$route.query.id
                    if (valid) {
                        this.ruleForm.chukuContent = this.ruleForm.chukuContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`chuku/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                      this.$router.push(
                                          {
                                            path: '/chuku',
                                            query: {
                                            }
                                          }
                                      )
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
              this.$router.push(
                  {
                    path: '/chuku',
                    query: {
                    }
                  }
              )
            },
            //图片
            chukuPhotoUploadChange(fileUrls){
                this.ruleForm.chukuPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

