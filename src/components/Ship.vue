<template>
	<el-row class="content">
		<el-row type="flex" class="row-bg" justify="space-around">
			<template v-for="people in list">
				<el-col :span="8"><el-button class="btn" @click="shipDo">{{people}}</el-button></el-col>
			</template>
		    
		    
	    </el-row>
	</el-row>
</template>
</template>
<script>
	export default{
		data(){
			return{
				list:['司机1','司机2','司机3','司机4','司机5','司机6']
			};
		},
		methods:{
			shipDo(){
				this.$router.push('/ship/do');
			}
		}
	}
</script>
<style scoped>
    .content{
    	padding: 16px;
    }
	.btn{
		width: 20vw;
		height: 10vh;
		font-size: 16px;
		margin: 20px 0;
		box-sizing: border-box;
	}
	.row-bg{
		flex-wrap: wrap;
	}
</style>