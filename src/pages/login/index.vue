<style lang="less" scoped>
	.login {
		padding: 0px;
		text-align: right;
		min-width: 100%;
		position: relative;
		.line {
			padding: 10px;
			input {
				padding: 0px 10px;
				line-height: 28px;
				min-width: 20px;
			}
		}
		button {
			padding: 20px 20px;
			margin-top: 20px;
			line-height: 2px;
		}
	}
	.el-aside{
		line-height: 100%;
	}


</style>

<template>
		<!--<v-header title="登录">-->
			<!--<router-link slot="left" to="/">返回</router-link>-->
		<!--</v-header>-->
	<body>
	<div>
		<div class="homepage-hero-module" >
			<div  class="video-wrap" >
				<div  class="filter" :style="fixStyle "   >
				</div>

				<video class="fillWidth" :style="fixStyle " autoplay loop muted  v-on:canplay="canPlay">
					<source src="

https://storage.coverr.co/videos/zbZFeabnLDigXMQLL63JOLkhz3N9Xev7?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTkxOTQ3MTU2fQ.8i2LtYy6qqWFS3SfvvFbrMquaGaSy9ljmutpmJXM0NE

" poster="https://storage.coverr.co/p/zbZFeabnLDigXMQLL63JOLkhz3N9Xev7" type="video/mp4"/>
				</video>
				<!--https://stream.mux.com/c2XWbhW4tyRvSa39IFvS9Z45SjY3ozvb/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE1OTAwMjExNTIsImF1ZCI6InYiLCJzdWIiOiJjMlhXYmhXNHR5UnZTYTM5SUZ2UzlaNDVTalkzb3p2YiJ9.bviArVjO1DUOLSHTRXKU-0b0L6VqccqGb8XjnFOVDoQow_sxk5ITIq9b6IflJCr8mmneeuQkxQeQ1tfSK-n7x_daqIv738hnAouhNbReZbywtUMN53KYOA58H-3BjzRM-8250V_T4tkCmtH7E4UES69MR25piNShCmzQ8jI7T5c42K9AIkJEnkhZjT_HbP39JgAG9VceCqcInymu2y2uvSS5tmA4qAoMPNhIdiRsMovEYRznZ144DSw2CaEm2rV7QXj7T59obkN87asjnCh6WuGT3UV4M3VmE2YwAqtLonFNbBxP3doSJ2NDeCP6SYbpzPefO1RwPn5p6mW2w28WbA-->
				<!--https://storage.coverr.co/videos/7OSSvgSzoAeA8brTNuTnbq02mqVwX5gO8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg5ODc2ODc3fQ.m_4PgK-wisCiQPJfv7uHbTUWe31x_NPgedIJiNlE5kA-->

				<!--有效操作-->
				<!--<app-video _ngcontent-coverr-redesign-c11="" id="app-hero-video" _nghost-coverr-redesign-c20="" class="ng-star-inserted">&lt;!&ndash;&ndash;&gt;<video _ngcontent-coverr-redesign-c20="" playsinline="" autoplay="" muted="" loop="" src="https://stream.mux.com/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE1ODk1OTI5NjAsImF1ZCI6InYiLCJzdWIiOiJsY0dtNTlFMDBxNXV6RFVpRFA1V0hnUHZaUVZWdzAyQkIzIn0.uWBmYhGgOMPUYz-5XfNHcOuPIJl1kTTGYZgNmtN4mJyjELvSdwEOo0_LH9xGGCvJJ_yL-GHFCYJYoPoUVLhYQpwyir0mY-RcXFy2oqlCIEZm8XwR8ICi9uwSTMeBR-O7u0NWWnyOJIiqmnV7mNQdXtdW8G5zlWCjJpLLAyKV83uHUaSEiuu7tT7kdUQhcvg0ITtMONQ9ZvH8EyCSz4ZHua3emRhcHKichRj7d146ryxyHKnIGYEmEQZrT6OiUUpwsU8bY5OuZIH9u4oAhLZtVecJvAf08JONMFNvdy3nz5gYK5ST-pB3gmYR8VdBXg54qaK923gawNFa23Ah9821ag" poster="https://storage.coverr.co/p/lcGm59E00q5uzDUiDP5WHgPvZQVVw02BB3" class="ng-star-inserted">-->
				<!--</video>-->
				<!--</app-video>&ndash;&gt;-->
			</div>
				<div class="poster">
					<span class="h1s">Welcome</span>
				</div>
		</div>
	<el-container style="min-height: 100%; " >
		<el-aside style="min-width: 75%; min-height: 100%;;">
		</el-aside>
			<el-container>
				<el-header >
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="1">处理中心</el-menu-item>
						<el-submenu index="2">
							<template slot="title">我的工作台</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="3" disabled>消息中心</el-menu-item>
						<el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
					</el-menu>
				</el-header>
				<el-main style="rgba(0,0,0,1);">
						<el-form class="login" v-on:submit.prevent="submit">
							<div class="line">
								<div  v-show="btn && !form.id">id不能为空</div>
								<el-input  type="number" placeholder="输入你的id" v-model="form.id"></el-input>
							</div>
							<div class="line">
								<div v-show="btn && !form.name">用户名不能为空</div>
								<!-- <input type="text" placeholder="输入你的用户名" v-model="form.name"> -->
								<el-input placeholder="请输入你的用户名" v-model="form.name" clearable="true"></el-input>
							</div>
							<div class="line">
								<div v-show="btn && !form.description">描述不能为空</div>
								<el-input type="textarea" placeholder="请输入描述文本" v-model="form.description" clearable="true" autosize ></el-input>

							</div>
							<div class="line">
								<!-- @click+$router.go(0)shuxin 刷新操作 -->
								<el-button  @click="$router.go(0)"  icon="el-icon-refresh" circle type="primary" ></el-button>
								<el-button  type="primary" v-on:click="submit" >登录</el-button>

							</div>
							<!-- <el-button  type="success" icon="el-icon-check"></el-button> -->
							<!-- <button>denglu</button> -->
						</el-form>
				</el-main>
				<el-footer >
				</el-footer>
			</el-container>
		</el-container>
	</div>
	</body>
</template>


<style  scoped>
	.video{
	width: 100%;
	height: 100%;
	min-width: 100%;
	min-height: 100%;
	object-fit: cover;
	}

	.homepage-hero-module,
	.video-container {
		position: relative;
		height: 100vh;
		overflow: hidden;
		z-index: 0;
	}
	.video-wrap{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 3;
	opacity: 1;
	overflow: hidden;
	}

	.video-container .poster img,
	.video-container video {
		z-index: 0;
		position: absolute;
	}

	.filter{
		z-index: 1;
		position: absolute;
		background: rgba(110, 110, 110, 0);
	}
	.video-container .filter {
		z-index: 1;
		position: absolute;
		background: rgba(0, 0, 0, 0.4);
	}
	.h1s{
		font-size: 32px;
		margin-top: 50%;
		margin-bottom: 48px;
		font-weight: 300;
		color: #FFF;
		position: absolute;
		height: 100%;
		justify-content: center;
		z-index: 50;
		align-items: center;
		font-family: "Arial";
		margin-block-start: 25%;
		margin-block-end: 45%;
		margin-inline-start: 35%;
		margin-inline-end: 50%;
		font-size: 80px;


	}

</style>

<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from 'store/user'

    export default {

        data() {
			return {
			    active: 0,
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					name: ''
				},
				vedioCanPlay: false,
				fixStyle: ''
		}
    },
		methods: {
            submit() {
                this.btn = true
                if(!this.form.id || !this.form.name) return
                this.USER_SIGNIN(this.form)
                this.$router.replace({ path: '/home' })
            },
            ...mapActions([USER_SIGNIN]),

			canPlay(){
                this.vdioCanPlay = true
			},

		},
		mounted:function () {
            window.onresize = () =>{
                const windowWidth = document.body.clientWidth
				const windowHeight = document.body.clientHeight
				const windowAspectRatio = windowHeight / windowWidth

				let videoWidth
				let videoHeight
				if(windowAspectRatio < 0.5625){
                    videoWidth = windowWidth
					videoHeight = videoWidth * 0.5625
					this.fixStyle = {
                        height: windowWidth *0.5625 + 'px',
						width: windowWidth +'px',
						'margin-bottom': (windowHeight - videoHeight) / 2 +'px',
						'margin-left' : 'initial'
					}
				}else {
                    videoHeight = windowHeight
					videoWidth = videoHeight / 0.5625
					this.fixStyle = {
                        height: windowHeight +'px',
						width: windowHeight / 0.5625 +'px',
						"margin-left" : (windowWidth - videoWidth) /2 +'px',
						"margin-bottom" : 'initial'
					}
				}
			}
			window.onresize()
        },

    }
</script>