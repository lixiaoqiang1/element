<template>
  <div>
     <div class="hello">
       <h4>子页面1</h4>
        <p class="aaa">{{msgFather}}</p>
        <br />
        <el-radio-group v-model="status" fill="#d4237a">
            <el-radio label="1">不同意</el-radio>
            <el-radio label="2">同意</el-radio>
        </el-radio-group>
        <el-button @click="btn11">btn11</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    props:['msgFather'],// 接受父组件的值,
    data(){
      return{
        status:'',
      }
    },
    methods:{
      btn11(){
        console.log('111')
        this.$bus.$emit("event1",this.status);
      },
      busfunction(){
        console.log('cshi99')
      }
    }
  }
</script>