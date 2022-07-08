// pages/freight/freight.ts
Page({

  data:{
    currentIndex: 0,
    text:'',
    "firstList": [{ name: '20220509140712345678', type: '2',ict:'3' }, { name: '20220509140712345678', type: '1'}],
    "secondList": [{ name: '20220509140712345678', type: '2' }, { name: '20220509140712345678', type: '2' }],
    "thirdList": [{ name: '20220509140712345678', type: '3' }, { name: '20220509140712345678', type: '3' }],
    "fourList": [{ name: '20220509140712345678', type: '1' }, { name: '20220509140712345678', type: '1' }],
  },
  goBale(){
    wx.navigateTo({
      url: '/pages/order/freight/bale/bale',
    })
  },
  pagechange: function (e:any) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 3
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick(e:any) {
    // let currentPageIndex = e.currentTarget.dataset.idx
    var currentIndex:any = e.currentTarget.dataset.idx
    console.log(e.currentTarget.dataset.idx)
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
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