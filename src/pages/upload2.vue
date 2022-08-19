<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeUpload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      accept=""
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
        // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        datalist:[]
      };
    },
    methods: {
      beforeUpload(file) {
        console.log(file.size)
      var is2M = file.size / 1024 / 1024 < 2;
      if (!is2M) {
        this.$message({
          message: "上传文件大小不能超过 2MB!",
          type: "warning"
        });
        return false;
      }
      // let regex = /(.jpg|.jpeg|.gif|.png|.pdf)$/;
      let regex = /(.pdf)$/;
      if (regex.test(file.name.toLowerCase())) {
        console.log("校验通过");
      } else {
        this.$message.warning("只能上传.pdf文件");
        return false;
      }
    },
      submitUpload() {
        let {uploadFiles} = this.$refs.upload   
        // this.datalist = uploadFiles
        // const formdata = new FormData()
        for(const i in uploadFiles){
          uploadFiles[i].raw = this.fileYS(uploadFiles[i].raw)
        }
        console.log(uploadFiles)
      },
      // 图片压缩
      fileYS(file){
        // 判断文件是否大于1M
        const isLt1M = (file.size / 1024 / 1024)  < 1; 
        if (!isLt1M) {
          this.$message.warning("上传头像图片大小不能超过 1M! 将进行压缩");
          let myImg = new Promise((resolve) => {
            // 压缩到500KB,这里的500就是要压缩的大小,可自定义
            imageConversion.compressAccurately(file, 500).then((res) => {
              resolve(res);
            });
          });
          return myImg;
        }
        return file;
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log('111');
        console.log(file.raw);
        let reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = function() {
          console.log(reader.result)
          var win = window.open();
	        win.document.write(
	          '<body style="margin:0px;"><object data="' + reader.result + '" type="application/pdf" width="100%" height="100%"><iframe src="' + reader.result + '" scrolling="no" width="100%" height="100%" frameborder="0" ></iframe></object></body>'
	        );
        };
        console.log(reader)
      }
    }
  }
</script>