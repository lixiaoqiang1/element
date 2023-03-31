<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in breadList"
                            :to="{path:item.path}"
                            :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    created () {
        this.getBreadcrumb()
    },
    data () {
        return {
            breadList: []
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb () {
            console.log('this.$route.matched------------------')
            console.log(this.$route.matched)
            let matched = this.$route.matched.filter(item => item.name)
            console.log(matched)
            this.breadList = matched
        }
    }
}
</script>