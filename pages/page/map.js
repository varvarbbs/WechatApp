// pages/page/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData: false,
    latitude: 0,
    longitude: 0,
    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadMyPosition();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  loadMyPosition: function() {
    var self = this;
    wx.getLocation({
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
        self.setData({
          latitude: latitude,
          longitude: longitude,
          hasData: true,
          markers: [{
            iconPath: '../../images/tab_map_select.png',
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 25,
            height: 25
          }]
        });
      },
      fail() {
        self.setData({
          hasData: false
        });
      }
    })
  }
})