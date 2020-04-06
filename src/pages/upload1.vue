<template>
  <div>
    <ul>
      <li v-for="(item,index) in array" :key="index">
        <p>{{item.aa1}}</p>
        <p>{{item.aa2}}</p>
        <div v-for="(item2,index) in item.content" :key="index">
          {{item2.sourcename}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        array:''
      };
    },
    mounted:function(){
      let arr = [
        {
          aa1:'11',
          aa2:'22',
          content:[{
          "sourcename": "ko",
          "datadesc": "",
          "sourcetime": "2020-03-27 17:13:15",
          "realchatname": "wxid_73d1y9no18t722"
          }, {
          "sourcename": "ko",
          "datadesc": "@峰 ",
          "sourcetime": "2020-03-27 17:20:29",
          "realchatname": "wxid_73d1y9no18t722"
          }, {
          "sourcename": "峰",
          "datadesc": "稍等下",
          "sourcetime": "2020-03-27 17:22:19",
          "realchatname": "wxid_7u6a42up41to52"
          }]
        }
      ]
      this.array = arr
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>