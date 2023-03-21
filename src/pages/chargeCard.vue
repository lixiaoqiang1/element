
<template>
  <div class="movie-search-box">
    <el-button @click="onclick">btn1</el-button>
    <div class="selectedBorder" ref="box" v-if="bankSwitch">
      <div class="bankItem">
        你好我是弹窗里面的内容部分
        </div>
    </div>
  </div>
</template>
<script>
const debounce = (function() {
  let timer = 0;
  return function(callback, ms = 200) {  //设置默认200ms
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export default {
  name: 'test',
  data () {
    return {
      bankSwitch:true,
      isctive:'1'
    }
  },
  mounted() {
    document.addEventListener("click", this.bodyCloseMenus);
  },
    bodyCloseMenus(e) {
        let self = this;
          if (self.bankSwitch == true){
            self.bankSwitch = false;
          }
      },
  beforeDestroy() {
      document.removeEventListener("click", this.bodyCloseMenus);
    },
  methods: {
    bodyCloseMenus(){
      this.bankSwitch = false
      // this.isctive = '2'
      // console.log(this.isctive)
    },
    onclick(){
      console.log('111')
      // document.addEventListener("click", this.bodyCloseMenus);
      this.bankSwitch = true
      // this.isctive = '1'
      console.log(this.bankSwitch)
    },
  //   debounce(fn, delay = 3000) {   //默认300毫秒
  //       let timer;
  //       return function () {
  //       let args = arguments;
  //       if (timer) {
  //           clearTimeout(timer);
  //       }
  //       timer = setTimeout(() => {
  //           fn.apply(this, args);   // this 指向vue
  //       }, delay);
  //       };
  //   },
  //    onclick(){
  //        debounce(async () => {
  //           console.log('111')
  //         }, 5000);

         
  //    }
    }
}
</script>
