<template>
  <div>
   <div class="btns">
      <!-- elementUI的下载图标 -->
    <i class="el-icon-upload"></i>
      <!-- label的for属性值一定要是input的id值，这样修改label样式才能对input起作用 -->
    <label class="upload-btn" :for="fileId">上传文件</label>
      <!-- 注意：这里有个坑，input的id一定不能写死，否则你在多个页面使用的话会引起冲突 -->
    <input 
        :id="fileId"
        type="file" 
        ref="input" 
        :name="files" 
        multiple="multiple" 
        style="position:absolute;clip:rect(0 0 0 0);" 
        >
</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        /* fileId是input的id值 */
        fileId: ''
      };
    },
    props: { 
     // 如果父组件有传入id值，则接收并在mounted中赋值给fileId
      id: '',
     // input的name属性值，传给后台的参数
      files: '',
     // 是否允许多文件上传，默认true
      multiple: true
    },
    mounted () {
      // 给每个input生成一个id
      this.fileId = this.id || this.gengerateID();
    },
    methods: {
      // 指定input type为file的id
      gengerateID () {
        let nonstr = Math.random().toString(36).substring(3, 8);
        if (!document.getElementById(nonstr)) {
          return nonstr;
        } else {
          return this.gengerateID();
        }
      }
    }
};
</script>