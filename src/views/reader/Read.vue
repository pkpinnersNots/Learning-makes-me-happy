<template>
    <div class="read">
         <van-nav-bar title="书籍详情Read" left-text="返回" left-arrow @click-left="onClickLeft" class="bar"/>
        <section class="section">
            <div class="books">
                <div class="box">
                    <div class="books-img">
                        <img :src="items.cover" alt="未加载" class="auto-img">
                    </div>
                    <!-- 小说名字 -->
                    <p>{{items.title}}</p>
                    <!-- 作者 -->
                    <p class="aut">{{items.author}}</p>
                    <!-- 标签 -->
                    <p class="cate">{{items.minorCate}}</p>
                    <van-tag round color="red">热门</van-tag>
                    <van-tag round color="blue">加载中</van-tag>
                    <van-tag round color="green">200w+</van-tag> 
                </div>
                <div class="contbox">
                    <p>{{items.shortIntro}}</p>
                </div>
                <!-- Catalog 目录 -->
                <div class="catalog" @click="readClick({name:'Catalogue',query:{index:items}})">
                    <span>目录</span>
                    <span style="float:right; color:gray;padding-left:2px;">></span>
                    <span class="new">最新章节：{{items.lastChapter}}</span>
                </div>
            </div>
        </section>
        <section class="book_bar">
            <van-goods-action>
                <van-goods-action-big-btn text="添加书架"/>
                <van-goods-action-big-btn text="立即阅读" primary @click="onRead({name:'x-Reading',query:{items}})"/>
            </van-goods-action>
        </section>
    </div>    
</template>
<script>
import { NavBar, Tag, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from 'vant'
export default {
    name: 'Read',
    components: {
        [NavBar.name]: NavBar,
        [Tag.name]: Tag,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionBigBtn.name]: GoodsActionBigBtn,
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },
    methods: {
        readClick(path){
            this.$router.push(path);
        },
        onClickLeft(){
            this.$router.push({name: 'x-select'})
        },
        onRead(path){
            //阅读小说内容
            // ({name:'x-Reading',query:{index:items}}
            // this.$router.push({name: 'x-Reading'})
            this.$router.push(path)
            //该点击事件内里的items没有任何数据
        }
    },
    data () {
        return {
            strs:[],
            items:[],
            items:'',
            tags:[],
            xxx: '',
            //获取第二个_id的值
            twoid: ''
        }
    },
    mounted () {
        console.log('当前项：',this.$route.query.index)
        this.items = this.$route.query.index
        console.log('当前项：this.items', this.items._id)
        var url = "/api/atoc?view=summary&book=" + this.items._id;
        console.log("url-->",url)
        this.$axios.get(url).then( res =>{
            console.log("res.data==>",res.data);
            this.twoid = res.data[0]._id;
            console.log("twoid==>",this.twoid);
            var url3 = "/api/atoc/" + this.twoid + "?view=chapters";
            console.log("url3==>",url3)
            this.$axios(url3).then( res =>{
                console.log("求到的小说数组(内含link值)==》", res.data.chapters)
                this.items = res.data.chapters
                var abc = localStorage.getItem("abc")
                console.log("JSON.stringify(this.items)",JSON.stringify(this.items))
                //  this.$route.query.index=JSON.stringify(this.items) 
                localStorage.setItem("abc", JSON.stringify(this.items))
                    if (abc) {
                        //小说目录
                        this.items = localStorage.setItem("abc", JSON.stringify(this.items))
                    }
                })
        
        // console.log("this.twoid==>",this.twoid)
            // var url3 = "/api/atoc/" + this.twoid + "?view=chapters";
            // console.log("url3==>",url3)
            // var abc = localStorage.getItem("abc")
            // localStorage.setItem("abc",JSON.stringify(this.items))
            // // var qwe = localStorage.setItem("abc",JSON.stringify(this.items))
            // // console.log("qwe",qwe)
            // let xx = localStorage.getItem("abc")
            // console.log("xx==>",xx)
            // this.xxx = xx
         // if(!abc){
            //     // let a = []
            //     // a.push(this.items)
            //     // console.log("a==>",a)
            //     console.log("没数据")
            
         // }
        // if (this.items) {
         //     this.items = localStorage.setItem("title.message",JSON.stringify(this.items))
        // }
        // this.items = this.$route.query.index
        // console.log('当前项：',this.items)
        })
    },
    created(){
        //
        this.items = this.$route.query.index;
        console.log("打印的值是==>", this.items)
        if(!this.items){
        // var qwe = localStorage.setItem("abc",JSON.stringify(this.items))
        let arr = JSON.parse(localStorage.getItem("title.message"))
        // console.log("qwe",qwe)
        // let xx = localStorage.getItem("abc")
        // console.log("xx==>",xx)
        this.items = arr
        console.log("this.items",this.items)
        }else{
            localStorage.setItem("title.message",JSON.stringify(this.items))
        }
    }
}
</script>

<style scoped>
.bar{
    background-color: red;
    color:white;
}
.bar span, .bar i{
    color: white;
}
.section{
    padding-top: 20px;
    /* border: 1px solid orangered; */
    height: 200px;
}
.books{
    overflow: hidden;
}
.box{
    border-bottom: 2px solid #2554;
    height: 5.625rem;
    width: 24rem;
    padding: 0 .9375rem;
    overflow: hidden;
}
.books .books-img{
    width: 3.125rem;
    height: 4.375rem;
    border: 1px solid red;
    display: block;
    float: left;
    margin-right: .625rem;
}
.books p{
    margin: 3px 0 5px;
    font-size: 16px;
    font-weight: 500;
}
.books .aut{
    font-size: 13px;
    line-height: 1.8;
    color: red;
    margin: 0;
}
.books .cate{
    font-size: 13px;
    line-height: 1.8;
    margin: 0;
}
.contbox{
    /* border: 1px solid gainsboro; */
    display: flex;
    padding: 10px 15px 0;
    margin-bottom: .625rem;
    border-bottom: 1px solid rgba(211, 199, 199, 0.272);
}
.contbox p{
    display:-webkit-box; 
    /* 使其变为伸缩盒 */
    -webkit-line-clamp:2;
    /* 设置其要显示的行数 */
    -webkit-box-orient:vertical; 
     /* 规定子元素的排列方式 */
     margin: 0;
     display:-webkit-box;
       /* // 使其变为伸缩盒 */
     -webkit-line-clamp:4;
     /* // 设置其要显示的行数 */
     -webkit-box-orient:vertical;
      /* // 规定子元素的排列方式 */
     width:100%;
     overflow:hidden;
     text-overflow:ellipsis;
     font-size: 15px;
     margin-bottom: .3125rem;
}
.catalog{
    /* width: 100%; */
    padding: 0 15px;
    /* border:1px solid rebeccapurple; */
    border-bottom: 1px solid rgb(199, 191, 191);
    height: 2.25rem; 
}
.catalog span{
    line-height: 2.25rem;
    font-size: 16px;
}
.catalog .new{
    font-size: 13px;
    float: right;
    overflow: hidden;
    -webkit-line-clamp:1;
    /* display:-webkit-box; */
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: right;
    width: 70%;
}
.book_bar{
    width: 100%;
    /* height: ; */
}
</style>
