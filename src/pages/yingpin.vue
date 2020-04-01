<style scoped>
.yinpin{
    padding: 50px;
}
</style>
<template>
    <div>
       <div class="yinpin">
            <!-- 播放器 -->
            <aplayer autoplay :music="musicList"></aplayer>
            <!-- 播放器 end-->
       </div>
    </div>
</template>
<script>
 import aplayer from "vue-aplayer";
export default {
    props: ["pdfurl"],
    components: {
    //别忘了引入组件
        aplayer: aplayer
    },
    data(){
        return{
            musicList: {
                title: "youkao100",
                author: "youkao100",
                url: 'http://localhost:1122/static/ceshi.mp3',
                pic: "",
                lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
            },
        }
    },
    computed: {
        url() {
        return this.pdfurl;
        }
    },
    mounted() {
        //录音播放
        this.musicList = {
        title: "youkao100",
        author: "youkao100",
        //   url: this.url,
        url: 'https://win-web-ra01-sycdn.kuwo.cn/197c77356835d6f2034da609e4733bef/5e674a9e/resource/n2/128/2/41/686946241.mp3',
        pic: "",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
        };
    },
    methods:{
        aaa(){
            // musicList.title = this.musicList[i].songname; 
            // musicList.author = this.musicList[i].singername; 
            // musicList.url = this.musicList[i].url; 
            // musicList.pic = this.musicList[i].albumpic_small; 
            // musicList.lrc = this.musicList[i].irl; 
        }
    }



}
</script>