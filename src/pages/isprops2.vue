<template>
    <div class="app">
        <child @funbtn="getMsgFormSon"></child>
        {{msgFormSon}}
    </div>
</template>
<script>
import child from '@/components/child2'
export default {
  data () {
    return {
      msgFormSon: "this is msg"
    }
  },
  components:{
    child,
  },
  methods:{
    getMsgFormSon(data){
      this.msgFormSon = data
      console.log(this.msgFormSon)
    }
  }
}
</script>