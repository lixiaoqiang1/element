
<template>
  <div class="movie-search-box">
    <el-tree
      ref="tree"
      default-expand-all
      :data="data"
      @node-click="handleNodeClick"
      node-key="id"
      :current-node-key="currentNodeKey"
      :highlight-current="true"
      :props="defaultProps"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span :id="data.id">{{ node.label }}</span>
      </span>
    </el-tree>
    <el-button @click="nodeClick1" type="primary">点击后选中id为006的</el-button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: "一级 1",
          children: [
            {
              id: 4,
              name: "二级 1-1",
              children: [
                {
                  id: 9,
                  name: "三级 1-1-1",
                },
                {
                  id: 10,
                  name: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "一级 2",
          children: [
            {
              id: "005",
              name: "二级 2-1",
            },
            {
              id: "006",
              name: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          name: "一级 3",
          children: [
            {
              id: 7,
              name: "二级 3-1",
            },
            {
              id: 8,
              name: "二级 3-2",
              children: [
                {
                  id: 11,
                  name: "三级 3-2-1",
                },
                {
                  id: 12,
                  name: "三级 3-2-2",
                },
                {
                  id: 13,
                  name: "三级 3-2-3",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "name",
      },
      currentNodeKey: "",
    };
  },
   watch: {
    currentNodeKey(newVal) {
      if (newVal.toString()) {
        this.$refs["tree"].setCurrentKey(newVal);
      } else {
        this.$refs["tree"].setCurrentKey(null);
      }
    },
  },
  methods: {
    // 点击节点
    handleNodeClick(data,node){
      this.currentNodeKey = data.id;
      // 判断点击的层级进行操作
      if(node.level == 1){
        console.log('第一层data1',data);
        console.log('第一层node1',node);
      }else if(node.level == 2){
        console.log('第二层data2',data);
        console.log('第二层node2',node);
      }else if(node.level == 3){
        console.log('第三层data3',data);
        console.log('第三层node3',node);
      }
    },

    nodeClick1(){
      // 点击选中006号
      this.$refs.tree.setCurrentKey('006'); 
    },

    // 如果数据过多可以调用这个方法并传入要显示的id
    //滚动到选中定位的位置
    selectedRegion(id) {
      console.log("滚动到选中定位的位置");
      // 通过Id获取到对应的dom元素
      const node = document.getElementById(id);
      setTimeout(() => {
        if (node) {
          this.$nextTick(() => {
            // 通过scrollIntoView方法将对应的dom元素定位到可见区域 【block: 'center'】这个属性是在垂直方向居中显示
            node.scrollIntoView({ block: "center" });
          });
        }
      }, 100);
    },
  },
};
</script>

