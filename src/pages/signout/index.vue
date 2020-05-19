<style lang="less" scoped>
	.btn {
		padding: 100px;
		text-align: center;
		button {
			padding: 20px 30px;
		}
	}
	.fond {
		position:absolute;
		padding-top:85px;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color:#00506b;
	}
	.style_prevu_kit {
		display:inline-block;
		border:0;
		width:196px;
		height:210px;
		position:relative;
		-webkit-transition:all 200ms ease-in;
		-webkit-transform:scale(1);
		-ms-transition:all 200ms ease-in;
		-ms-transform:scale(1);
		-moz-transition:all 200ms ease-in;
		-moz-transform:scale(1);
		transition:all 200ms ease-in;
		transform:scale(1);
	}
	.style_prevu_kit:hover {
		box-shadow:0px 0px 150px #000000;
		z-index:2;
		-webkit-transition:all 200ms ease-in;
		-webkit-transform:scale(1.5);
		-ms-transition:all 200ms ease-in;
		-ms-transform:scale(1.5);
		-moz-transition:all 200ms ease-in;
		-moz-transform:scale(1.5);
		transition:all 200ms ease-in;
		transform:scale(1.5);
	}

</style>
<template>
	<div>
		<v-header title="退出">
			<router-link slot="left" to="/home">返回</router-link>
			<div ></div>
		</v-header>

		<link href='https://fonts.googleapis.com/css?family=Roboto:100,400,300,500,700' rel='stylesheet' type='text/css'>

		<div align="center" class="fond">
			<div style="width:1000px;">
				<div class="style_prevu_kit" style="background-color:#4bbfcb;"></div>
				<div class="style_prevu_kit" style="background-color:#42a8b3;"></div>
				<div class="style_prevu_kit" style="background-color:#33bfab;"></div>
				<div class="style_prevu_kit" style="background-color:#26a076;"></div>
				<div class="style_prevu_kit" style="background-color:#23a844;"></div>
				<div class="btn">
					<el-button v-on:click="submit" @click="openMessageBox">exit</el-button>
				</div>

			</div>
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
