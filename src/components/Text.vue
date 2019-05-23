<template>
    <div class="text">
        <h2>测试页面</h2>
    </div>
</template>
<script>
export default {
    name: 'x-Text',
    created () {
        var url = 'http://vip.zhuishushenqi.com/chapter/5c41b9b9d9e46536ee8fe147?cv=1547811257147'
        let xml = '/chapter/' + url
        console.log("xml为--》",xml)
        this.$axios.get(xml).then( res =>{
            console.log("xml==>",res.data)
        })
    }
}
</script>
<style scoped>

</style>
