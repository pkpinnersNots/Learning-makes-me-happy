<template>
    <div class="home">
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item :icon="item.icon" v-for="(item,index) in tabs" :key="index" @click="goPath(item)">{{item.title}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
    name: 'Home',
    data () {
        return {
            active: 0,
            tabs: [
                {title: '书架', icon: 'home-o', path: { name: 'x-bookcase'}, active : 0 },
                {title: '精选', icon: 'search', path: { name: 'x-select'}, active : 1 },
                {title: '排行', icon: 'friends-o', path: { name: 'x-ranking', active : 2 }},
                {title: '分类', icon: 'setting-o', path: { name: 'x-classification', active : 3 }}
            ]
        }
    },
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    methods: {
        goPath(item) {
            this.$router.push(item.path)
        }
    }
}
</script>
<style scoped>

</style>
