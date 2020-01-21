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
        <el-table style="width: 100%;"  :data="userList.slice((page_index-1)*page_size,page_index*page_size)">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column label="日期" prop="date" width="180"></el-table-column>
          <el-table-column label="用户姓名" prop="name" width="180"></el-table-column>
          <el-table-column label="邮箱" prop="email" width="180"></el-table-column>
          <el-table-column label="地址" prop="address" width="200"></el-table-column>    
        </el-table>
        <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]" 
            :page-size="pagesize"         
            layout="total, sizes, prev, pager, next, jumper"
            :total="userList.length">   
        </el-pagination> -->

        <page-nation :total="userList.length" @pageChange="pageChange"></page-nation>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import pageNation from '@/components/pag'     // 引入
  export default {
    data() {
      return {
        page_index: 1, // 页数
	      page_total: 200, // 总数据条数
        page_size: 8,//每页数量
        
        // currentPage:1, //初始页
        // pagesize:10,    //    每页的数据
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
    components: {
      pageNation
    },
    methods: {
        pageChange (item) {
          console.log(item)
          this.page_index = item.page_index;
          this.page_size = item.page_limit;
          // this.initData() //改变页码，重新渲染页面
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