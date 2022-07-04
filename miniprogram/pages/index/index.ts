// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    display:'',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
      src: '../../assets/images/first.png',
      tssrc:'../../assets/images/transport.png',
      cust:'../../assets/images/customer.png',
      car:'../../assets/images/car.png',
      arrowright:'../../assets/images/arrow_right.png',
      arrowrighttwo:'../../assets/images/arrow_right_two.png',
      calculator:'../../assets/images/calculator.png',
      process:'../../assets/images/process.jpg',
      copy:'../../assets/images/copy.png'
  },
  Mytice(){
    wx.navigateTo({
      url: '/pages/tice/tice',
    })
  },
  storehousecopy(){
    wx.navigateTo({
      url: '/pages/storehousecopy/storehousecopy',
    })
  },
  goindex(){
    wx.navigateBack({
        delta: 10
      })
  },
  gonext(){
    wx.navigateTo({
        url: '/pages/index/address/address',
      })
  },
  showview(){ 
    this.setData({
      display: "block"
    })
  },
  hideview() {
    this.setData({
      display: "none"
    })
  },
  freight(){
    wx.navigateTo({
      url: '/pages/copy/copy',
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
