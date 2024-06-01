<script setup>
import { reactive, ref } from 'vue'
const ruleFormRef = ref()
import { ElMessage } from 'element-plus'
import worker from './Worker.vue'
import order from './Order.vue'
</script>

<template>
    <div class="home">
        {{ "home" }}
        <staff />
        <order />
    </div>
</template>

<style scoped></style>
