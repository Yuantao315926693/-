//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
          // 切换
'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%881.jpg', 'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%882.jpg','https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E6%A8%AA%E7%89%883.jpg'
        ],
        indicatorDots: true,  
        indicatorColor: '#fff',
        indicatorActiveColor: '#d2ab44',
        autoplay: true,
        interval: 5000,
        duration: 500,
        circular: true
    }
    // var util = require('../../utils/util.js');
    // onLoad:function(){
    //   // 调用函数时，传入new Date()参数，返回值是日期和时间
    //   var time = util.formatTime(new Date());
    //   // 再通过setData更改Page()里面的data，动态更新页面的数据
    //   this.setData({time: time});
    // }
})
