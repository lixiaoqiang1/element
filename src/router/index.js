import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import daohang from '@/pages/daohang'
import isprops from '@/pages/isprops'
import isprops2 from '@/pages/isprops2'
import table1 from '@/pages/table1'
import table2 from '@/pages/table2'
import table3 from '@/pages/table3'
import Pagination from '@/pages/Pagination'
import Pagination2 from '@/pages/Pagination2'
import Pagination3 from '@/pages/Pagination3'
import upload1 from '@/pages/upload1'
import upload2 from '@/pages/upload2'
import upload3 from '@/pages/upload3'
import diancan from '@/pages/diancan'
import anli1 from '@/pages/anli1'
import kehumy from '@/pages/kehumy'
import kehuyou from '@/pages/kehuyou'
import vuex1 from '@/pages/vuex1'
import vuex3 from '@/pages/vuex3'
import countpage2 from '@/pages/countpage2'
import vuex4 from '@/pages/vuex4'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path: '/index',name: 'index',component: index},
        {path: '/daohang',name: 'daohang',component: daohang},
        {path: '/isprops',name: 'isprops',component: isprops},
        {path: '/isprops2',name: 'isprops2',component: isprops2},
        {path: '/table1',name: 'table1',component: table1},
        {path: '/table2',name: 'table2',component: table2},
        {path: '/table3',name: 'table3',component: table3},
        {path: '/Pagination',name: 'Pagination',component: Pagination},
        {path: '/Pagination2',name: 'Pagination2',component: Pagination2},
        {path: '/Pagination3',name: 'Pagination3',component: Pagination3},
        {path: '/kehumy',name: 'kehumy',component: kehumy},
        {path: '/kehuyou',name: 'kehuyou',component: kehuyou},
        {path: '/upload1',name: 'upload1',component: upload1},
        {path: '/upload2',name: 'upload2',component: upload2},
        {path: '/upload3',name: 'upload3',component: upload3},
        {path: '/diancan',name: 'diancan',component: diancan},
        {path: '/anli1',name: 'anli1',component: anli1},
        {path: '/vuex1',name: 'vuex1',component: vuex1},
        {path: '/vuex3',name: 'vuex3',component: vuex3},
        {path: '/vuex4',name: 'vuex4',component: vuex4},
        {path: '/countpage2',name: 'countpage2',component: countpage2},
        {path: '*',name: 'Error', component: Error,}
      ]
    }
  ]
})
