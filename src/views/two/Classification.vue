<template>
    <div class="classification">
        <div class="box_one">
            <h4>男生</h4>
            <a class="box_one_a" v-for="(item,a) in atabs" :key="a">
                <span>{{item.name}}</span>
                <span class="ys">{{item.bookCount}}</span>
            </a>
        </div>
        <div class="box_two">
            <h4>女生</h4>
            <a class="box_one_a" v-for="(item,b) in btabs" :key="b">
                <span>{{item.name}}</span>
                <span class="ys">{{item.bookCount}}</span>
            </a>
        </div>
        <div class="box_three">
            <h4>出版</h4>
            <a class="box_one_a" v-for="(item,c) in ctabs" :key="c">
                <span>{{item.name}}</span>
                <span class="ys">{{item.bookCount}}</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'x-classification',
    data () {
        return {
            atabs:[],
            btabs:[],
            ctabs:[]      
        }
    },
    created () {
        const url = "/api/cats/lv2/statistics"
        console.log("所有的小说分类==>", url)
        this.$axios.get(url).then( res =>{
            console.log("求到的url分类数组==>", res.data)
            this.atabs = res.data.male;
            console.log("取到的男生小说是==>",this.atabs)
            this.btabs = res.data.female;
            console.log("取到的女生小说是==>",this.btabs)
            this.ctabs = res.data.press;
            console.log("取到的出版小说是 ==>",this.ctabs)
        })
    }
}
</script>
<style scoped>
.classification{
    width: 100%;
    height: 100%;
    /* background-color: bisque; */
}

.classification h4{
    font-weight: bold;
    height: 3.125rem;
    line-height: 3.125rem;
    margin: 0;
    padding: 0 .9375rem;
    color:#ccc;
    font-size: 13px;
}
/* 全局控制span的样式 */
.classification span{
    display: block;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
}
/* 全局控制a标签的样式 */
.classification a{
    width: 5.946rem;
    padding: .453rem;
}
.box_one_a{
    border-top: 1px solid #f8f8f8;
    border-right:1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;
    
    width: 6.25rem;
    display: inline-block;
    padding: 5 .3375rem;
}
.box_one_a .ys{
    font-size: 12px;
    color: #ccc;
}
.box_three{
    margin-bottom: 3.125rem;
}
</style>
