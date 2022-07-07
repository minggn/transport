// pages/order/order.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myposition:'../../assets/images/myposition.png',
    gocity:'../../assets/images/gocity.png',
    warn:'../../assets/images/warn.png',
    focus: false,
    inputValue: ''
  },
  bindKeyInput: function (e:any) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // gohome(){
  //   wx.showModal({
  //     title: '提示',
  //     content: '取消订单将不再继续接下来的并退回主页面，请问是否继续？',
  //     success (res) {
  //       if (res.confirm) {
  //         wx.switchTab({
  //           url: '/pages/index/index',
  //         })
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },
  golist(){
    wx.showModal({
      title: '是否确认打包所有包裹',
      content: '确认后所有包裹将捡货称重，是否继续',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/pick',
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
  onLoad() {

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