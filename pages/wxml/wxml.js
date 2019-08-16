// pages/wxml/wxml.js
Page({
  data: {
    firstname:'kobe',
    lastname:'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow:false,
    score: 45,
    movies:['星际','盗梦','大话']
  },
  onLoad(){
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },
  handeClick(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow : !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 10
    })
  }

})