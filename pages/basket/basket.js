// pages/basket/basket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    t_num: 2,
    t_price: 0.00,
    boolean: false,
    p_data:[

      {
        id: 1,
        p_info:"这是测试数据1",
        p_size:"180(黑色)",
        price:10.00,
        p_able: 0,
        p_num:1
        
      },
      {
        id: 2,
        p_info: "这是测试数据2",
        p_size: "170(白色)",
        price: 20.00,
        p_able:1,
        p_num:2
       
      }
    ]
    


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
    this.fin_Price()
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
//用户点击管理
  buymanager:function()
  {
    var bol = this.data.boolean;

    this.setData({

      boolean: !bol

    })
  },

//购物车内商品展示框

//商品选择
p_clecked: function (e) {
   console.log(e)
  var pid=e.currentTarget.dataset.index
  pid--;
  console.log(pid)
  var able = !e.currentTarget.dataset.able
  console.log(able)
  var up = "p_data[" + pid + "].p_able";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
  console.log(up)
  this.setData({
  
   [up]:able

  })
  this.fin_Price()
  },

  //商品数量减
p_decnum:function(e)
{
  var pid = e.currentTarget.dataset.index
  pid--;
  var pnum = e.currentTarget.dataset.num
  if(pnum>1)
  pnum--;
  console.log(pnum)
  var up = "p_data[" + pid + "].p_num";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
  this.setData({

    [up]: pnum

  })
  this.fin_Price()
},
  p_addnum: function (e) {
    var pid = e.currentTarget.dataset.index
    pid--;
    var pnum = e.currentTarget.dataset.num
    //可能的限制条件
      pnum++;
    console.log(pnum)
    var up = "p_data[" + pid + "].p_num";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
    
    

    this.setData({

      [up]: pnum,
      

    })
    this.fin_Price()
  },

//计算最终价格
  fin_Price: function () {
    var num = this.data.t_num
    var price = 0
    console.log(price)
    var p_data = this.data.p_data
    console.log(p_data[0])
    console.log(p_data[0].p_able)
    console.log(p_data[1].p_able)
    for (var i = 0; i < num; i++)
    {
      if(p_data[i].p_able)
      price += (p_data[i].p_num * p_data[i].price);
    }
    console.log(price)
    this.setData({

      t_price: price

    })

}

})