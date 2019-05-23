<template>
    <div class="select">
        <div class="select-top">
            <h2>YW</h2>
            <img src="../../assets/search.png" @click="onSearch">
        </div>
        <div>
            <!-- 轮播 -->
            <div class="content-swipe">
                <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" class="img-box"/>
                </van-swipe-item>
                </van-swipe> 
            </div> 
            <!-- 小说内容 -->
            <!-- 玄幻小说 -->
            <div class="content">
                <section>
                    <div class="h2">
                        <span>男生热门</span>
                        <a href="#" @click="onclickright">更多>></a>
                    </div>
                </section>
                <!-- 都市 -->
                <section>
                    <div class="details-box" @click="read({name:'Read',query:{index:item}})" v-for="(item,index) in lists" :key="index">
                        <div class="ig-tabs">
                            <img :src="item.cover" alt="错误" class="auto-img">
                        </div>
                        <span class="span1">{{item.title}}</span>
                        <p>{{item.shortIntro}}</p>
                        <span class="span2">{{item.author}}</span>
                        <div class="tag">
                            <van-tag type="primary" round>{{item.latelyFollower}}</van-tag>
                            <van-tag type="danger" round plain>HOT</van-tag>
                            <van-tag color="orange" round>{{item.minorCate}}</van-tag>
                        </div>
                    </div>
                </section>
                <!-- 女生最爱 -->
            </div> 
            <!-- 玄幻小说 -->
            <div class="content">
                <section>
                    <div class="h2">
                        <span>玄幻奇幻爽文</span>
                        <a href="#" @click="onclickrightone">更多>></a>
                    </div>
                </section>
                <!-- 都市 -->
                <section>
                    <div class="details-box" @click="read({name:'Read',query:{index:item}})" v-for="(item,index) in dslis" :key="index">
                        <div class="ig-tabs">
                            <img :src="item.cover" alt="错误" class="auto-img">
                        </div>
                        <span class="span1">{{item.title}}</span>
                        <p>{{item.shortIntro}}</p>
                        <span class="span2">{{item.author}}</span>
                        <div class="tag">
                            <van-tag type="primary" round>{{item.latelyFollower}}</van-tag>
                            <van-tag type="danger" round plain>Hot</van-tag>
                            <van-tag color="orange" round>{{item.minorCate}}</van-tag>
                        </div>
                    </div>
                </section>
            </div> 
            <div class="content">
                <section>
                    <div class="h2">
                        <span>同人旅行</span>
                        <a href="#" @click="onclicktop">更多>></a>
                    </div>
                </section>
            <!-- 同人 -->
                <section style="margin-bottom:50px;">
                    <div class="details-box " @click="read({name:'Read',query:{index:item}})" v-for="(item,index) in loves" :key="index">
                        <div class="ig-tabs">
                            <img :src="item.cover" alt="错误" class="auto-img">
                        </div>
                        <span class="span1">{{item.title}}</span>
                        <p>{{item.shortIntro}}</p>
                        <span class="span2">{{item.author}}</span>
                        <div class="tag">
                            <!-- <van-tag type="primary" round>人气1k</van-tag> -->
                            <van-tag type="danger" round plain>连载中</van-tag>
                            <van-tag color="orange" round>{{item.minorCate}}</van-tag>
                        </div>
                    </div>
                </section>
            </div>
        </div>        
    </div>
</template>
<script>
//代理
import { Swipe, SwipeItem, Lazyload, Tag } from 'vant'
// import { once } from 'events';
// import { url } from 'inspector';
const url = '//statics.zhuishushenqi.com'
export default {
    name: 'x-select',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Lazyload.name]: Lazyload,
        [Tag.name]: Tag
    },
    methods: {
        read(path){
            
            this.$router.push(path);
            
        },
        // hots内可写都市小说
        onclickright(){
            this.$router.push({name: 'Hots'})
        },
        //玄幻奇幻
        onclickrightone(){
            this.$router.push({name: 'Fantasy'})
        },
        //同人
        onclicktop(){
            this.$router.push({name: 'Fan'})
        },
        //搜索页面
        onSearch(){
            this.$router.push({name: 'x-Search'})
        }
    },
    data () {
        return {
            images: [
                'http://statics.zhuishushenqi.com/recommendPage/155660592562552',
                'http://statics.zhuishushenqi.com/recommendPage/155660596069151',
                'http://statics.zhuishushenqi.com/recommendPage/155660599369520',
                'http://statics.zhuishushenqi.com/recommendPage/155660588781147'
            ],
            lists:[],
            dslis:[],
            loves:[]
        }
    },
    created () {
        //都市小说
        var url1 = '/api/book/by-categories?gender=male&type=hot&major=%E9%83%BD%E5%B8%82&minor=&start=0&limit=3'
        console.log(url1)
        this.$axios.get(url1).then(res => {
            console.log(res.data)
            res.data.books.forEach(e=> {
                e.cover = url+e.cover
                console.log("xxx1",e.cover)
            });
            this.lists =  res.data.books
            console.log("都市小说列表：",this.lists)
        }, err => {
            alert(err)
        });
        //玄幻奇幻
        var url2 = '/api/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=3'
        console.log(url2)
        this.$axios.get(url2).then(res => {
            console.log(res.data)
            res.data.books.forEach(f =>{
                f.cover = url + f.cover
                console.log("xxx2",f.cover)
            });
            this.dslis = res.data.books;
            console.log("玄幻奇幻小说列表：", this.dslis)
        }, err => {
            alert(err)
        })
        //同人小说
        var url3 = '/api/book/by-categories?gender=male&type=hot&major=%E5%90%8C%E4%BA%BA&minor=&start=0&limit=4'
        console.log(url3)
        this.$axios.get(url3).then(res => {
            console.log(res.data)
            res.data.books.forEach(g =>{
                g.cover = url + g.cover
                console.log("xxx3", g.cover)
            })
            this.loves = res.data.books;
            console.log("同人小说列表：", this.loves)
        })
    }
}
</script>
<style scoped>
.select-top{
    height: 3.125rem;
    width: 100%;
    background-color: red;
    position: fixed;
    top: 0;
    clear: both;
    z-index: 10;
}
.select-top h2{
    line-height: 3.125rem;
    display: inline;
    margin-left: .9375rem;
}
.select-top img{
    width: 1.875rem;
    height: 1.875rem;
    position: absolute;
    right: .9375rem;
    top: .8125rem;
}
.img-box{
    width: 23.4375rem;
    height: 7.5rem;
    width: 100%;
}
.content-swipe{
    margin-top: 3.125rem;
}
section{
    padding: 15px 0 0 15px;
}
.content .h2{
    height: 1.875rem;
    line-height: 1.875rem;
    /* padding: 10px 0 10px 10px; */
        /* margin-bottom: .625rem; */
}
.content .h2 span{
    font-size: 17px;
}
.content .h2 a{
    font-size: 13px;
    color: red;
    position: absolute;
    right: .9375rem;
}
.details-box{
    /* border: 1px solid blueviolet; */
    border-bottom: 1px solid goldenrod;
    height: 5rem;
    position: relative;
}
.details-box .ig-tabs{
    width: 3.125rem;
    height: 4.0625rem;
    /* border: 1px solid red; */
    line-height: 4.0625rem;
    margin: .3125rem 0 .3125rem .3125rem;
    display: inline-block;
    overflow: hidden;
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
    left: 5.625rem;
    font-size: 12px;
}
.details-box p{
    font-size: 12px;
    width: 13rem;
    height: 1.875rem;
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
    margin: 0 .125rem;
}
</style>
