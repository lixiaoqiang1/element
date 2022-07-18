<style>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
.Menu{
    width: 120px;  
}
.liMenu{
  cursor:pointer;
}
.liMenu.active{
  color:red;
}
.nav_ter{
    width: 120px;
}

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .login{
      width: 300px;
      margin: 20px;
      border:1px #eee solid;
      border-radius: 4px;
      padding: 20px 50px;
  }
  .el-input{
      margin-bottom: 20px
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
    opacity: 0
    }
  

</style>
<template>
    <div>
        <div>
            <div class="loadingBox" ref="box" v-show="isLoading"></div>
            <el-button @click="onclickjz">加载中</el-button>
            <el-button @click="maodian">锚点</el-button>
            {{aaa}}
            <el-button @click="aaa+=2">btn+</el-button>
            <el-button @click="aaa-=1">btn-</el-button>
            <el-button @click="bbb('Form cannot be submitted yet.', $event)">btn2</el-button>
        </div>
        <hr>
        <label><input type="checkbox" id="aaa" value="aaa" v-model="che_active">aaa</label>
        <label><input type="checkbox" id="bbb" value="bbb" v-model="che_active">bbb</label>
        <label><input type="checkbox" id="ccc" value="ccc" v-model="che_active">ccc</label>
        {{che_active}}
        <hr>
        <label><input type="radio" id="aaa" value="aaa" v-model="radio_active">aaa</label>
        <label><input type="radio" id="bbb" value="bbb" v-model="radio_active">bbb</label>
        <label><input type="radio" id="ccc" value="ccc" v-model="radio_active">ccc</label>
        {{radio_active}}
        <hr>
        {{selected}}
        <select v-model="selected">
            <option v-for="op1 in op2">{{op1.aa}}</option>
        </select>
        <hr>
        <transition name="fade">
            <div v-if="show">显示还是隐藏1</div>
        </transition>
       <el-date-picker
        v-model="datepicker"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        format="yyyy-MM"
        value-format="yyyy-MM"
        @change="onDateChange"
        >
        </el-date-picker>
        <el-button @click="show=!show">show</el-button>
        <el-row type="flex" justify="center">
            <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
                <el-form-item label="用户名" prop="name" :required="true">
                    <el-input v-model="user.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="user.pass" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-upload" @click="login($event)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-row>
         <hr>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">黄金糕黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
         <hr>
        <ul class="Menu">
            <li class="liMenu" 
            :class="idx==index?'active':''" @click="btn(item,idx)" v-for="(item,idx) in items" 
            :key="idx">{{item}}</li>
        </ul>
         <hr>
        <div class="nav_ter">
            <p class="nav" v-for="(operate,path,index) in navTo.operate" @click="change(operate,path)" :key="index">
                <router-link :to="{ path: operate.path }">
                    {{operate.name}}
                </router-link>
            </p>
        </div>
         <hr>
        <div v-if="sucess1 === '11'">登录成功时候显示1111</div>
        <div v-else>登录失败时候显示2222</div>
         <hr>
        <div>
            <ul>
                <li @click="mechanisms(100)">
                    <h4>400</h4>
                    <h5>1</h5>
                    <p>100</p>
                </li>
                <li @click="mechanisms(200)">
                    <h5>1</h5>
                    <p>100</p>
                </li>
                <li @click="mechanisms(300)">
                    <h5>1</h5>
                    <p>100</p>
                </li>
            </ul>
        </div>
         <hr>
        <div>
            <ul style="border:1px #ddd solid;">
                <li v-for="(item,index) in ita" :key="item.id" @click="btn11(index,$event)">
                    <h5>{{item.aa1}}</h5>
                    <p>{{item.aa2}}</p>
                </li>
            </ul>
        </div>
         <hr>
    </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    data(){
        return{
            isLoading:false,
            aaa:1,
            datepicker:"",
            che_active:[],
            radio_active:[],
            show:false,
            op2:[
                {'aa':'aa1'},{'aa':'aa2'},{'aa':'aa3'}
            ],
            selected:'aa1',
            user: {},
            rules: {
                name: [
                    {required: true, message: '用户名不能为空', trigger: 'blur'}
                ],
                pass: [
                    {required: true, message: '密码不能为空', trigger: 'blur'}
                ]
            },
            items:['首页','列表页','详情页'],
            index:0,
            sucess1:'11',
            navTo:{
    		"operate":[
    		      {"name":"系统1","path":'/table1'},
    		      {"name":"系统2","path":'/table2'}
        	   ]
        	},
            ita:[
                {'id':11,'aa1':'aaa1','aa2':'bbb1'},
                {'id':22,'aa1':'aaa2','aa2':'bbb2'},
                {'id':33,'aa1':'aaa3','aa2':'bbb3'},
            ]
        }
    },
    methods:{
        //加载中
        onclickjz(a){
            // this.loading.close()
            this.isLoading = true
            this.loading = this.$loading({ target: this.$refs.box, text: '拼命加载中...', background: 'transparent' })
        },
        bbb(a){
            alert(a)
        },
        onDateChange(row){
            console.log(row[0].split("-"))
            console.log(row[1].split("-"))
        },
        login (event) {
            console.log(document.getElementsByTagName('html')[0].innerHTML)
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    if (this.user.name === 'admin' && this.user.pass === '123') {
                        this.$notify({
                            type: 'success',
                            message: '欢迎你,' + this.user.name + '!',
                            duration: 3000 
                        })
                        this.$router.replace('/table1')
                    } else {
                        this.$message({
                            type: 'error',
                            message: '用户名或密码错误',
                            showClose: true
                        })
                    }
                }
                else {
                    return false
                }
            })
        },
        btn(item,idx){
            console.log(item);
            console.log(idx +'选中');
            this.index=idx;
        },
        change(operate,path){
            console.log(operate.name)
            console.log(path)
        },
        mechanisms(index){
            console.log(index)
        },
        btn11(index,$event){
            var a = $event.currentTarget
            console.log(a)
        },
        handleCommand(command) {
            this.$message('click on item ' + command);
            console.log(command)
        },
        maodian(){
            let aaa = 200
            window.scrollTo(50000,aaa);               
        }
    },
    mounted(){
        this.axios.get('/api/riqi3').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>

