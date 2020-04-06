<template>
  <div>
    {{count}}
    {{counts}}
    <h4>{{name1}}</h4>
    <!-- <h4>{{z1}}</h4> -->
    <button @click="btn1">add</button>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState,mapmutations } from 'vuex';
  export default {
    data () {
      return {
       z1:[]
      };
    },
    methods: {
       btn1(){
          let aa = {
            z1:'nihao',
            z2:131
          }
          this.z1=aa
       }
    },
    computed:{
      ...mapState(['count','counts','name1']),
      count(){
       return this.$store.getters.count
      }
    },
    store
  };
</script>
<style>
 .infocontent{
   width: 100%;height: 600px;list-style: none;border-bottom: 1px #ddd solid;
 }
</style>