<template>
    <div class="search">
        <!-- 导航栏 -->
        <van-nav-bar title="搜索" left-arrow />
        <!-- 搜索组件 -->
        <div class="tablebox">

            <van-search placeholder="请输入搜索关键词" v-model="value" round show-action>
                <div slot="action">搜索</div>
                <!--  @click="onSearch" -->
            </van-search>
            <div class="search_section">
                <!-- 热词搜索 : https://novel.juhe.im/search-hotwords-->
                <div class="hotsworld">
                    <div class="hotsworld_title">
                        <span class="title">热词搜索</span>
                        <span class="right_refresh">换一换</span>
                    </div>
                    <div class="content"></div>
                </div>
                <!-- Recommend 热门推荐 : https://novel.juhe.im/hot-books -->
                <div class="recommend">
                    <div class="recommend_title">
                        <span class="title">热门推荐</span>
                        <span class="right_refresh">换一换</span>
                    </div>
                    <div class="content"></div>
                </div>
                <!-- 搜索历史 -->
                <div class="histry_box">
                    <div class="histry_box_title">
                        <span class="title">搜索历史</span>
                        <span class="right_delete">清除历史</span>
                    </div>
                    
                </div>
            </div>           
        </div>

    </div>
</template>
<script>
import { NavBar ,Search } from 'vant'
export default {
    name: 'x-search',
    components: {
        [NavBar.name]: NavBar,
        [Search.name]: Search
    },
    data () {
        return {
            value: '',
            action: true
        }
    }
}
</script>
<style scoped>
.search{
    box-sizing: border-box;
}
.search_section{
    box-sizing: border-box;
    width: 100%;
    padding: .75rem .75rem 0;
}
/* hotsworld */
.search_section .hotsworld_title{
    position: relative;
    height: 1.875rem;
}
.search_section .hotsworld_title .title{
    font-size: 25px;
    color: #6b6b6b;
    line-height: 1.875rem;
}
.search_section .hotsworld_title .right_refresh{
    line-height: 1.875rem;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 1.25rem;
    color: #8a8a8f;
    font-size: .32rem!important;
}
/* recommend */
.search_section .recommend_title{
    position: relative;
    height: 1.875rem;
}
.search_section .recommend_title .title{
    font-size: 25px;
    color: #6b6b6b;
    line-height: 1.875rem;
}
.search_section .recommend_title .right_refresh{
    line-height: 1.875rem;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 1.25rem;
    color: #8a8a8f;
    font-size: .32rem!important;
}
/* histry_box */
.histry_box .histry_box_title{
    position: relative;
    height: 1.875rem;
}
.histry_box .histry_box_title .title{
    font-size: 25px;
    color: #6b6b6b;
    line-height: 1.875rem;
}
.histry_box .histry_box_title .right_delete{
    line-height: 1.875rem;
    position: absolute;
    right: 0;
    bottom: 0;
    padding-right: 1.25rem;
    color: #8a8a8f;
    font-size: .32rem!important;
}
</style>
