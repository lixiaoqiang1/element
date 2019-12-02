<template>
  <div>
     <div class="hello">
        <p class="aaa">{{msgFather}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props:['msgFather']// 接受父组件的值
  }
</script>