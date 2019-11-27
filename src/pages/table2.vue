<template>
<div>
  <div class="deit">
    <div class="crumbs">
      <button @click="handleUserList">查询</button>
      <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="cantainer">
        <el-table style="width: 100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="日期" prop="date" width="180"></el-table-column>
          <el-table-column label="用户姓名" prop="name" width="180"></el-table-column>
          <el-table-column label="邮箱" prop="email" width="180"></el-table-column>
          <el-table-column label="地址" prop="address" width="200"></el-table-column>    
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]" 
            :page-size="pagesize"         
            layout="total, sizes, prev, pager, next, jumper"
            :total="userList.length">   
        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage:1, //初始页
        pagesize:10,    //    每页的数据
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
          {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"}
        ]
      }
    },
    created() {
        // this.handleUserList()//初始化执行
    },
    methods: {
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
        handleUserList() {
            let _that = this;
            //点击按钮查询数据
            _that.axios.get('/api/riqi2').then((res)=>{
              console.log(res.data.data);
              var json1 = res.data.data
              this.userList = json1
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
  }
</script>