<template>
	<el-row>
		<el-col>
			<el-button class="btn" @click="patch">补片</el-button>
			<span class="wrapper btn-group">
				<el-button @click="addbar">扫条码</el-button>
				<el-button @click="addmessage">并架</el-button>
				<el-button @click="main">扫IC</el-button>
			</span>
			<el-table
				:data="barTable"
				style="width: 100vw;text-align: left;">
				<el-table-column
				    prop="bar"
				    label="条目"
				    width="110">
				</el-table-column>
				<el-table-column
				    prop="barw"
				    label="宽度"
				    width="80">
				</el-table-column>
				<el-table-column
				    prop="barh"
				    label="高度"
				    width="80">
				</el-table-column>
				<el-table-column
					prop="number"
					label="数量"
					width="72">
				</el-table-column>
			</el-table>
		</el-col>
	</el-row>
</template>
<script>
export default{
	data(){
		return{
			barTable:[],
			obj:{
				bar:'1-B',
				barw:1000.0,
				barh:1000.0,
				number:5
			}
		}
	},
	methods:{
		patch(){
			this.$router.push('/patch');
		},
		main(){
			this.$router.push('/');
		},
		addbar(){
			this.barTable.push(this.obj);
		},
		addmessage(){
//			this.$alert('该玻璃需要并架到XX-XX','玻璃并架',{
//				confirmButtonText:'确定',
//				callback:action=>{
//					this.barTable.push(this.obj);
//				}
//			});
            this.$notify({
            	title:'玻璃并架',
            	message:'该玻璃需要并架到XX-XX',
            	duration:0,
            	onClose:action=>{
					this.barTable.push(this.obj);
				}
            });
		}
	}
}
</script>
<style scoped>
	.btn{
		width: 20vw;
		float: left;
		margin: 10px;
	}
	.btn-group{
		margin: 10px 0;
		display: inline-block;
	}
</style>