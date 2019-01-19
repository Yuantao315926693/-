//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
          // 切换
            // 'https://topic.camel.com.cn/module/wap_index_focus_201709/7645c28f-9674-49f0-8490-dca3f6237496.jpg?d=1',
          'http://img.hb.aicdn.com/877bbe49c17ee06f4203ef937598841fb316eaa447a9b-Rk30sf_fw658', 'http://img.hb.aicdn.com/00c6a070b78d34b1b944a6455f11365e961479c1b57c6-DP8EV0_fw658',
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
