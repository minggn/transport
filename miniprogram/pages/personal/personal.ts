// pages/personal/personal.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data1:"待付款",
    userInfo: {},
    hasUserInfo: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
    payment:'../../assets/images/payment.png',
    ship:'../../assets/images/ship.png',
    receipt:'../../assets/images/Receipt.png',
    evaluation:'../../assets/images/Evaluation.png'
  },
  
  one: function () {
    var str = 0;
    wx.navigateTo({
      url: '/pages/everyorder/everyorder?str=' + str,
    })
  },
  two: function () {
    var str = 1;
    wx.navigateTo({
      url: '/pages/everyorder/everyorder?str=' + str,
    })
  },
  three: function () {
    var str = 2;
    wx.navigateTo({
      url: '/pages/everyorder/everyorder?str=' + str,
    })
  }, 
  four: function () {
    var str = 3;
    wx.navigateTo({
      url: '/pages/everyorder/everyorder?str=' + str,
    })
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  everyorder(){
    wx.navigateTo({
      url: '/pages/everyorder/everyorder',
    })
  },
//   mycoupon(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },
//   activity(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },
//   customerservice(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },
//   transport(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },
//   Notice(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },
//   us(){
//     wx.navigateTo({
//       url: '/pages/mycoupon/mycoupon',
//     })
//   },



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