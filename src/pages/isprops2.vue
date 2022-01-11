<template>
    <div class="app">
      <busceshi></busceshi>
        <child @funbtn="getMsgFormSon"></child>
        <child2></child2>
        {{msgFormSon}}
    </div>
</template>
<script>
import child from '@/components/child'
import child2 from '@/components/child2'
import busceshi from '@/components/busceshi'
export default {
  data () {
    return {
      msgFormSon: "this is msg"
    }
  },
  components:{
    child,child2,busceshi
  },
  methods:{
    getMsgFormSon(data){
      this.msgFormSon = data
      console.log(this.msgFormSon)
    }
  }
}
</script>