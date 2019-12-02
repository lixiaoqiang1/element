<template>
    <div class="app">
      <el-button @click="sendMsg">btn2</el-button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: "我是子组件的msg",//将msg传递给父组件
    }
  },
  methods:{
    sendMsg(){
      //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit('funbtn',this.msg)
    }
  }
}
</script>