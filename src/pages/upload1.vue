<style scoped>
table{
  border-collapse:collapse;
}
table,th,td{
  border:1px #ddd solid;
}
</style>
<template>
  <div>
    <input v-model="val1" @input="change" />
    <p>{{array}}</p>
    <table>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        array:1,
        val1:''
      }
    },
    methods:{
      change(){
        // let inputNum = 3;
        // let arr = [];
        // let l = 1;
        // for(const i=0;i<inputNum;i++){
        //   let flag = 0;
        //   let str = '';
        //   for(let j=l;j<1000;j++){
        //     if(flag == inputNum){
        //       l = j;
        //       break;
        //     }
        //     str = str+','+j;
        //     flag++
        //   }
        //   arr.push(subs)
        // }
        console.log(this.val1)
      }
    }
  }
</script>