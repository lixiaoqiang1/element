import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:5,
    userData: {
        name:'姓名',
        age:'年龄'
    },
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
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


