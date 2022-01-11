<template>
    <div>
        <h3>子组件</h3>
        <p>{{ val1 }}</p>
        <el-button @click="btn1">btn1</el-button>
        <el-radio-group v-model="radio" fill="#ddd">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    data(){
        return{
            val1:'111',
            radio:''
        }
    },
    mounted () {
        
    },
    methods:{
        btn1(){
            this.$bus.$emit(event)

        }
    }
}
</script>
