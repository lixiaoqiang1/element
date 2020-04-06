<template>
  <div class="list1">
    <h3>{{count}}</h3>
    <div class="headertab">
  <div class="tab">
     <a href="#1">基本信息</a>
     <a href="#2">使用状态</a>
     <a href="#3">位置信息</a>
  </div>
</div>
 
<div class="scrollview">
      <div class="contentview">
        <!-- 第一部分 -->
        <div class="infocontent" id="1">
          <div class="information">
            <div class="informationtap">
              <p>基本信息</p>
            </div>
          </div>
          <div class="informationdetail">
            <div class="infodetail">
              <table>
                <tr>
                  <td>设备编号</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <!-- 第二部分 -->
        <div class="infocontent"  id="2">
          <div class="information">
            <div class="informationtap">
              <p>使用状态</p>
            </div>
          </div>
          <div class="usingstate">
            <div class="statetable">
              <table>
                <tr>
                  <td>使用状态</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <!-- 第三部分 -->
        <div class="infocontent"  id="3">
          <div class="information">
            <div class="informationtap">
              <p>位置信息</p>
            </div>
          </div>
          <div class="locationinfo">
            <div class="locationdetail">
              <table>
                <tr>
                  <td>街区编码</td>
                  
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
       
      };
    },
    methods: {
       
    },
    computed:{
      count(){
        return this.$store.state.count 
      }
    },
    store
  };
</script>
<style>
 .infocontent{
   width: 100%;height: 600px;list-style: none;border-bottom: 1px #ddd solid;
 }
</style>