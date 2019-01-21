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
          jiagou:"加入购物车"

        
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

  //云端数据库获取数据
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
dbjiagou:function(){
  var p_able=!this.data.p_able
  this.setData({
    p_able: p_able,
  })

  var jiagou
  if(p_able){
      jiagou= "已经加入购物车"
    this.insertData()
      }
  if(!p_able)
   { 
     jiagou = "加入购物车"
    this.deleteData()
   }
  this.setData({
    jiagou:jiagou
  })
 
},
//删除数据调用此函数
deleteData:function(){
  var mine = this
  const db = wx.cloud.database();
  const cont = db.collection('count');
  var id = mine.data.id

  db.collection('count').doc("tobuy"+id).remove({
    success(res) {
      console.log(res.data)
    }
  })
},

  // 插入数据调用该函数
  insertData: function () {
    var mine = this
    const db = wx.cloud.database();
    const cont = db.collection('count');
    var id=mine.data.id
    var p_info=mine.data.p_info
    var p_size=mine.data.p_size
    var price=mine.data.price
    cont.add({
data:{
       _id: "tobuy"+id, // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
      due: new Date('2018-09-01'),
      p_info:p_info,
      p_price:price,
      p_size:p_size,
      },
      success: function (res) {
        console.log(res._id)
      }
    });
  },
//点击立即购买
tobuy:function(){
  wx.navigateTo({
    url: "../../order/orderConfirm/orderConfirm" 
  })
  // hover - class="navigator-hover" >
}
  
})