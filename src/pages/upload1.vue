<template>
  <div>
    <el-button @click="start">start</el-button>
    <el-button @click="stop">stop</el-button>
    <el-button @click="end">end</el-button>
    <el-button @click="setdata">setdata</el-button>
    
  </div>
</template>
<script>
	import Recorderx, { ENCODE_TYPE } from 'recorderx';
	const rc = new Recorderx()

export default {
  data(){
    return{

    }
  },
  methods:{
    start(){
      rc.start()
        .then(() => {
          this.maikef = true
          // that.news_img = !that.news_img
          console.log('start recording')
        })
        .catch(error => {
          this.$toast.fail('获取麦克风失败')
          this.maikef = false
          this.reset()
          this.timeShow = false
          console.log('Recording failed.', error)
        })

      },
      // 暂停语音
      stop(){
        rc.clear()
      },
      // 取消语音
      end(){
        rc.pause()
      },
      setdata(){
        rc.pause() // 先暂停录音
        const wav = rc.getRecord({
          encodeTo: ENCODE_TYPE.WAV,
          compressible: true
        }) // 获取录音文件
        console.log('wav', wav)
      }
    }
}
</script>
