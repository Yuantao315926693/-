// pages/product/productDetail/productDetail.js
Page({
    data: {
        imgUrls: [
          'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E9%A1%B6%E5%8C%85%E7%86%8A.jpg',
            'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E9%A1%B6%E5%8C%85%E7%86%8A.jpg',
            'https://raw.githubusercontent.com/imlosedog/imlosedog.github.io/master/%E9%A1%B6%E5%8C%85%E7%86%8A.jpg'
        ],
        indicatorDots: true,
        indicatorColor: '#fff',
        indicatorActiveColor: '#d2ab44',
        autoplay: true,
        interval: 5000,
        duration: 500,
        circular: true,
         collect_able: false
    },
  //点击收藏
  collect_clicked: function () {
    var bol = this.data.collect_able;

    this.setData({

      collect_able: !bol

    })
  }
})