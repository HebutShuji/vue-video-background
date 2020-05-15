<style lang="less" scoped>
	.login-msg {
		padding: 50px;
		text-align: center;
	}
	.msg {
		padding: 50px;
		text-align: center;
		font-size: 20px;
		color: red;
	}
</style>
<template>
	<div>
		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<router-link to="/login">你还未登录，请先登录</router-link>
			
		</div>
	
		
		<div class="login-msg" v-if="!user.id">
			<div><el-button type="danger" @click="$router.go(-1)" >返回</el-button></div>
			<el-button @click="$router.go(0)" type="primary">刷新</el-button>
			<el-collapse v-model="activeName" accordion>
				<el-collapse-item title="标签1 title1" name="1">
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签2 title2" name="2">
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签3 title3" name="3">
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签4 title4" name="4">
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容v</div>
					<div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容v</div>
				</el-collapse-item>
			</el-collapse>
		</div>
		<div class="msg" v-if="user.id">
			 <br>
			登录成功 进入vue
		</div>

		
		
		
		
		
	</div>
</template>
<script>
    import { mapState } from 'vuex'
	import logo from './logo.png'
    export default {
	
		data() {
			return {
				activeName: '1',
			}
		},
		computed: mapState({ user: state => state.user }),
    }
</script>