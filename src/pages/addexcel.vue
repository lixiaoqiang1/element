<template>
    <div>
        <el-button @click="exportExcel()">excel导出</el-button>
        <template>
            <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" idth="180"> </el-table-column>
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [
                {date: '2016-05-02', name: '王小虎', address: '上海市1' }, 
                {date: '2016-05-02', name: '王小虎', address: '上海市2' }, 
                {date: '2016-05-02', name: '王小虎', address: '上海市3' } 
            ]
        }
    },
    methods:{
        // Excel导出
        exportExcel() {
            this.getexcel(this.tableData)
        },
        getexcel(value) {
            // const { format_json } = require('@/vendor/Export2Excel')
            const { export_json_to_excel } = require('@/vendor/Export2Excel')
            const { export_get_title_time } = require('@/vendor/Export2Excel')
            const { format_json } = require('@/vendor/Export2Excel')
            import('@/vendor/Export2Excel').then(excel => {
                const tHeader = ['日期', '姓名', '地址',]
                const filterVal = ['date', 'name','address']
                const list = value

                const data = format_json(filterVal, list)
                const currentdate = export_get_title_time()
                export_json_to_excel(tHeader, data, '审批单' + '(' + currentdate + ')')
            })
        },
    }
}
</script>