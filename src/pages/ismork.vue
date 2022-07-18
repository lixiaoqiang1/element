<template>
	<div>
		mork
	</div>
</template>
<script>
export default {
    name: 'ismork',
    mounted() {
        this.delGroup()
    },
    data() {
        return {
        
        }
    },
    methods: {
      delGroup() {
        this.axios.post('/api/data11', {
          params: {
          ID:''
          }
        })
        .then(function (res) {
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
			
      },
    }
}
</script>