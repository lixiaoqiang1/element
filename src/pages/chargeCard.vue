
<template>
  <div class="movie-search-box">
    <el-button @click="onclick">btn1</el-button>
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
    return {}
  },
  methods: {
    debounce(fn, delay = 3000) {   //默认300毫秒
        let timer;
        return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);   // this 指向vue
        }, delay);
        };
    },
     onclick(){
         debounce(async () => {
            console.log('111')
          }, 5000);

         
     }
    }
}
</script>
