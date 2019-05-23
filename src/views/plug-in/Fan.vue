// 同人小说
<template>
    <div class="fan">
       <van-nav-bar title="同人游戏" left-arrow @click-left="onleft" class="nav"/>
        <div class="details-box" @click="read({name:'Read',query:{index:item}})" v-for="(item,index) in tabs" :key="index">
            <div class="ig-tabs">
                <img :src="item.cover" alt="错误" class="auto-img">
            </div>
            <span class="span1">{{item.title}}</span>
            <p>{{item.shortIntro}}</p>
            <span class="span2">{{item.author}}</span>
            <div class="tag">
                <van-tag type="primary">{{item.latelyFollower}}</van-tag>
                <van-tag type="danger">{{item.minorCate}}</van-tag>
            </div>
        </div> 
    </div>
</template>
<script>
import { NavBar, Tag } from 'vant'
const str = "//statics.zhuishushenqi.com"
export default {
    name: 'Fan',
    components: {
        [NavBar.name]: NavBar,
        [Tag.name]: Tag
    },
    data () {
        return {
            tabs:[]
        }
    },
    methods: {
       read(path){
            this.$router.push(path);
        },
        onleft(){
            this.$router.push({name: 'x-select'})
        } 
    },
    created () {
        var url = "/api/book/by-categories?gender=male&type=hot&major=%E5%90%8C%E4%BA%BA&minor=&start=0&limit=30"
        console.log(url)
        this.$axios.get(url).then(res => {
            console.log(res.data)
            res.data.books.forEach(element => {
                element.cover = str + element.cover
                console.log("链接成：", element.cover)
            });
            this.tabs = res.data.books
            console.log("tabs小说有：", this.tabs)
        }, err => {
            alert(err)
        })
    }
}
</script>
<style scoped>
.nav{
    position: fixed;
    top: 0;
    width: 100%;
}
.fan{
    margin-top: 3.125rem;
}
.details-box{
    height: 5rem;
    border: 1px solid blue;
    margin: .3125rem;
    position: relative;
}
.ig-tabs{
    width: 3.125rem;
    height: 4.0625rem;
    /* border: 1px solid red; */
    line-height: 4.0625rem;
    margin: .3125rem 0 .3125rem .3125rem;
    display: inline-block;
}
.details-box .span1{
    position: absolute;
    top: .3125rem;
    font-size: 16px;
    margin-left: .9375rem;
}
.details-box .span2{
    position: absolute;
    bottom: .3125rem;
    left: 90px;
    font-size: 12px;
}
.details-box p{
    font-size: 12px;
    width: 13rem;
    /* w 240px */
    height: 1.875rem;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    top: 1.75rem;
    right: 1.0625rem;
    margin: 0;
}
.tag{
    position: absolute;
    right: 1.25rem;
    bottom: .3125rem;
}
.tag span{
    margin-left: .3125rem;
}
</style>
