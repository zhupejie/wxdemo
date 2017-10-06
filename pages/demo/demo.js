// pages/demo/demo.js
var obj=require("../../data/list.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/simg.jpg',
      '../../images/img_info.jpg',
      '../../images/timg2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    circular:true,
    indicatorActiveColor: "#18C0F4",
    vertical:false,
    filmarr:obj.list
  },
  toDetail:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/detail?id='+id
    })
    
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
  
  }
})