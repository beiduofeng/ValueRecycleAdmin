<template>
    <div class="header">
        <span class="span=left">{{ userId }}</span>
        <span class="span-right">账号</span>
    </div>
</template>

<script lang="js" setup>
const userId = window.userId

</script>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    background-color: lightblue;
}

span {
    height: 40px;
    width: 60px;
    /* background-color: azure; */
    float: right;
    margin-top: 15px;
}
</style>