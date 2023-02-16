<style scoped>
#pdfDom{
  background: #eee;
}
.box-in{
  height: 300px;overflow: auto;
}
.box-in-list{
  padding: 50px;
}
.group-list{
  padding: 30px 0;
}
.box-in-list>>>.el-table th div,.box-in-list>>>.el-table td div{
  text-align: center;
}
</style>
<template>
  <div>
    <div class="deit">
      <div class="crumbs">
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        
        
        
      </div>
    </div>
    <el-dialog title="内容预览" :visible.sync="dialogTableVisible" width="1200px">
      <div class="box-in">
          <div id="pdfDom">
            <div class="box-in-list">
              <el-table :data="userList" header-align="center">
                <el-table-column type="index" width="100" center></el-table-column>
                <el-table-column label="日期" prop="date"></el-table-column>
                <el-table-column label="用户姓名" prop="name"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="地址" prop="address"></el-table-column>    
              </el-table>
            </div>
            
          </div>
          <div class="group-list">
            <el-button class="isbtn" @click="getPdf()">下载PDF</el-button>
          </div>
        </div>
    </el-dialog>
    
  </div>
  </template>
  
  <script>
  
    export default {
      data() {
        return {
          dialogTableVisible:false,
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
            {"date":"1998","name":"王小虎","email":"3610@qq.com","address":"上海市"}
          ],
          
          htmlTitle: 'pdf文件名'
        }
      },
      created() {
        
      },
      components: {
        
      },
      methods: {
        
      }
    }
  </script>