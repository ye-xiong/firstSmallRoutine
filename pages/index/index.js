//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    iconList: [{
      name: 'iconshangdian',
      text: '附近鲜果'
    }, {
      name: 'iconqianggou',
      text: '抢购'
    },{
      name: 'icontianmaoyoujirenzheng',
      text: '有机鲜果'
    }, {
      name: 'iconyoupinlianmeng',
      text: '优选鲜果'
    }],
    recommendList: [{
      img: '../../images/indexImg/part1(1).png',
      sale: '￥12',
      del: '￥30'
    },{
      img: '../../images/indexImg/part1(2).png',
      sale: '￥12',
      del: '￥30'
    },{
      img: '../../images/indexImg/part1(3).png',
      sale: '￥12',
      del: '￥30'
    }],
    salePart1: [{
      img: '../../images/indexImg/sale-part1(2).png',
      text: '皇帝蕉',
      sale: '39.80'
    },{
      img: '../../images/indexImg/sale-part1(3).png',
      text: '牛奶草莓',
      sale: '39.80'
    },{
      img: '../../images/indexImg/sale-part1(4).png',
      text: '奉化水蜜桃',
      sale: '39.80'
    },{
      img: '../../images/indexImg/sale-part1(1).png',
      text: '猕猴桃',
      sale: '39.80'
    },{
      img: '../../images/indexImg/sale-part1(1).jpg',
      text: '水晶红富士',
      sale: '39.80'
    },{
      img: '../../images/indexImg/sale-part1(6).png',
      text: '进口西柚',
      sale: '39.80'
    }]
  },

  swiperChange (param) {
    console.log('param', param.detail.current)
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
