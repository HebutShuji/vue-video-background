<style lang="less" scoped>

</style>
<style>
	.el-header-1, .el-footer-1{
		background-color : #409dfe;
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
		<el-header style="text-align: right; font-size: 18px">
			<v-header  title="首页" style="background: #409dfe">
				<router-link slot="left" to="/index">首页</router-link>
				<router-link slot="right" to="/signout">退出</router-link>
			</v-header>
			<div style="padding: 50px;">{{user.name}}登录成功</div>


		</el-header>

		<el-container class="el-aside-1">
			<el-aside class="el-aside-1" style="background-color: rgb(75,218,255)">
				<el-menu :default-openeds="['1']"  class="el-aside-1">
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>表单功能</template>
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
							<el-menu-item index="2-3">选</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="2-4">
							<template slot="title">选4</template>
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
                        <el-badge :value="currentPage" :max="99"  class="item"><el-dropdown-item @click="chakan">新消息</el-dropdown-item></el-badge>

						<el-dropdown-item @click="addstudentForm=true">新增</el-dropdown-item>
						<el-dropdown-item>删除</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-table hid-on-dingle-page stripe
                          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border
                          style="width: 100%;"
                          default-sort="{prop: 'name',order:'descending'}" >
					<el-table-column prop="name" label="姓名" min-width= 10% >
					</el-table-column>
					<el-table-column prop="date" label="日期" min-width= 10%>
					</el-table-column>
					<el-table-column prop="address" label="地址" min-width= 30%>
					</el-table-column>
					<el-table-column label="操作" min-width="6%" >
						<template scope="scope" >
							<el-button type="primary" size="small" @click="studentEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button type="danger" size="small" @click="studentDelete(scope.row)">删除</el-button>
						</template>
					</el-table-column>
			</el-table>
                <el-pagination
                        @size-change="size_change"
                        @current-change="current_change"
                        @table-pagination-change="getTablePagination"
                        :page-size="pagesize"
                        :page-sizes="pagesizes"
                        :total = "total"
                        background
                        layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
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
        props:{
            resetPageSize:{
                type:Boolean,
                default : false
            },
            dataTotal:{
                type : [String, Number],
                default:0
            },
            tableBegin: {
                type : Array,
                default(){
                    return []
                }
            },
            pageSizes:{
                type :Array,
                default(){
                    return [2,4,9,15]
                }
            }

        },

        name:"home",
        data(){
            return {
                total : 100,
                pagesize : 9,
                pagesizes :[2,4,9,15],
                currentPage : 1,
                istag : true,
                input:"",
                input21 : "",

                tableData:[{
                    date: '2020/5/14',
					name :'dd小sdfg明2',
					address :'52345浦东123123新区'
				},{
                    date: '2020/5/14',
                    name :'ff小明233',
                    address :'22浦342东123新区'
                },{
                    date: '2020/5/14',
                    name :'asdf小明124',
                    address :'浦东123新区'
                },{
                    date: '2020/5/14',
                    name :'asdf小明134',
                    address :'浦东12312414新区'
                },{
                    date: '2020/5/14',
                    name :'小dsfg明33',
                    address :'浦东2314新区'
                },{
                    date: '2020/5/14',
                    name :'w2小明44',
                    address :'1324浦东新区'
                },{
                    date: '2020/5/14',
                    name :'324小明',
                    address :'浦314东新区'
                },{
                    date: '2020/5/14',
                    name :'adf小f明f55',
                    address :'23142345浦东新区'
                },{
                    date: '2020/5/14',
                    name :'asdf小sdfg明125',
                    address :'555浦东新区'
                },{
                    date: '2020/5/14',
                    name :'ff小sdfg明15',
                    address :'浦3215东新sfdg区'
                },{
                    date: '2020/5/14',
                    name :'ad小明214525',
                    address :'1235浦东sfg新区'
                },{
                    date: '2020/5/14',
                    name :'sd小明2555',
                    address :'sdsddd浦sd东sfg新区'
                },{
                    date: '2020/5/14',
                    name :'adcv小明3415',
                    address :'浦sfdg东新sdfg区'
                },{
                    date: '2020/5/14',
                    name :'cvr小明1345',
                    address :'浦sfg东sfdg新sfdg区'
                },{
                    date: '2020/5/14',
                    name :'asdf小明1345',
                    address :'浦gsfdgsf东sfg新区'
                },{
                    date: '2020/5/14',
                    name :'4ff小明145',
                    address :'浦ggg东dfsgs新区'
                },{
                    date: '2020/5/14',
                    name :'f34f2小明dsfg',
                    address :'浦sfdgsdfg东新区'
                },{
                    date: '2020/5/14',
                    name :'ff小明sfdg',
                    address :'浦东新sfdgsdf区'
                },],


				addstudentForm: false,
				editstudentForm:false,
				// page:{
                 //    pageSize : 10,
				// 	totalRecords : 0,
				// 	totalPages : 0,
				// 	pageNum : 0
				// },

                dateinput : '',
                searchinput:'',

			};
		},



        computed: mapState({ user: state => state.user }),

        watch :{
            tableBegin:{
                immediate : true,
                handler(){
                    this.resetSize()
                    this.updataData()
                }
            },

            resetPageSize:{
                immediate:false,
                handler(){
                    this.resetSize()
                }
            },
        },

		methods:{
            tableRowClassName({row,rowIndex}){
                if(rowIndex === 0){
                    return 'th';
                }
                return'';
            },
            switchChange(){
                this.istag = !this.istag ;
            },
            current_change:function(currentPage){
              this.currentPage = currentPage;
            },
            size_change(){
                this.resetSize()
                this.pagesize = val
                this.updateData()
            },
            updataData(){
                const begin = (this.currentPage - 1) * this.pageSize
                const end = this.currentPage * this.pagesize
                const tableData = this.tableBegin.slice(begin, end)

            },

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
		},

		created:function () {
            this.total = this.tableData.length;
        },


        getTablePagination(data, currentpage, pagesize){
            this.tableData = data
            this.currentPage = currentpage
            this.pagesize = pagesize
        },


    };
</script>
