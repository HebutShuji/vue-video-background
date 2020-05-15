<style lang="less" scoped>
	.btn {
		padding: 100px;
		text-align: center;
		button {
			padding: 20px 30px;
		}
	}
</style>
<template>
	<div>
		<v-header title="退出">
			<router-link slot="left" to="/home">返回</router-link>
			<div ></div>
		</v-header>
		<div class="btn">
			<el-button v-on:click="submit" @click="openMessageBox">exit</el-button>
		</div>
	</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNOUT } from 'store/user'
    export default {

        methods: {
            ...mapActions([USER_SIGNOUT]),
            submit() {
                this.USER_SIGNOUT()
				this.$router.replace({ path: '/login' })
            },
			openMessageBox(){
                this.$alert('你已经成功退出')
			}
        }
    }
</script>