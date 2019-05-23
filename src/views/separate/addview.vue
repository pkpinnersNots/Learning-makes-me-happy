<template>
    <div class="add" @click="add">
        <img src="../../assets/add.png" class="auto-img">
        <span>添加你喜欢的小说</span>
    </div>
</template>
<script>
export default {
methods: {
    add() {
        this.$router.push({name: 'x-select'})
    }
}    
}
</script>
<style scoped>
.add{
    width: 8.25rem;
    position: relative;
    margin: 12.5rem auto;
    cursor: pointer;
}
.add span{
    font:12px/1 Tahoma,Helvetica,Arial,\\5B8B\4F53,sans-serif;
    color: #999;
    text-align: center;
    display: flow-root;
}
</style>
