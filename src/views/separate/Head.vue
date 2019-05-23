<template>
    <div class="header">
        <span>我的书架</span>
        <img src="../../assets/Set.png" class="auto-img" @click="onlift">
    </div>
</template>
<script>
export default {
    name: 'Head',
    methods: {
        onlift(){
            this.$router.push({name: 'd-login'})
        }
    }
}
</script>
<style scoped>
.header{
    height: 100%;
    position: relative;
}
.header span{
    line-height: 3.125rem;
    color: white;
    font-size: 30px;
    padding-left: 20px;
    font-family: 'Courier New', Courier, monospace;
}
.header img{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    top: 13px;
}
</style>
