
<template>
	<el-row class="content">
		<el-row type="flex" class="nav" justify="end">
			<el-col><el-button @click="add">扫序列</el-button></el-col>
			<el-col><el-button @click="main">扫IC</el-button></el-col>
		</el-row>
		<el-table
			:data ="table"
			style="width: 100vw;text-align: left;"
			:row-style="tableRowStyle">
			<el-table-column
				prop="id"
				label="入库单号"
				width="133"></el-table-column>
			<el-table-column
				prop="name"
				label="库位名称"
				width="140"></el-table-column>
			<el-table-column
				prop="number"
				label="数量"
				width="70"></el-table-column>
		</el-table>
	</el-row>
</template>

<script>
export default{
	data(){
		return{
			table:[
			{
				id:'1-B',
				name:'XX-XX',
				number:5
			},
			{
				id:'1-B',
				name:'XX-XX',
				number:5
			},
			{
				id:'1-B',
				name:'XX-XX',
				number:5
			},
			{
				id:'1-B',
				name:'XX-XX',
				number:5
			},
			{
				id:'1-B',
				name:'XX-XX',
				number:5
			}],
			count:-1
		}
	},
	methods:{
		main(){
			if(this.count === this.table.length-1){
				this.$router.push('/');
			}
			
		},
		add(){
			if(this.count <= this.table.length-2){
				this.count++;
			}
			    
		},
		tableRowStyle(row, index){
			if(index <= this.count){
				return {background:"#c9e5f5"};
			}
			return '';
		}
	}
}
</script>
<style scoped>
	.el-table .a-row{
		background-color: #2C3E50;
	}
	.nav{
		margin: 20px 0;
	}
</style>