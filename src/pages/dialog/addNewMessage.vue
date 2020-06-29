<template>
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
</template>

<script>
    export default {
        name: "addNewMessage",
    }
</script>

<style scoped>

</style>