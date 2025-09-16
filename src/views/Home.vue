<script lang='ts' setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()

const getImageUrl = (user: string): string => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const tableData = ref([

])

const countData = ref([])
console.log(countData.value);

const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})

const getTableData = async () => {
    const data = await proxy.$api.getTableData()
    tableData.value = data.tableData
}
const getCountData = async () => {
    const data = await proxy.$api.getCountData()
    console.log(data);
    
    countData.value = data
    console.log(countData.value);
    
}
onMounted(() => {
    getTableData()
    getCountData()
})

</script>
<template>
    <el-row class="home" gutters="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">

                <div class="user">
                    <img :src="getImageUrl('user')" class="user" />
                    <div class="user-info">
                        <p class="user-info-admin">Admin</p>
                        <p class="user-info-p">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2025-9-15</span></p>
                    <p>上次登录地点：<span>浙江</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" class="user-table">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key"
                        :label="val"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <!-- <el-col :span="16" style="margin-top: 20px;">
            <div class="num">
                <el-card
                :body-style="{display:'flex',padding:0}"
                v-for="item in countData" :key="item.name"
                >
                <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
                </el-card>
                <div class="detail">
                    <p class="num">￥{{ item.value  }}</p>
                    <p class="txt">￥{{ item.name  }}</p>
                </div>
            </div>
        </el-col> -->
    </el-row>
</template>
<style scoped lang="less">
.home {
    height: 100%;
    overflow: hidden;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }

        .user-info-admin {
            font-size: 35px
        }

        .user-info-p {
            color: #999;
        }
    }

    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;

            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card{
            width: 32%;
            margin-bottom: 20px;
        }
        .icons{
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detail{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num{
                font-size: 30px;
                margin-bottom: 10px;
            }
            .tex{
                font-size: 15px;
                text-align: center;
                color: #999;
            }
        }
    }
}
</style>