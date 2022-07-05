
Page({
    data:{
      currentIndex: 0,
      text:'',
      "firstList": [{ name: '20220509140712345678', money: '5.00' }, { name: '20220509140712345678', money: '50.00'}],
      "secondList": [{ name: '20220509140712345678', money: '10.00' }, { name: '20220509140712345678', money: '20.00' }],
      "thirdList": [{ name: '20220509140712345678', money: '30.00' }, { name: '20220509140712345678', money: '40.00' }],
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
    onLoad: function(options) {
      var str = options.str;
      console.log(str)
      this.setData({
        text: options.str,
        currentIndex: options.str
      })
    },
    
})