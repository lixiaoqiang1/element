<style scoped>
.active{color: red}
</style>
<template>
    <div>
        <my-component v-for="(item, index) in items" v-bind:item="item" v-bind:index="index" :key="index">
        {{item.message}}
        </my-component>
        <div v-bind:class="{ active: isActive, 'text-danger': hasError }">111</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items: [
            { message: 'Foo' },
            { message: 'Bar' }
            ],
            isActive: true,
            hasError: false
        }
    },
    methods:{

    }
}
</script>