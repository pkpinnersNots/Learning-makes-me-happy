// const url = "https://novel.juhe.im/category-info?gender=male&type=hot&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=20"
const url ="https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20";
const urlx ="http://chapterup.zhuishushenqi.com/chapter/http://vip.zhuishushenqi.com/chapter/5bc59e353c0d0670438bdad8?cv=1543636131027"
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "https://api.zhuishushenqi.com",
          pathRewrite: { "^/api": " " },
          changeOrigin: true,
          secure: false
        },
        "/content":{
          target: "http://chapterup.zhuishushenqi.com",
          pathRewrite: { "^/content": "" },
          changeOrigin: true,
          secure: false
        },
        "/images":{
          target: "http://statics.zhuishushenqi.com",
          pathRewrite: { "^/images": ""},
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
};