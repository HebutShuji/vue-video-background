<style lang="less" scoped>

</style>
<style>
	.el-header-1, .el-footer-1,{
		background-color : #B3C0D1;
		color: #333;
		text-align: center;
		line-height: normal;
	}
	.el-aside-1{
		min-width: 20%;
		min-height: 100%;
	}
	.container{
		height: 100%;
		border: 1px;
		solid-color: #eee;
	}

</style>
<template>
	<el-container class="container">
	<!--<el-container style="height: 500px; border: 1px solid #eee">-->
		<el-header style="text-align: right; font-size: 12px">
			<v-header title="首页">
				<router-link slot="left" to="/index">首页</router-link>
				<router-link slot="right" to="/signout">退出</router-link>
			</v-header>
			<div style="padding: 50px;">{{user.name}}登录成功</div>


		</el-header>

		<el-container class="el-aside-1">
			<el-aside class="el-aside-1" style="background-color: rgb(143,214,198)">
				<el-menu :default-openeds="['1']"  class="el-aside-1">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>导航一</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="2-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>导航三</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="3-1">选项1</el-menu-item>
							<el-menu-item index="3-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="3-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项4-1</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<div class="line" style="width: 200px;margin-bottom: 10px">
					<el-input type="date" placeholder="请选择日期" suffix-icon="el-icon-date" v-model="dateinput" style="margin-bottom: 10px"></el-input>
					<el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="searchinput"></el-input>
				</div>
				<el-button type="primary" icon="el-icon-search" >搜索</el-button>
				<el-dropdown style="margin-bottom: 20px;">
					<!--<i class="el-icon-setting" style="margin-right: 30px"></i>-->
					<el-button  type="primary" icon="el-icon-setting"></el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click="chakan">查看</el-dropdown-item>
						<el-dropdown-item @click="addstudentForm=true">新增</el-dropdown-item>
						<el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-table stripe :data="tableData" border style="width: 100%;">
					<el-table-column prop="name" label="姓名" min-width= 10% >

					</el-table-column>
					<el-table-column prop="date" label="日期" min-width= 10%>
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width= 30%>
					</el-table-column>
					<el-table-column label="操作" min-width="7%" >
						<template scope="scope" >
							<el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button type="danger" size="small" @click="studentDelete(scope.row)">删除</el-button>
						</template>
					</el-table-column>
			</el-table>
			</el-main>
		</el-container>
	</el-container>

</template>
<el-dialog title="新增信息" :visible.sync="addstudentForm" size="tiny" :modal-append-to-bady='false' @close='closeDialog'>
	<el-form id="#addsForm" ref="addsForm" :model="addsForm" label-width="80px">
		<el-form-item label="姓名" prop="name">
			<el-input v-model="addsForm.name"></el-input>
		</el-form-item>
		<el-form-item label="日期" prop="date">
			<el-input v-model="addsForm.date"></el-input>
		</el-form-item>
		<el-form-item label="地址" prop="address">
			<el-input v-model="addsForm.address"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="studentAdd()">确定</el-button>
			<el-button @click="addstudentForm = false;canceladdT('formt')">取消</el-button>
		</el-form-item>
	</el-form>
</el-dialog>
<el-dialog title="编辑信息" :visible.sync="editstudentForm" size="tiny" :modal-append-to-bady='false' @close='closeDialog'>
	<el-form id="#editsForm" ref="editsForm" :model="editsForm" label-width="80px">
		<el-form-item label="姓名" prop="name">
			<el-input v-model="editsForm.name"></el-input>
		</el-form-item>
		<el-form-item label="日期" prop="date">
			<el-input v-model="editsForm.date"></el-input>
		</el-form-item>
		<el-form-item label="地址" prop="address">
			<el-input v-model="editsForm.address"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="studentEdit()">确定</el-button>
			<el-button @click="editstudentForm = false;canceladdT('formt')">取消</el-button>
		</el-form-item>
	</el-form>
</el-dialog>

<script>
    import { mapState } from 'vuex'
    export default {
        name:"home",
        data(){
            return {
                tableData:[{
                    date: '2020/5/14',
					name :'小明',
					address :'浦东新区'
				}],
                studentData:[],
				addstudentForm: false,
				editstudentForm:false,
				page:{
                    pageSize : 10,
					totalRecords : 0,
					totalPages : 0,
					pageNum : 0
				},
                dateinput : '',
                searchinput:'',
			}
		},
        computed: mapState({ user: state => state.user }),
		methods:{


			colseDialog(){
                this.addstudentForm=false;
                this.editstudentForm=false;
			},

			studentEdit(index, row){
                this.editstudentForm = true;
                this.editForm = Object.assign({}, row);
			},
			addStudent(){
                this.addstudentForm = true;
			},

            studentAdd(){
                let studentList=this.addsForm;
                let {name,date,address} = studentList;
                if(name==''||date==''||address==''){
                    this.$message.error('新增内容每一项都不准为空')
                }else{
                    this.$http.post(Main.addStudent(),this.addsForm).then(res => {
                        let {errCode,errMsg} = res.data;
                        if(!errCode==1){
                            this.$set(this.addsForm,{});
                            this.init();   //重新渲染数据列表
                            this.addstudentForm = false;
                        }else{
                            this.$message.error(errMsg);  //弹出后台返回错误
                        }

                    }, response => {
                    });
                }
            },

            studentDelete(user){
                this.$confirm('此操作将永久删除信息 ' + user.name + ', 是否继续?', '提示', { type: 'warning' })
                    .then(() => { // 向服务端请求删除
                        this.$http.delete(Main.deleteStudent(user.id,0)).then((response) => {
                            this.$message.success('成功删除了信息' + user.name + '!');this.init()})
                            .catch((response) => {
                                this.$message.error('删除失败!');
                            });
                    }) .catch(() => {
                    this.$message.info('已取消操作!');
                });
            },

		},
		mounted(){

		}
    }
</script>
