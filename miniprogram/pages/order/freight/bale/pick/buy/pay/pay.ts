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
    weight:'../../../../../../../assets/images/weight.png',
    switch1Checked: true,
    switch2Checked: true,
    int:0,
    itt:0,
    three:3,
  },
  bindKeyInput: function (e:any) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  switch1Change(e:any){
    if(this.data.switch1Checked === true){
         console.log(this.data.inputValue)
         var inputValue = e.detail.value
         var it = this.data.inputValue
         var ist = it
         console.log(inputValue)
         this.setData({
              inputValue:it,
              int:ist*0.03
         })
    }else{
      console.log(this.data.inputValue)
      var inputValue = e.detail.value
      var it = this.data.inputValue
      var ist = it
      console.log(inputValue)
       this.setData({
        inputValue:it*0,
        int:ist*0
       })
    }
          // var on = this.data.switch1Checked
          // console.log(!on)
          // console.log(this.data.inputValue)
  },
  switch2Change(e:any){
    if(this.data.switch2Checked === true){
         console.log(this.data.inputValue)
         var inputValue = e.detail.value
         var it = this.data.inputValue
         var ist = it
         console.log(inputValue)
         this.setData({
              inputValue:it,
              itt:ist*0.02
         })
    }else{
      console.log(this.data.inputValue)
      var inputValue = e.detail.value
      var it = this.data.inputValue
      var ist = it
      console.log(inputValue)
       this.setData({
        inputValue:it*0,
        int:ist*0
       })
    }
          // var on = this.data.switch1Checked
          // console.log(!on)
          // console.log(this.data.inputValue)
  },
  money(e:any){
        this.setData({
          inputValue:e.detail.value
        })
  },
  gopay(){
    wx.showModal({
      title: '请确认',
      content: '买不买保险？',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/buy/pay/ment/ment',
          })
        } else if (res.cancel) {
          console.log('我点击取消了')
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