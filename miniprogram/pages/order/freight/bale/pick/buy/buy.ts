// pages/order/order.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myposition:'../../assets/images/myposition.png',
    gocity:'../../assets/images/gocity.png',
    warn:'../../assets/images/warn.png',
    weight:'../../../../../../assets/images/weight.png',
    focus: false,
    inputValue: 0,
  },
  bindKeyInput: function (e:any) {
    var inputValue = e.detail.value
    console.log(inputValue)
    for(var i=-1;i<inputValue;i++){
      var tiipt = i+1
      // console.log(tiipt)
          this.setData({
          inputValue:  tiipt ,
        })
    }
  },
  gobuy(){
    wx.showModal({
      title: '请确认',
      content: '请确认您的收货地址是否无误',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/buy/pay/pay',
          })
        } else if (res.cancel) {
          console.log('我点了取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:any) {
    var inputValue = this.data.inputValue
    console.log(inputValue)
    console.log(options.valu)
    var int = parseInt(options.valu)
    // console.log('int')
    for(var i=-1;i<inputValue;i++){
      // var tiipt = i+1
          this.setData({
            inputValue: int,
            // show:int
        })
    }
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