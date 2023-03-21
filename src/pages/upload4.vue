<template>
    <div>
        <input type="file" name="file" @change="selectPhoto($event)" accept="image/*"multiple>
    </div>
</template>

<script>
//数据库里需要存两份图片地址，一张为原图地址，一张为裁剪后的头像地址
export default {
    data(){
        return{
            img1:'',
            fileUrl:[],
            list:[]
        }
    },
    methods:{
        selectPhoto(event){
                console.log(event.target.files)
                let fileList = event.target.files
                for(let i=0;i<fileList.length;i++){
                    this.fileArry.push(fileList[i])
                    let fileUrl = URL.createObjectURL(fileList[i]);  // 获取文件url
                    this.list.push({msrc:fileUrl,src:fileUrl}) // data中显示的图片url 
                }
                // let fileList=$(".photoFile").get(0).files[0] // 获取input file 文件信息
                // let fileUrl = URL.createObjectURL(fileList);  // 获取文件url
                // this.fileArry.push(fileList)
                console.log(this.fileArry)
                // this.list.push({msrc:fileUrl,src:fileUrl}) 
                event.target.value = "" // 解决不能选同一个文件
      　　　　},
    }
}
</script>

<style scoped>

</style>

