
<style scoped>
.box-in{
  height: 300px;overflow: auto;
}
</style>
<template>
  <div>
    <div class="deit">
      <div class="crumbs">
        <!-- <button @click="handleUserList">查询</button> -->
        <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb> -->

        <!-- <el-button @click="getPdf()">下载PDF</el-button> -->
        <button @click="handleExport">导出11</button>

        <div ref="pdf">
          <div class="box-in">
            <el-table :data="userList" style="width:100%">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column label="日期" prop="date"></el-table-column>
              <el-table-column label="用户姓名" prop="name"></el-table-column>
              <el-table-column label="邮箱" prop="email"></el-table-column>
              <el-table-column label="地址" prop="address"></el-table-column>    
            </el-table>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
    import {downloadPDF} from "@/util/pdf.js"
    export default {
      data() {
        return {
          userList: [
          {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"},
          ],
          isshow:false,
          htmlTitle: 'pdf文件名'
        }
      },
      created() {
        
      },
      components: {
        
      },
      methods: {
        handleExport(){
          sessionStorage.setItem('htmlTitletitle','文件名文件名1')
          downloadPDF(this.$refs.pdf)
        }
      }
    }
  </script>