<template>
	<el-row class="content"type="flex"  justify="center">
		<el-col >
			<el-button class="btn-patch" >扫条码</el-button>
			<el-button class="btn-patch" @click="main">扫IC</el-button>
		</el-col>
	</el-row>
</template>
<script>
export default{
	name:'Patch',
	methods:{
		main(){
			this.$router.push('/');
		}
	}
}
</script>
<style scoped>
	.content{
		padding: 16px ;
		margin-top: 150px;
	}
	.btn-patch{
		width: 60vw;
		margin: 20px ;
		/*font-size:50px ;*/
	}

</style>