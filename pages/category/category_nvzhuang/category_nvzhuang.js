// pages/category/category_nvzhuang/category_nvzhuang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    p_info: "这是测试数据1",
    p_size: "180(黑色)",
    price: 10.00,
    p_able: 0,

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
    this.queryData()
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

  //云端数据库获取数据
  queryData: function () {
    var mine = this
    var id_num = "category" + mine.data.id
    const db = wx.cloud.database();
    const cont = db.collection('category');
    console.log(id_num)
    cont.doc(id_num).get({
      success: function (res) {
        console.log(res.data)
        mine.setData({
          price: res.data.p_price,
          p_info: res.data.p_info,
          p_size: res.data.p_size
        })
      }
    })
  },
})