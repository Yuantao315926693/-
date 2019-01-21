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
         collect_able: false,
      
          id: 1,
          p_info: "这是测试数据1",
          p_size: "180(黑色)",
          price: 10.00,
          p_able: 0,
          p_num: 1

        
    },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id: options.id,
      
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
    this.queryData()
  },

  //点击收藏
  collect_clicked: function () {
    var bol = this.data.collect_able;

    this.setData({

      collect_able: !bol

    })
  },
  //云端数据库
  queryData: function () {
    var mine = this
    var id_num = "test" + mine.data.id
    const db = wx.cloud.database();
    const cont = db.collection('product');
    console.log(id_num)
    cont.doc(id_num).get({
      success: function (res) {
        console.log(res.data)
        mine.setData({

          price: res.data.p_price,
          p_info: res.data.p_info,
          p_size:res.data.p_size

        })
        
        
      }
      
    })
   

  },
  //点击购买
  
  //点击加购
  // 单击“插入数据”按钮调用该函数
  insertData: function () {
    const db = wx.cloud.database({});
    const cont = db.collection('count');

    cont.add({

      data: {
        description: "向云数据库插入一条数据",
        due: new Date('2018-12-25'),
        tags: [
          "cloud",
          "database"
        ],
      },
      success: function (res) {
        console.log(res._id)
      }
    });
  },

})