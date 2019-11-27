<template>
<div class="main">
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all 
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column min-width="40px"
      prop="date"
      label="日期日期日期" 
      sortable>
    </el-table-column>
    <el-table-column min-width="40px"
      prop="date2"
      label="日期日期日期日期"
      sortable>
    </el-table-column>
    <el-table-column
      prop="date3"
      label="日期日期日期日期"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          date2: '2016-05-02',
          date3: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        } ]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>
<style scoped>
.main>>>#isbody .el-table th{
    min-width: 20px;width: 40px;
}
.main>>>#isbody .el-table td{
    min-width: 20px;width: 40px;
}
</style>