// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
    data: {
        discount_one: '../../assets/images/discount_one.png',
        discount_two: '../../assets/images/discount_two.png',
        discount_three: '../../assets/images/discount_three.png',
      },
      Details(){
        wx.navigateTo({
            url: '/pages/logs/details/details',
          })
      },
      
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
    })
  },
})
