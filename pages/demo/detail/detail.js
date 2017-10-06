// pages/demo/detail/detail.js
var obj1 = require("../../../data/list.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  collect: function () {
    //取缓存
    var data = wx.getStorageSync("collect")
    //改变数据
    var id = this.data.postid;
    var bol = data[id];
    var bol = !bol;
    data[id] = bol;
    //保存到缓存
    wx.setStorageSync("collect", data)
    //动态设置cillected变量(更新视图中的collected/this.data.collected=bol)
    this.setData({
      collected:bol
    })
    wx.showToast({
      title: bol?'收藏成功':'取消成功',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //点击列表项的id
    var id=options.id
    //动态绑定数据到data
    this.setData({
      list:obj1.list[id],
      postid:id
    })
    //josn对象
  //   var data={
  //     0:true,
  //     1:false,
  //     2:true
  //   }
  //   //利用本地存储来完成收藏功能
  //   //保存数据
  //   wx.setStorageSync("x", data)
  //  //先获取数据
  //   var data = wx.getStorageSync("x");
  //   console.log(data)
  //   //修改数据
  //   data[1]=true
  //   wx.setStorageSync("x", data)
  //   console.log(data)
    var data = wx.getStorageSync("collect");
    
    if(data){
      var bol =  data[id];//当前是否被收藏
      this.setData({
        collected:bol
      })
    }else{   
      var data = {}; 
      data[id]=false;
      wx.setStorageSync("collect", data)
    }

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
  
  }
})