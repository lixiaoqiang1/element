<style>
 .demo .el-input{
   float:left;width:220px;margin-right:15px;
 }
</style>
<template>
  <div>
    <h4>{{count}}</h4>
    <h5>{{isbtn1}}</h5>
     <div class="demo">
      <el-input
        placeholder="请输入姓名"
        v-model="userData.name"/>
      <el-input
        placeholder="请输入年齡"
        v-model="userData.age"/>
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
      };
    },
    methods: {

    },
    computed:{
      ...mapState(['count','userData','isbtn1']),
      count(){
        //count输出的两种写法都可以
       return this.$store.getters.count
      }
    },
    store
  };
</script>