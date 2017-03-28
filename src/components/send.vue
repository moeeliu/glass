<template>
	<el-row class="content">
		<el-col>
			<span class="wrapper">
				<el-button @click="showBar">扫条码</el-button>
				<el-button @click="main">扫IC</el-button>
			</span>
			<div >
				<p>扫描获得的条码：</p>
				<p class="barcode">{{bar}}</p>
			    <p>退片理由：</p>
			    <span class="wrapper">
				    <el-button 
				    	v-for="(reason,index) in reasons" 
				    	:class="{'color':flag==index}" 
				    	@click="check(index)">
				    	{{reason}}{{index}}
				    </el-button>
			    </span>  
			</div>
			
		</el-col>
	</el-row>
	
</template>
<script>
export default{
	data(){
		return{
			reasons:['理由','理由','理由'],
			bar:'',
			flag:-1
		}
	},
	methods:{
		check(index){
			this.flag=index;
		},
		showBar(){
			this.bar = 'XX-XX';
		},
		main(){
			if(this.flag !== -1 && this.bar != ''){
				this.$router.push('/');
			}
		}
	}
}
</script>
<style type="text/css" scoped>
    .content{
    	padding: 16px;
    }
	.content p{
		text-align:left;
	}
	.content .barcode{
		text-align: center;
		padding: 20px;
		font-size: 30px;
		color: #13CE66;
	}
	.color{
		background: #c9e5f5;
	}
</style>