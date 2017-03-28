<template>
	<el-row class="content">
		<el-col>
			<span class="wrapper">
				<el-button @click="showBar">扫条码</el-button>
				<el-button @click="showWarehouse">扫仓位</el-button>
				<el-button @click="main">扫IC</el-button>
			</span>
			<div >
				<p>该玻璃需要移动到的架位：</p>
				<p class="text">{{bar}}</p>
			    <p>该玻璃已经摆放的架位：</p>
			    <p class="text">{{warehouse}}</p>
			    <p>员工IC卡号：</p>
			    <p class="text">{{ic}}</p>
			</div>
		</el-col>
	</el-row>
</template>
<script>
export default{
	data(){
		return{
			bar:'',
		    warehouse:'',
		    ic:''
		}
		
	},
	methods:{
		main(){
			this.ic = 'XXXXXX';
			this.$router.push('/');
		},
		showBar(){
			this.bar = 'XX-XX';
		},
		showWarehouse(){
			this.warehouse = 'XX-XX';
		}
	}
}
</script>
<style scoped>
    .content{
    	padding: 16px;
    }
	.content p{
		text-align:left;
	}
	.content .text{
		text-align: center;
		padding: 40px;
		font-size: 30px;
		color: #13CE66;
	}
</style>