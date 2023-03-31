<template>
    <div>
        <el-button @click="onClick">防抖1</el-button>
        <el-button @click="onClick2">防抖2</el-button>
    </div>
</template>
<script> 
import { debouce,throttle } from "@/util/auto.js"
export default {
    data(){
        return {

        }
    },
    created(){

    },
    mounted(){
        
    },
    methods:{
        onClick:debouce(function(){
            console.log('111')
        },200),
        onClick2:throttle(function(){
            console.log('222')
        },200,2000)
    }
}
</script>
