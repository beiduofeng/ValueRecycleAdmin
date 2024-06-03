<template>
    <el-row>
        <el-col :span="24" class="menu-panel">
            <h5 class="mb-2">GREEN BIN 管理平台</h5>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" class="el-menu-custom">
                <el-menu-item index="1">
                    <el-icon>
                        <User />
                    </el-icon>
                    <a RouterLink to="/worker"><span>员工管理</span></a>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <Document />
                    </el-icon>
                   <a RouterLink to="/order"> <span>订单管理</span></a>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="js" setup>
import {
    Document,
    User,
} from '@element-plus/icons-vue'
import {RouterView,RouterLink} from 'vue-router'
</script>

<style scoped>
.menu-panel {
    padding: 8px;
    background: #545c64;
    min-height: 600px;
}

.mb-2 {
    color: #fff
}

.el-menu-custom {
    border-right: none;
}
</style>