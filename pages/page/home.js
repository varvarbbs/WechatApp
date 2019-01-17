// pages/page/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasShop: false,
    hasOptimization: false,
    hasScroll: false,
    hasFixed: false,
    hasFind: false,
    adList: [],
    shopList: [],
    optimizationList: [],
    hotScrollList: [],
    hotFixedList: [],
    findList: []
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.refreshUI();
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
    this.refreshUI();
    wx.stopPullDownRefresh();
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
  refreshUI:function(){
    var app = getApp();
    app.post.loadAdList('fitting', this.loadAdCallBack);
    app.post.loadHomeData(this.loadHomeDataCallBack);
  },
  loadAdCallBack:function(result){
    if (result.ret == 0){
      this.setData({
        adList: result.data
      });
    }
  },
  loadHomeDataCallBack: function (result){
    if (result.ret == 0){
      this.refreshData(result.data);
    }
  },
  refreshData:function(data) {
    var shopList = data.shopList;
    var optimizationList = data.optimizationList;
    var hotScrollList = data.hotScrollList;
    var hotFixedList = data.hotFixedList;
    var findList = data.findList;
    this.setData({
      hasShop: shopList.length > 0,
      hasOptimization: optimizationList.length > 0,
      hasScroll: hotScrollList.length > 0,
      hasFixed: hotFixedList.length > 0,
      hasFind: findList.length > 0,
      shopList: shopList,
      optimizationList : optimizationList,
      hotScrollList : hotScrollList,
      hotFixedList : hotFixedList,
      findList : findList
    });
  },
  onShopClick:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'shop?id=' + id,
    })
  },
  onProductClick:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'product?id=' + id,
    })
  }
})