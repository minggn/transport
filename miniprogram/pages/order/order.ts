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
    itt:0,
    order:{"one":1,"two":2}
  },
  one(e:any){
    this.setData({
     inputValue: this.data.inputValue + 1
    })
  },
del:function(event:any,e:any){
  // console.log(event.currentTarget.id)
  let one = event.currentTarget.id 
  let two = event.currentTarget
  console.log(two)
  console.log(this.data.itt)
  let inputValue = this.data.inputValue
  // console.log(one)
  var reduce = inputValue - one
  console.log(reduce)
  this.setData({
       inputValue:reduce
  })
  // console.log(this.data.inputValue)
    //打印出view中所有属性的值，包括“点击获取data-id绑定的id值”
  // console.log(event.currentTarget.dataset.id)    //打印出data-id绑定的id值
  // console.log(event.currentTarget.dataset.haha)   //打印出index的值
  console.log(event.currentTarget.id) 

},
ned:function(event:any,e:any){
  console.log(event.currentTarget.id)
  console.log(this.data.order.two)
  let one = this.data.order.one
  this.setData({
      one:this.data.itt
  })
  // let one = event.currentTarget.id 
  // let two = event.currentTarget
  // console.log(two)
  console.log(this.data.itt)
  // let inputValue = this.data.inputValue
  // console.log(one)
  // console.log(event.currentTarget.id) 

},
  bindKeyInput: function (e:any) {
    var inputValue = e.detail.value
    // console.log(inputValue)
    for(var i=-1;i<inputValue;i++){
      var tiipt = i+1
      // console.log(tiipt)
          this.setData({
          inputValue:  tiipt ,
        })
    }
   
  },
  enter(e:any){
    this.setData({
      itt:e.detail.value
    })
    // console.log(this.data.itt)
  },
  gohome(){
    wx.showModal({
      title: '提示',
      content: '取消订单将不再继续接下来的并退回主页面，请问是否继续？',
      success (res) {
        if (res.confirm) {
          wx.switchTab({
            url: '/pages/index/index',
          })
        } else if (res.cancel) {
          console.log('order取消')
        }
      }
    })
  },
  golist(e:any,event:any){
    const _this = this
    // var valu = _this.data.inputValue
    // console.log(valu)
    // let one = event.currentTarget.id
    // console.log(event)
    wx.showModal({
      title: '请确认',
      content: '请确认您所输入的快递单号是否无误，一旦提交，则不可修改',

      success (res) {
        if (res.confirm) {
          var valu = _this.data.inputValue
          console.log(valu)
          // // console.log(this.data.itt)
          // var it:any = {"num":this.data.itt}
          // console.log(it)
          wx.navigateTo({
            url: '/pages/order/freight/bale/pick/pick?valu=' + valu
            // url: '/pages/order/freight/bale/pick/pick?valu=' + valu 
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          // console.log(_this.data.inputValue)
        }
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e:any) {
    var inputValue = this.data.inputValue
    console.log(inputValue)
    for(var i=-1;i<inputValue;i++){
      var tiipt = i+1
          this.setData({
          inputValue:  tiipt ,
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