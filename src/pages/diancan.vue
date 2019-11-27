<style scoped>
ul{margin: 0;}
li{list-style: none;}
.totaldiv{
  background: #fff;
  padding: 10px;
  border-bottom: 1px #ddd solid;
}
</style>
<template>
  <div>2
    <el-col :span="7" style="background:#eee">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="点餐" name="first">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="goodName"
              label="商品名称"
              width="150">
            </el-table-column>
            <el-table-column
              prop="count"
              label="量"
              width="120">
            </el-table-column>
            <el-table-column
              prop="price"
              label="金额"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                <el-button @click="addorderlist(scope.row)" type="text" size="small">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="totaldiv">
            <small>数量：</small>{{totalCount}} --- <small>金额：</small>{{totalMoney}}元
          </div>
          <div>
            <el-button type="warning">挂单</el-button>
            <el-button type="danger" @click="getALLGood">删除</el-button>
            <el-button type="success" @click="checkout">结账</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
        <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="17" style="padding: 0 10px;">
      <div class="title" style="text-align: left;line-height: 40px;padding: 0 15px;background: #eee;margin-bottom: 15px;">常用商品</div>
        <div class="often-list">
          <ul>
            <li>
              <el-button v-for="(goods,index) in type_changyong" :key="index" @click="addorderlist(goods)">
                <span>{{goods.goodName}}-￥{{goods.price}}元</span>
              </el-button>
              
            </li>
          </ul>
        </div>
      <div>
        <el-tabs v-model="activeName2" @tab-click="handleClick2">
          <el-tab-pane label="汉堡" name="first">
            <el-button v-for="(goods,index) in typegood1" :key="index" @click="addorderlist(goods)">
              <span>{{goods.goodName}}-￥{{goods.price}}元</span>
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="小吃" name="second">
            <el-button v-for="(goods,index) in typegood2" :key="index" @click="addorderlist(goods)">
              <span>{{goods.goodName}}-￥{{goods.price}}元</span>
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="饮料" name="third">
            <el-button v-for="(goods,index) in typegood3" :key="index" @click="addorderlist(goods)">
              <span>{{goods.goodName}}-￥{{goods.price}}元</span>
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="套餐" name="fourth">
            <el-button v-for="(goods,index) in typegood4" :key="index" @click="addorderlist(goods)">
              <span>{{goods.goodName}}-￥{{goods.price}}元</span>
            </el-button>
          </el-tab-pane>
        </el-tabs>
        
      </div>
    </el-col>
  </div>
</template>
<script>
  export default {
    name:'table4',
    data() {
      return {
        activeName: 'first',
        activeName2: 'first',
        tableData: [
          // {goodName: '可乐1',num1: '2',money: '4'}
        ],
        type_changyong:[],
        typegood1:[],
        typegood2:[],
        typegood3:[],
        typegood4:[],
        totalMoney:0,
        totalCount:0
      };
    },
    created:function(){
      this.axios.get('/api/riqi3').then((res)=>{
        this.type_changyong = res.data.data[0]
        this.typegood1 = res.data.data[1]
        this.typegood2 = res.data.data[2]
        this.typegood3 = res.data.data[3]
        this.typegood4 = res.data.data[4]
        console.log(res.data.data)
          // console.log(res)
      }).catch((err)=>{
          console.log(err);
      })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleClick2(tab, event) {
        console.log(tab, event);
      },
      //添加
      addorderlist(goods){
        //清零
        this.totalMoney=0;
        this.totalCount=0;
        
        //商铺是否仪存在订单中
        let ishave = false;
        for(let i=0;i<this.tableData.length;i++){
          if(this.tableData[i].goodsId == goods.goodsId){
            ishave=true
          }
        }
        if(ishave){
          let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
          arr[0].count++;
        }else{
          let newgoodt = {goodsId:goods.goodsId,goodName:goods.goodName,price:goods.price,count:1}
          this.tableData.push(newgoodt)
          //调用计算汇总
          this.getAllmonet();
        }
        //计算汇总金额和数量
        this.tableData.forEach((element)=>{
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.price*element.count)
        })

        //判断业务逻辑
      },
      //单个移除
      delSingleGoods(goods) {
        this.tableData=this.tableData.filter(o=>o.goodsId != goods.goodsId);
        //调用计算汇总
        this.getAllmonet();
      },
      //汇总数量及清零
      getAllmonet(){
        this.totalCount=0;
        this.totalMoney=0;
        if(this.tableData){
          //计算汇总金额和数量
          this.tableData.forEach((element)=>{
            this.totalCount+=element.count;
            this.totalMoney=this.totalMoney+(element.price*element.count)
          })
        }
      },
      //全部移除
      getALLGood(){
        this.tableData=[];
        this.totalMoney=0;
        this.totalCount=0;
      },
      //结账
      checkout(){
        if(this.totalCount!=0){
          this.tableData=[];
          this.totalMoney=0;
          this.totalCount=0;
          this.$message({
            message:'结账成功。感谢你为店里出了一份力',
            type:'success'
          })
        }else{
          this.$message.error('不能空结！')
        }
      }
      
    }
  };
</script>