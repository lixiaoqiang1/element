<template>
    <div>
      <hello :msg-father="message"></hello>
      <el-button @click="btn1">btn1</el-button>
      <div>
        <ul>
          <li v-for="item in xinxi" :key="item.id">
            <span>id：{{item.id}}</span>--<span>{{item.name}}</span>--<span>{{item.age}}岁</span>--
            <el-button @click="btn_huoqu($event)" :data-id='item.id'>获取</el-button>
          </li>
        </ul>
      </div>
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
        message:'我是父组件的值111',
        xinxi:[
          {'id':1521,'name':'张三1','age':'11'},
          {'id':1232,'name':'张三2','age':'33'},
          {'id':1314,'name':'张三3','age':'44'}
        ]
      }
    },
    methods:{
      btn1(){
        console.log('111');
        this.message = '我是父组件的值2222'
        console.log(this.message)
      },
      btn_huoqu(event){
        console.log(event)
      // this.xinxi.splice(index,1);
      console.log(event.currentTarget.getAttributeNode('string'));      

      }
    }
    
}
</script>