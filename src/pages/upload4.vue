<template>
    <div>
        <img v-for="(item,index) in imgarr"
        width="100"
        height="100"
        :src="item" 
        :key="index"
        @click="aaa(imgarr,index)"
        />
    </div>
</template>

<script>
import { ImagePreview,Image } from 'vant';
export default {
    components: {
        [ImagePreview.Component.name]: ImagePreview.Component,
        // [Image.Component.name]: Image.Component,
    },
    data(){
        return{
            imgarr:[]
            // 'https://img01.yzcdn.cn/vant/cat.jpeg'
        }
    },
    mounted(){
        console.log()
        this.imgarr = [JSON.parse(sessionStorage.getItem('setimg')),JSON.parse(sessionStorage.getItem('setimge'))]
    },
    methods:{
        aaa(imgarr,index){
            // console.log(row)
            ImagePreview({
                images: imgarr,
                showIndex: true,
                loop: false,
                startPosition: index
            });
        }
    }
}
</script>

<style scoped>

</style>

