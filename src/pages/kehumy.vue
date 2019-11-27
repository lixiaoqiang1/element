<template>
	<div>
		<div class="row mt30 pl15">
            <el-button type="warning" @click="delGroup" :disabled="this.sels.length === 0">批量删除</el-button><!--disabled值动态显示，默认为true,当选中复选框后值为false-->
        </div>
        <el-table :data="tableList" :fit="true" @row-click="handleCurrentChange" @selection-change="selsChange" ref="table">
            <el-table-column type="selection" width="55" reserve-selection=""></el-table-column>
            <el-table-column prop="id" label="ID" width="150" class-name="bg_blue"></el-table-column>
            <el-table-column prop="cpsProductId" label="商品ID" width="200"></el-table-column>
            <el-table-column prop="productName" label="商品名称" width="200" show-overflow-tooltip></el-table-column>
            
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="onEditSku(scope.row.id)">编辑</el-button>
                    <el-button size="small" @click="onDelProduct(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
	</div>
</template>
<script>
export default {
    name: 'product',
    mounted() {
        this.onSearch()
    },
    data() {
        return {
            sels: [],//选中的值显示 
            tableList: [
				{'id':'11'},
				{'id':'33'},
				{'id':'22'},
			],
            total: 0,
            start: 0,
            size: 10
        }
    },
    methods: {
        selsChange(sels) {
            this.sels = sels
        },
        delGroup() {
			var ids = this.sels.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔
			console.log(ids);
			// let that = this;
			// that.axios.post('/api/data11', {
			// 	params: {
			// 	ID: ids
			// 	}
			// })
			// .then(function (response) {
			// 	console.log(response);
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
			
        },
        handleCurrentChange(row, event, column) {
			this.$refs.table.toggleRowSelection(row);
		},
		onEditSku(){
			console.log('11');
		},
		onDelProduct(){
			console.log('22');
		}
    }
}
</script>