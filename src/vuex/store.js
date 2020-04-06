import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:5,
    counts:{
        a1:221,
        a2:'張三'
    },
    name1:'我是李晓强',
    userData: {}
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    },
    btn1(state){
        console.log(state.name1)
    },
    setValue(state,e){
        console.log(e)
        state.userData = e;
    }
}
const getters={
    count:function(state){
        return state.count+=100
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})


