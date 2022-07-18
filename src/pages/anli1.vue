<template>
  <div>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
          v-model="value1"
          type="datetimerange"
          value-format="timestamp"
          range-separator="至"
          @change="dataSearch"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
          
          </el-date-picker>
          
      </div>
      <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right">
      </el-date-picker>
    </div>

    <el-cascader v-model="preSearchForm.class" :props="props" :show-all-levels="false"></el-cascader>
  </div>
</template>

<script>
let id = 0;
  export default {
    props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level,value } = node;
            buckleTemplateNext({pid:value || 0}).then(res=>{
              console.log(res)
              const nodes = res.map(x=>({
                value: x.id,
                label: x.name,
                leaf: level >= 2
              }))
              resolve(nodes)
            })
          }
        },
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    },
    methods:{
         dataSearch(a){
             console.log(a)
        }
          
    }
  };
</script>