<template>
    <div>
        <el-upload
   ref="upload"
   action="index.php"
   accept=".jpg,.jpeg,.png"
   list-type="picture-card"
   :class="{ 'none-up' : uploadDisabled }"
   :on-preview="handlePictureCardPreview"
   :on-remove="handleRemove"
   :http-request="uploadImage"
   :on-success="handleUploadPatternListSuccess"
   :file-list="infoForm.effect"
   :limit="3"
   :auto-upload="true"
 >
   <i class="el-icon-plus" />
 </el-upload>
 
 <!-- 预览弹出框-->
 <el-dialog :visible.sync="dialogVisible" append-to-body>
   <img width="100%" :src="dialogImageUrl" alt="">
 </el-dialog>

    </div>
</template>

<script>
export default {
    
    data(){
        return{
            dialogImageUrl:'',
            uploadDisabled:'',
            infoForm:[]
        }
    },
    mounted(){
        
    },
    methods:{
        
    // 上传图片的方法
    uploadImage(res) {
    const formData = new FormData()
    formData.append('file', res.file)
    upload(formData).then((resData) => {
        this.fileList.push({ url: resData.data })
        this.uploadDisabled = this.fileList.length >= 3
    })
    },
    // 移除图片功能
    handleRemove(file, fileList) {
    const index = this.fileList.findIndex(item => {
        return item.uid === file.uid
    })
    this.fileList.splice(index, 1)
    this.uploadDisabled = this.fileList.length >= 3
    },
    // 解决上传时图片跳动问题
    handleUploadPatternListSuccess(response, file, fileList) {
    this.infoForm.effect = fileList
    },
    // 预览图片功能
    handlePictureCardPreview(file) {
        console.log(file)
    this.dialogVisible = true
    this.dialogImageUrl = file.url
    },

    }
}
</script>

<style scoped>

</style>

