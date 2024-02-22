<template>
	<div>
    <template>
   <div class="info-body">
      <!--锚点列表-->
      <ul class="archor">
        <li :class="activeStep === anchor.id ? 'active' : ''"
            v-for="(anchor, index) in anchorList"
            :key="index" @click="jump(anchor.id)">
          <span>{{ anchor.name }}</span>
        </li>
      </ul>
 
      <!--隐藏滚动条-->
      <div class="hid-scroll-bar">
        <div class="scroll-box" id="scroll-box">
 
          <!--模块列表-->
          <div v-for="(item, index) in modules"
               class="info-panel"
               :key="index"
               :id="item.id">
            <div class="info-content">
              <!--模块内容-->
            </div>
          </div>
 
        </div>
      </div>
 
   </div>
</template>
	</div>
</template>
<script>
// import TitleAnchor from "../components/TitleAnchor.vue";
export default {
   components: {
      // TitleAnchor,
   },
   data() {
    return {
      activeStep: '',// 默认选中的锚点的key值
      offsetTop: 0,
    }
  },
  computed: {
    scrollFn() { // 防抖
      return _.debounce(
        this.scroll, 100
      )
    },
    anchorList() { // 锚点列表
      return [
       { id: 'anchor1', name: '锚点1' },
       { id: 'anchor2', name: '锚点2' },
       { id: 'anchor3', name: '锚点3' },
      ];
    },
    modules() { // 模块列表
      return [
        { id: 'anchor1', title: '模块1' },
        { id: 'anchor2', title: '模块2' },
        { id: 'anchor3', title: '模块3' },
      ];
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollFn, true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollFn, false)
  },
  methods: {
    scroll() {
      const box = document.getElementById('scroll-box')
      // 若当前设置的滚动高度大于实际滚动的高度，即为锚点跳转，不再设置选中的锚点
      if(this.offsetTop > box.scrollTop) {
        this.offsetTop = 0
        return
      }
      let totalH = 0
      this.anchorList.some(anchor=> {
        let scrollItem = document.getElementById(anchor.id)// 锚点对应的模块
        totalH = totalH + scrollItem.clientHeight
        let judge = box.scrollTop < totalH
        if(judge) {
          this.activeStep = anchor.id
          return true
        }
      })
    },
    jump(id) {
      this.activeStep = id // 设置选中的锚点为当前点击的
      const box = document.getElementById('scroll-box')
      let scrollItem = document.getElementById(id)
      // 锚点对应的模块与最近的一个具有定位的祖宗元素顶部的距离
      this.offsetTop = scrollItem.offsetTop
      box.scrollTo({
        top: scrollItem.offsetTop,
        behavior: "smooth",
      });
    },
 
  }
}
</script>
<style scoped> /*锚点*/
.archor {
  position: absolute;
  right: 16px;
  display: flex;
  flex-direction: column;
  width: 40px;
  list-style: none;

  

}
li {
    height: 80px;
    border-right: 3px solid #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    
  }
  li:first-child {
      justify-content: flex-start;
    }

    li:last-child {
      justify-content: flex-end;
    }

    li.active {
      border-color: #ddd;
    }
.info-body {
  position: relative;
  width: 65%;
  border-left: 2px solid #F2F2F2;
  padding: 2px 82px 0 0;
  box-sizing: border-box;
}

/*双重包裹，隐藏滚动条*/
.hid-scroll-bar {
  position: relative;
  width: 100%;
  height: 100%;

  
}
.scroll-box {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    position: absolute;

    
  }
  .scroll-box::-webkit-scrollbar {
      display: none;
    }
</style>
