<template>
<!-- 小说阅读界面 -->
<!-- {{information}} -->
<!-- {{item.cpContent}} -->
<div class="table">
    <div class="reading">
        <div class="box_top" v-show="isShow">
            <img src="../../assets/return.png" class="auto-img" @click="threeClick"/>
        </div>
        <div class="box_bottom" v-show="isShow">
            <div class="left">
                <img src="../../assets/sunlight.png" v-show="isSrc" @click="twoClick"/>
                <img src="../../assets/Moon.png" v-show="!isSrc"  @click="twoClick"  />
            </div>
            <div class="content">
                <img src="../../assets/Set.png" class="auto-img"/>
            </div>
            <div class="right">
                <img src="../../assets/Catalog.png" class="auto-img" />
            </div>
        </div>
        <div class="box-read" @click="oneClick">
            <div>
                <p>{{cptext.title}}</p>
                <div>{{cptext.cpContent}}</div>
            </div>
            
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'x-Randing',
    data () {
        return {
            //list组件加载
            loading: false,
            finished:false,
            //div显示和隐藏
            isShow : false,
            //图片切换
            isSrc : true,
            //背景颜色白天和夜晚
            nightMode: false,
            information: '',
            cptext:[],
            tabs:[],
            items: '',
            currinturl: '',
            xsread:'',
            //拿link字符串
            add:'',
            //小目录
            item:[],
            //reading中获取上个页面目录传过来的数组
            readlist:[]
        }
    },
    methods: {
        oneClick(){
            //显示状态栏 ： v-show
            this.isShow = !this.isShow
        },
        //切换图片：太阳 和 月亮
        twoClick(){
            if(this.isSrc!=false){
                this.isSrc = false
                // this.text.style.backgroundColor = "gray";
            }else{
               this.isSrc = true
            }
        },
        threeClick(){
            this.$router.push({name: 'Read'})
        }
    },
    created () {
        // this.readlist = localStorage.getItem("abc",JSON.stringify(this.items))
        console.log("值", this.items)
        // console.log("当前点击章数==》",query.index.link)
        let currinturl = this.$route.query.index.link
        // console.log("link",currinturl.link)
        console.log("link",currinturl)
        // // var currinturl = query.index.link;
        // // console.log("currinturl==>",currinturl)
        let axx = "/content/chapter/" + currinturl
        console.log("axx==>",axx)
        this.$axios.get(axx).then( res => {
            console.log("当前章节的数组==》", res.data)
            this.cptext = res.data.chapter
            console.log("打印输出该章节的小说内容数组==>", this.cptext)
            this.information = this.cptext.cpContent
            var xsread = this.information;
            console.log("xsread小说章节文本==>",xsread)
            // console.log("this.information小说章节文本==>",this.information)
        })
        // console.log("打印输出该章节的小说内容==>", this.cptext)

        //通过点击read页面的阅读按钮
        console.log("read页面传的值",this.$route.query.index)
        //获取link值

        this.items = this.$route.query.index
        console.log("打印的值是==>", this.items)
        if(!this.items){
        // var qwe = localStorage.setItem("abc",JSON.stringify(this.items))
        let arr = JSON.parse(localStorage.getItem("title.message_link"))
        // console.log("qwe",qwe)
        // let xx = localStorage.getItem("abc")
        console.log("arr==>",arr)
        this.items = arr
        console.log("this.items",this.items)
        }else{
            localStorage.setItem("title.message_link",JSON.stringify(this.items))
            console.log("JSON.stringify(this.items)==>",JSON.stringify(this.items))
        }
        
    },
    mounted(){
        // this.readlist = localStorage.setItem("_id.Catalong", JSON.stringify(this.tabs))
        // localStorage.setItem("_id.Catalong", JSON.stringify(this.tabs))
        // var readlist = localStorage.getItem("_id.Catalong")
        // console.log("JSON.stringify(this.items)==>",JSON.stringify(this.items))
        // console.log("JSON.stringify(this.tabs)",readlist)
        // this.readlist = JSON.stringify(this.items)
        // console.log("this.readlist", this.readlist)
        // this.items = this.readlist.link
        // this.items = localStorage.setItem("title.message_link",JSON.stringify(this.items))
        // console.log("得到了什么值==》", this.items)
        // if(!this.items){
        // // var qwe = localStorage.setItem("abc",JSON.stringify(this.items))
        // let arr = JSON.parse(localStorage.getItem("_id.massage"))
        // // console.log("qwe",qwe)
        // // let xx = localStorage.getItem("abc")
        // // console.log("xx==>",xx)
        // this.items = arr
        // console.log("this.items",this.items)
        // }else{
        //     // localStorage.setItem("_id.massage",JSON.stringify(this.items))
        //     localStorage.setItem("_id.massage",JSON.stringify(this.items))
        // }
        var add = this.items.link
        console.log("add==>",add)
        var url = "/content/chapter/" + add
        this.$axios.get(url).then( res =>{
            console.log("小说内容==》",res.data)
            this.cptext = res.data.chapter
            console.log("打印输出该章节的小说内容数组==>", this.cptext)
            this.information = this.cptext.cpContent
            var xsread = this.information;
            console.log("xsread小说章节文本==>",xsread)
        })
        this.item = localStorage.setItem("_id.Catalong", JSON.stringify(this.tabs))
        console.log("item==>",item)
    }
}
</script>
<style scoped>
.table{
    width: 100%;
    /* height: 666px; */
    background-color: aqua;
    /* overflow: hidden; */
}
 .box_top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color:rgba(102, 81, 81, 0.653);
    height: 3.125rem;
}
.box_top img{
    width: 1.875rem;
    height: 1.875rem;
    position: absolute;
    top: .625rem;
    left: .625rem;
}
.box_top .label{
    float: right;
    line-height: 3.125rem;
    margin-right: .625rem;
}
.box_bottom .left img{
    width: 1.875rem;
    height: 1.875rem;
    left: .625rem;
    top: .625rem;
    position: absolute;
}
.box_bottom .content{
    margin: .625rem auto;
    width: 1.875rem;
    height: 1.875rem;
}
.box_bottom{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(102, 81, 81);
    height: 3.125rem;
}
.box_bottom .right{
    width: 100%;
    width: 1.875rem;
    height: 1.875rem;
    position: absolute;
    right: .625rem;
    bottom: .625rem;

}
.text{
    background-color: rgba(133, 96, 49, 0.714);
    
}
.box-read{
    font-family: FangSong;
    overflow: hidden;
    overflow-y: auto;
}
.box-read p{
    color: brown;
    font-weight: bolder;
    font-size: 22px;
    text-align: center;
    padding-top: .625rem;
    margin-top: 0;
    margin-bottom: .625rem;
}
.boxleft{
    height: 100%;
    width: 60%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #ccc;
}
</style>
