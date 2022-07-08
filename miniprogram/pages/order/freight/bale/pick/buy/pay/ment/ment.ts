// pages/order/order.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myposition:'../../assets/images/myposition.png',
    gocity:'../../assets/images/gocity.png',
    warn:'../../assets/images/warn.png',
    im:'../../../../../../../../assets/images/imt.png',
    focus: false,
    inputValue: '',
      one:10,
      two:2,
      diu:0.03,
      bao:0.02,
      typ:0,
      showView: false, 
      sho:false,
      // "List": [{ money:'3' }, { money:'5'},{money:'2'}],
  },
  // max(){
   

  // },
  bindKeyInput: function (e:any) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  
  goend(){
    wx.navigateTo({
      url: '/pages/order/freight/bale/pick/buy/pay/ment/payend/payend',
    })
  },
  gopay(){
    wx.showModal({
      title: '请确认',
      content: '请确认您所选择的收货地址是否正确',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/buy/pay/pay',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    showView: (options.showView == "true" ? true : false)
  },
  change: function () {
      var that = this;
      that.setData({
      showView: (!that.data.showView)
    })
  },
  moe: function () {
    var that = this;
    that.setData({
    sho: (!that.data.sho)
  })
},


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})