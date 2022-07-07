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
    inputValue: 0,
    show:3,
    text:''

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
      title: '是否前往转运页面进行支付',
      content: '确认后将跳往转运页面进行支付，是否继续前往',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/buy/buy',
          })
        } else if (res.cancel) {
          console.log('我点了一下按钮')
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
    // var valu = options.valu;
    // console.log(valu)
    // this.setData({
    //   inputValue: options.valu,
    //   // currentIndex: options.str
    // })
    // console.log(this.data.inputValue)
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