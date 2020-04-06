<template>
  <div>
    <h1>{{ msg }}</h1><hr>
    <h3>{{count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="aaa">aaa</button>
      
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        msg:'hello vuex',
        arr:'',
      };
    },
    computed:{
      count(){
        return this.$store.state.count 
      }
    },
    store,
    methods:{
      aaa(){
        let json = {
          a1:123,
          a2:'张三',
          a3:'李四'
        }
        this.arr =json
        console.log(arr)
      }
    }
  };
</script>
