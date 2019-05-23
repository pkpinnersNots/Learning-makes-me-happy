<template>
    <div class="rank">
        <h3>这个是小说排行榜</h3>
        <div class="rank_box">
            <div class="box_top">
              <p>男生榜单</p>
                <van-list @click="onClick">
                    <van-cell v-for="(item,index) in tabs" :key="index" class="box">
                        <img :src="item.cover" alt="错误">
                        <span>{{item.title}}</span>
                    </van-cell>
                </van-list>  
            </div>
            <!--  -->
            <div class="box_bottom" style="margin-bottom:50px;">
              <p>女生榜单</p>
                <van-list>
                    <van-cell v-for="(item,index) in tabs" :key="index" class="box" @click="click">
                        <img :src="item.cover" alt="错误">
                        <span>{{item.title}}</span>
                    </van-cell>
                </van-list>
            </div>
        </div>
    </div>
</template>
<script>
import { List, Cell } from 'vant'
export default {
    name: 'x-ranking',
    data () {
        return {
            tabs:[],
            finished:false
        }
    },
    components: {
        [List.name]: List,
        [Cell.name]: Cell
    },
    created () {
        const url = "/api/ranking/gender";
        var urlcover = "http://statics.zhuishushenqi.com"
        console.log(url)
        this.$axios.get(url).then( res=>{
            console.log("请求到的值是==>", res.data)
            res.data.female.forEach(element => {
                element.cover = urlcover + element.cover
                console.log("小图片cover的地址==>",element.cover)
            });
            this.tabs = res.data.female
        })
    },
    methods :{
        onClick(){
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 7; i++) {
                this.tabs.push(this.tabs.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.tabs.length >= 14) {
                    this.finished = true;
                }
            }, 1000);
        },
        click(){}
    }
}
</script>
<style scoped>
.rank{
    width: 100%;
    height: 100%;
    background-color:aquamarine;
}
.rank h3{
    background-color: orange;
    display: block;
    width: 100%;
    height: 1.875rem;
    line-height: 1.875rem;
    border-radius: 20px;
    margin: 0;
    text-align: center;
}
.rank_box p{
    margin-bottom: .3125rem;
}
.box{
    position: relative;
    height: 3.125rem;
}

.rank_box img{
    width: 1.5625rem;
    height: 1.5625rem;
    position: relative;
    bottom: 0;
}
.rank_box span{
    font-family: Fangsong;
    font-weight: bolder;
    margin-left: .625rem;
    display: inline-block;
}
.box_top{
    height: 25rem;
    overflow: hidden;
}
.box_bottom{
    height: 25rem;
    overflow: hidden;
}
</style>
