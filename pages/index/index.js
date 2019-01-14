//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
          // 切换
          
          'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%881.jpg', 'http://img.hb.aicdn.com/00c6a070b78d34b1b944a6455f11365e961479c1b57c6-DP8EV0_fw658',
            'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%883.jpg'
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
