<template>
  <div>
    <h1>{{ msg }}</h1><hr>
    <h3>{{ $store.state.count }}-{{count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        msg:'hello vuex'
      };
    },
    computed:mapState(['count']),
    store
  };
</script>