<style>
 .demo .el-input{
   float:left;width:220px;margin-right:15px;
 }
</style>
<template>
  <div>
    <div class="demo">
      <el-input
        placeholder="请输入姓名"
        v-model="name"/>
      <el-input
        placeholder="请输入姓名"
        v-model="age"/>
    </div>
    <el-button @click="tijiao">提交</el-button>
    <div>
      {{userData.name}}
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState,mapmutations } from 'vuex';
  export default {
    data () {
      return {
       name:'',
        age:'',
      }
    },
    methods: {
       tijiao(){
         let json1 = {
           name:this.name,
           age:this.age
          }
        this.$store.commit('setValue',json1) 
       }
    },
    
    computed:{
      ...mapState(['userData']),
      
    },
    store
  };
</script>
