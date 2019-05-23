//fantasy 玄幻奇幻类小说
<template>
    <div class="fantasy">
        <van-nav-bar title="玄幻奇幻" left-arrow @click-left="onleft" class="nav"/>
        <div class="details-box" @click="read({name:'Read',query:{index:item}})" v-for="(item,index) in asts" :key="index">
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
const str = "//statics.zhuishushenqi.com"
import { NavBar, Tag } from 'vant'
export default {
    name: 'Fantasy',
    components: {
        [NavBar.name]: NavBar,
        [Tag.name]: Tag
    },
    data () {
        return {
            asts:[]
        }
    },
    created () {
        var url = "/api/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20"
        console.log(url)
        this.$axios.get(url).then(res => {
            console.log(res.data)
            res.data.books.forEach(element => {
                element.cover = str + element.cover
                console.log("获取到：", element.cover)
            });
            this.asts = res.data.books
            console.log('玄幻==》', this.asts)
        }, err => {
            alert(err)
        })
    },
    methods: {
        read(path){
            this.$router.push(path);
        },
        onleft(){
            this.$router.push({name: 'x-select'})
        }
    }
}
</script>
<style scoped>
.nav{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: red;
}
.fantasy{
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
    margin-right: .3125rem;
}
</style>
