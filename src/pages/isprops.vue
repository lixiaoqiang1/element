<template>
    <div>
      <hello :msg-father="message"></hello>
      <el-button @click="btn1">btn1</el-button>
  </div>
</template>
<script>
import hello from '@/components/child'
export default {
    components:{
      hello
    },
    data(){
      return{
        message:'我是父组件的值111'
      }
    },
    methods:{
      btn1(){
        console.log('111');
        this.message = '我是父组件的值2222'
        console.log(this.message)
      }
    }
}
</script>