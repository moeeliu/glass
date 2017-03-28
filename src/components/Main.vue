<template>
	<el-row class="content">
		<el-row type="flex" class="row-bg" justify="space-around">
		    <el-col :span="6" ><img src="../assets/待接收订单.png" class="btn" @click="accept"><p>接收</p></el-col>
		    <el-col :span="6" ><img src="../assets/反馈.png" class="btn" @click="feedback"><p>反馈</p></el-col>
		    <el-col :span="6" ><img src="../assets/上架.png" class="btn" @click="shelves"><p>并架</p></el-col>
	    </el-row>
	    <el-row type="flex" class="row-bg" justify="space-around">
	    	<el-col :span="6" ><img src="../assets/补打.png" class="btn" @click="patch"><p>补片</p></el-col>
	    	<el-col :span="6" ><img src="../assets/定位.png" class="btn" @click="position"><p>定位</p></el-col>
	    	<el-col :span="6" ><img src="../assets/退.png" class="btn" @click="send"><p>退片</p></el-col>
	    </el-row>
	    <el-row type="flex" class="row-bg" justify="space-around">
	    	<el-col :span="6" ><img src="../assets/发货.png" class="btn" @click="ship"><p>发货</p></el-col>
	    	<el-col :span="6" ><img src="../assets/领用.png" class="btn" ><p>原片领用</p></el-col>
	    	<el-col :span="6" ><img src="../assets/退库.png" class="btn" ><p>原片退库</p></el-col>
	    </el-row>
	</el-row>
	
	
</template>
<script>
	export default{
		methods:{
			accept(){
				this.$router.push('/accept');
			},
			feedback(){
				this.$router.push('/feedback');
			},
			shelves(){
				this.$router.push('/shelves');
			},
			patch(){
				this.$router.push('/patch');
			},
			position(){
				this.$router.push('/position');
			},
			send(){
				this.$router.push('/send');
			},
			ship(){
				this.$router.push('/ship');
			}
		}
	}
</script>
<style scoped>
    .content{
    	padding: 16px;
    	/*height: 100vh;*/
    }
	.btn{
		width: 20vw;
		height: 10vh;
		padding:10px;
		box-sizing: border-box;
	}
	.row-bg{
		padding: 30px 0;
	}
	.row-bg p{
		font-size: 20px;
		margin: 0;
		font-weight: bold;
	}
</style>