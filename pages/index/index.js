//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
          // 切换
          
          'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%881.jpg', 'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%882.jpg',
            'http://img.hb.aicdn.com/b7401b461d82f02553352825db7970036746e77351540-ZGokz4_fw658'
        ],
        indicatorDots: true,  
        indicatorColor: '#fff',
        indicatorActiveColor: '#d2ab44',
        autoplay: true,
        interval: 5000,
        duration: 500,
        circular: true
    }
})
