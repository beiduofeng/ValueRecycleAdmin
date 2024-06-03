<template>
    <el-row class="home">
        <el-col :span="3" class="left">
            <Menu />
        </el-col>
        <el-col :span="21" class="right">
            <el-row class="header">
                <Header />
            </el-row>
            <el-row class="content">
            <!-- 路由器检测到后在此展示检测到的组件内容 -->
                <RouterView></RouterView>
            </el-row>
        </el-col>
    </el-row>

</template>

<script lang="js" setup>
import Menu from './Menu.vue'
import Header from './Header.vue'
import {RouterView} from 'vue-router'
</script>

<style scoped>
.content {
    padding: 12px
}
</style>