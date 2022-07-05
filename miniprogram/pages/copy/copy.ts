// pages/copy/copy.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    Total:'',
    lamon:'39',
    mon:'59',
    must:'1',
    bale:'../../assets/images/Bale.jpg'
  },
  bindKeyInput(e:any) {
      console.log(this.data)
      console.log(e.detail.value)
      var mon:any = this.data.mon
      var lamon:any = this.data.lamon
      var inputValue:any = e.detail.value
      var must:any = this.data.must
      if(e.detail.value >  "1"  ){
        //   console.log(e.detail.value)
        //   console.log(this.data)
        this.setData({
            inputValue: e.detail.value ,            
            Total: (inputValue - must) * lamon +59 ,
          })
      }else{
        this.setData({
            inputValue: e.detail.value  ,
            Total:inputValue*mon
          })
      }
        
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