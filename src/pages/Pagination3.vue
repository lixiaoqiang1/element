

<template>
    <div id="app">
        <ul class="main" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <li v-for="(items,index) in userList" :key="index">
                <img  style="width: 100px; height: 100px" :src="items.url">
                <p>{{items.name}}</p>
                <p>{{items.dianhua}}</p>
            </li>
        </ul>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]" 
            :page-size="pagesize"         
            layout="total, sizes, prev, pager, next, jumper"
            :total="userList.length">   
        </el-pagination>
        <!-- <pag class="pag"></pag> -->
    </div>
</template>
<script>
// import pag from '@/components/pag'
export default {
    data (){
        return{
            currentPage:1, //初始页
            pagesize:10,    //    每页的数据
            userList:[
                {'name':'李晓强1','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强2','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强3','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强4','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强5','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强6','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强7','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强8','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强9','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强10','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强11','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强12','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强13','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强14','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
                {'name':'李晓强15','dianhua':'1762152711','url':'https://guwen.sudaizhongxin.com/default/kefu/images/avatar_img/thumbnail_1560772807.png'},
            ]
        }
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
        }
    },
    // components:{pag}
}
</script>
<style scoped>
#app{
    width: 100%;
}
ul,li{
    list-style: none;padding: 0;margin: 0;
}
.main{
    width: 100%;
    height: 700px;
}
.main li{
    /* width: 200px; */
    border:1px #ddd solid;margin: 10px;border-radius: 4px;padding: 10px;float: left;
}
.main li p{
    margin: 0;padding: 0;line-height: 26px;
}
</style>
