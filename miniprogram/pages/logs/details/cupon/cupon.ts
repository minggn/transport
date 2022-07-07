// pages/logs/details/cupon.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { id: '0', money: '15',tatl:'元' },
      { id: '3', money: '88',tatl:'折'  },
      { id: '1', money: '15',tatl:'元'  },
      { id: '2', money: '88',tatl:'折'  },
      { id: '1', money: '15',tatl:'元'  },
    ],
   
   
  },
  mySort: function (e:any) {
    //property 根据什么排序
    var property = e.currentTarget.dataset.property;
    var self = this;
    var arr = self.data.arr;
    var sortRule = true; // 正序倒序
    self.setData({
      arr: arr.sort(self.compare(property, sortRule))
    })
    //console.log(arr)
  },
  compare: function (property:any, bol:any) {
    return function (a:any, b:any) {
    var value1 = a[property];
    var value2 = b[property];
    if(bol){
      return value1 - value2;
    }else {
      return value2 - value1;
    }
  }
  },
  onshow:function(){
  },

  goentire(){
    wx.navigateBack({
        delta: 10,
         success: function () {
                    wx.getClipboardData({
                      success: function () {
                        wx.showToast({
                          title: '领取成功',
                          icon: 'none',
                          duration: 2000
                     })
              }
            })
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