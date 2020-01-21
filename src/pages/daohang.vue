<template>
    <div>
        <el-form ref="form" :rules="rules" :model="form" label-width="100px">
            <el-form-item label="手机号" prop="phone">
                <el-input class="inp" v-model="form.phone" :maxlength="11" auto-complete="true"></el-input>
            </el-form-item>
        </el-form>
       <el-button @click="sendMsg" type="primary" :disabled="isDisabled">{{buttonName}}</el-button>
    </div>
</template>
<script>
export default {
    data() {
        // 此处自定义校验手机号码js逻辑
        var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
        var validatePhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('号码不能为空!!'))
            }
            setTimeout(() => {
                if (!phoneReg.test(value)) {
                callback(new Error('格式有误'))
                } else {
                callback()
                }
            }, 1000)
        }
        return {
            form: {
                phone: '',
            },
            phone: '',
            
            buttonName: "发送短信",//倒计时
            isDisabled: false,//倒计时
            time: 10,//倒计时
            // 校验规则
            rules: {
                phone: [
                    {
                        required: true, //是否必填
                        validator: validatePhone,
                        trigger: 'blur'  //何事件触发
                    },
                ]
            }
        }
    },
    
    methods:{
        //手机倒计时
        sendMsg() {
            let me = this;
            me.isDisabled = true;
            let interval = window.setInterval(function() {
                me.buttonName = '（' + me.time + '秒）后重新发送';
                --me.time;
                if(me.time < 0) {
                    me.buttonName = "重新发送";
                    me.time = 10;
                    me.isDisabled = false;
                    window.clearInterval(interval);
                }
            }, 1000);
        }
  }
}
</script>