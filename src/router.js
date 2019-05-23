import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
//导入二级路由
import Bookcase from "./views/two/Bookcase.vue"
import Select from "./views/two/Select.vue"
import Ranking from "./views/two/Ranking.vue"
import Classification from "./views/two/Classification.vue"
//导入其他一级路由
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'

import Hots from "./views/plug-in/Hots.vue"
import Fantasy from "./views/plug-in/Fantasy.vue"
import Fan from "./views/plug-in/Fan.vue"
//小说详细信息
import Read from "./views/reader/Read.vue"
// 小说阅读的目录
import Catalogue from './views/reader/Catalogue.vue'
import Readcatalog from './views/reader/Readcatalog.vue'
//小说阅读的看书界面
import Reading from './views/reader/Reading.vue'
//测试页面
import Text from './components/Text.vue'
//搜索页面
import Search from './views/two/Search.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //根目录
    
    //正式页面
    {
      path: "/",
      name: "x-bookcases",
      component: Home,
      children:[
        // 书架
        {
          path: '/book',
          name: 'x-bookcase',
          component: Bookcase
        },
        // 精选
        {
          path: '/select',
          name: 'x-select',
          component: Select
        },
        //分类
        {
          path: '/classification',
          name: 'x-classification',
          component: Classification
        },
        //排行
        {
          path: '/ranking',
          name: 'x-ranking',
          component: Ranking
        }
      ]
    },
    //登录和注册界面
    {
      path: '/login',
      name: 'd-login',
      component: Login
    },
    //注册
    {
      path: '/reg',
      name: 'x-reg',
      component: Reg
    },
    //其他一级页面
    {
      //第一个更多界面 ：都市爽文
      path: '/hot',
      name: 'Hots',
      component:Hots
    },
    {
      //第二个更多小说界面： 玄幻奇幻
      path: '/fantasy',
      name: 'Fantasy',
      component: Fantasy
    },
    {
      //第三个更多小说界面; 同人小说
      path: '/fan',
      name: 'Fan',
      component: Fan
    },
    {
      //小说信息介绍
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      // 小说阅读目录
      path: '/catalogue',
      name: 'Catalogue',
      component: Catalogue
    },
    //小说阅读内的目录
    {
      path: '/readcata',
      name:'readcatalong',
      component: Readcatalog
    },
    {
      //小说阅读的界面
      path: '/reading',
      name: 'x-Reading',
      component: Reading
    },
    // 测试页面
    {
      path:'/text',
      name: 'x-Text',
      component: Text
    },
    //搜索页面
    {
      path: '/search',
      name: 'x-Search',
      component: Search
    }
  ]
});
