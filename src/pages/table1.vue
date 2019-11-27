<template>
    <div>
        <div class="row mt30 pl15">
            <el-button type="warning" @click="batchDelete(tableChecked)">批量删除11</el-button><!--disabled值动态显示，默认为true,当选中复选框后值为false-->
        </div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="ID" label="ID" width="120"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" bwidth="120"></el-table-column>
            <el-table-column prop="imgsrc" label="描述图片">
                 <template slot-scope="scope">
                    <img v-for="(item,index) in scope.row.imgsrc" :src="item.aa" :key="index"/>
                </template>
             </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Mock from 'mockjs'
  export default {
    data() {
      return {
        tableData: [
          { ID:'312',date: '2016-05-03',name: '王小虎',
            imgsrc: [
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'},
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'}
            ]
          },
          { ID:'133',date: '2016-05-03',name: '王小虎',
            imgsrc: [
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'},
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'}
            ]
          },
          { ID:'534',date: '2016-05-03',name: '王小虎',
            imgsrc: [
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'},
              {'aa':'https://p0.ssl.qhimgs4.com/dmfd/125_71_75/t016f88c05570d7ed38.webp?size=640x481'}
            ]
          },
        ],
        tableChecked:[],//被选中的记录数据-----对应“批量删除”传的参数值
        ids:[],//批量删除id
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
            // console.log(this.$refs.multipleTable.toggleRowSelection(row))
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(obj) {
        this.multipleSelection = obj;
        var ids = this.multipleSelection.map(item => item.ID).join()//获取所有选中行的id组成的字符串，以逗号分隔
        console.log(ids);
       
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(row);
        var id1 = this.tableData[index].ID;
        console.log(id1)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(row, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      //批量删除
      batchDelete(){  
        var ids = this.multipleSelection.map(item => item.ID).join()//获取所有选中行的id组成的字符串，以逗号分隔
        console.log(ids);

        let _that = this;
        _that.axios.post('/api/riqi2', {
        params: {
          ID: ids
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      
    },
    mounted: function () {
      console.log(this.tableData[0].imgsrc[0].aa);
    }
    
  }
</script>