<template>
    <div class="box">
        <div class="boxleft">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="(item,index) in tabs" :key="index" @click="onReadclick({name:'reading',query:{index:item}})">{{item.title}}</van-cell>
            </van-list>
        </div>
    </div>
</template>
<script>
import { List, Cell } from 'vant'
export default {
    name:"readcatalong",
    components: {
        [List.name]:List,
        [Cell.name]:Cell
    },
    created () {
        console.log("值",this.$route.query.index)
    }
}
</script>
<style scoped>
.boxleft{
    height: 100%;
    width: 60%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #ccc;
}
</style>
