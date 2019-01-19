// pages/category/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
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

    collect_able:false
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //点击收藏
  collect_clicked:function(){
    var bol = this.data.collect_able;

    this.setData({

      collect_able: !bol

    })
  }
})