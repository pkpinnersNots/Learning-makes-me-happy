// 小说章节目录
<template>
  <div class="catalogue">
    <van-nav-bar title="标题Catalogue" left-arrow @click-left="onClickleft" class="bar"/>
    <div class="barbox">
      <div class="tabber">
        <span class="one">{{zhangjie}}章</span>
      </div>
      <div class="title">正文目录</div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item,index) in tabs" :key="index" @click="onReadclick({name:'x-Reading',query:{index:item}})">{{item.title}}</van-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
import { NavBar, List, Cell } from "vant";
import { SetTimout } from "timers";
export default {
  name: "Catalogue",
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell
  },
  methods: {
    onClickleft() {
      this.$router.push({ name: "Read" });
    },
    onLoad() {
      //异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.tabs.push(this.tabs.length + 1);
        }
        //加载状态结束
        this.loading = false;
        //数据全部加载完成
        if (this.tabs.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    },
    onReadclick(path){
       this.$router.push(path);
      // console.log("当前点击章数==》",query.index.link)
      // var currinturl = query.index.link;
      // console.log("currinturl==>",currinturl)
      // let axx = "/content/chapter/" + currinturl
      // console.log("axx==>",axx)
      
      //可获取小说得内容
      // this.$axios.get(axx).then( res =>{
      //   console.log("axx获取的link值得小说文本==》",res.data)
      // })
      // this.$axios.get(axx).then( res=>{
      //   console.log("小说章节内容==》",res.data)
      // })
      /*
      console.log("当前的内容：", this.$route.query.index)
      var num = "/api/atoc?view=summary&book=";
      var str = this.$route.query.index._id;
      console.log("当前小说数据信息的id", str);
      //拼接获取小说正版源于盗版源
      var urlpp = "/api/mix-atoc/" + str + "?view=chapters"
      this.$axios.get(urlpp).then( res =>{
        console.log("以当前小说数据信息的id拿到的小说章节==》", res.data)
        //拿到当前数据内的所有章节数组
        this.chapArr = res.data.mixToc.chapters

        console.log("ChapARR==>", this.chapArr)
      })
      //定义一个变量，获得每个章节的内容
      
      */
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      tabs: [],
      tals: [],
      tavs: [],
      str: [],
      wash: [],
      zhangjie: "",
      arr:"",
      chapArr:[]
    };
  },
  created() {
    //拿章节地址ip
    console.log("当前项：", this.$route.query.index);

    if(!this.item){
        let arr = JSON.parse(localStorage.getItem("_id.Catalog"))
        this.item = arr
        console.log("this.item",this.item)
        }else{
            localStorage.setItem("_id.Catalog",JSON.stringify(this.item))
        }

    var str = this.$route.query.index._id;
    console.log("str==>", str);
    let url = "/api/atoc?view=summary&book=" + str;
    console.log("第一个拼接地址：", url);

    //获取第一次url的接口数据

    this.$axios.get(url).then( res =>{
      console.log("第一次获取的接口数据==>",res.data)
      this.wash = res.data[0]._id;
      console.log("就近获取_id的值==>", this.wash)
      ///////////////////////////////////
      var add = this.wash;
      console.log("add==>",add)
      let urltwo = "/api/atoc/" + add + "?view=chapters";
      console.log("第二个拼接地址==>",urltwo)

      //获取第二次url的数据接口

        this.$axios.get(urltwo).then( res =>{
          console.log("获取第二次url的数据接口==>",res.data)
          this.tabs = res.data.chapters;
          //tabs数组里的_id
          console.log("tabs里id的全部目录==》", this.tabs)
          this.zhangjie = res.data.chapters.length;
          console.log("当前书本章节总为：",this.zhangjie)

          if(!this.tabs){
            let arr = JSON.parse(localStorage.setItem("_id.Catalog"))
            this.tabs = arr
            console.log("this.tabs==>", this.tabs)
          }else{
            localStorage.setItem("_id.Catalong", JSON.stringify(this.tabs))
          }
          
        })
    })
  }
}
</script>
<style scoped>
.bar {
  background-color: red;
}
.bar i {
  color: white;
}
.barbox .tabber {
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 13px;
  padding: 0 1.25rem;
  font-weight: 500;
}
/* .barbox .tabber .one{} */

.barbox .title {
  height: 2.25rem;
  line-height: 2.25rem;
  color: #969ba3;
  background-color: #f6f7f9;
  font-size: 12px;
  padding-left: 1.25rem;
}
</style>
