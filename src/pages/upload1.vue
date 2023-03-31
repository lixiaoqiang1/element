<style scoped>
.content{
  text-align: left;
}
/* .con1>>>ul li{
  width: 240px;float: left;margin-right: 10px;
}
.el-upload-list--picture .el-upload-list__item-thumbnail{
  width: 90px;height: 90px;
} */
</style>
<template>
  <div class="content">
    <h5>上传图片或者附件</h5>
    <div class="con1">
      <el-upload
      ref="upload"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="onchange"
      :file-list="fileList"
      list-type="picture"
      :limit="2"
      :auto-upload="false"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    </div>
    <el-button @click="onclickbtn">确定</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
          // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      onchange(file,fileList){
        console.log('111111111')
        const upload = this.$refs.upload.uploadFiles
        this.fileList = this.$refs.upload.uploadFiles
        console.log('222')
        console.log(upload)
        // for(const i in upload){
        //   console.log(this.compressImg(upload[i].raw))
        //   upload[i].raw = this.compressImg(upload[i].raw)
        // }
        // upload.raw = this.dataURLtoFile(upload.raw)
        // console.log(upload)
      },
      handlePreview(file) {
        console.log(file);
      },
      //base64转码（压缩完成后的图片为base64编码，这个方法可以将base64编码转回file文件）
      dataURLtoFile(dataurl) {
        // console.log(dataurl)
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], { type: mime });
      
      },
      dataURLtoBlob(dataurl, name) {//base64转file
      var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], name, {
        type: mime,
      })
    },
      //压缩图片
      compressImg(file,callback){
        var src;
        var fileSize = (file['size']/1024/1024).toFixed(2);
        var read = new FileReader();
        read.readAsDataURL(file);
        read.onload = function (e) {
          var img = new Image();    
            img.src = e.target.result;    
            img.onload = function(){    
                //默认按比例压缩    
                var w = this.width,    
                    h = this.height;   
                //生成canvas    
                var canvas = document.createElement('canvas');    
                var ctx = canvas.getContext('2d');   
                var base64;
                // 创建属性节点    
                canvas.setAttribute("width", w);    
                canvas.setAttribute("height", h);  
                ctx.drawImage(this, 0, 0, w, h);    
                if(fileSize<1){
                  //如果图片小于一兆 那么不执行压缩操作
                  base64 = canvas.toDataURL(file['type'], 0.5);  
                }else if(fileSize>1&&fileSize<2){
                  //如果图片大于1M并且小于2M 那么压缩0.5
                  base64 = canvas.toDataURL(file['type'], 0.5);  
                }else{
                  //如果图片超过2m 那么压缩0.2
                  base64 = canvas.toDataURL(file['type'], 0.5);  
                }
                // 回调函数返回file的值    
                console.log(base64)
                // callback(base64);
                // if(sessionStorage.getItem('setimg')!=undefined){
                //   var setimg = JSON.parse(sessionStorage.getItem('setimg'))
                // }
                // isarr.push(base64)
                sessionStorage.setItem('setimge',JSON.stringify(base64))
            };  
        };
      },
      onclickbtn(){
        console.log('1212',this.fileList)
        const upload = this.fileList
        for(const i in upload){
          console.log(this.compressImg(upload[i].raw))
          upload[i].raw = this.compressImg(upload[i].raw)
        }
        // upload.raw = this.dataURLtoFile(upload.raw)
        console.log('upload',upload)
      }
    }
  }
</script>