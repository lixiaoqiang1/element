<template>
    <div>
       <button @click="play1">btn1</button>
    </div>
</template>
<script>
import BenzAMRRecorder from 'benz-amr-recorder'
var amr;
export default {
    data(){
        return{

        }
    },
    methods:{
        play1() {
            // if (amr) {
            //     amr.stop();
            // }
            // amr = new BenzAMRRecorder();
            var amr = new BenzAMRRecorder()
            let url = "http://zhudaitong-oss.oss-cn-zhangjiakou.aliyuncs.com/132342/20200326/20200326173102.amr"

           
            amr.initWithUrl(url).then(function() {
                amr.play()
            })
            amr.onEnded(function() {
                alert('播放完毕')
            })
        },
    }
}
</script>