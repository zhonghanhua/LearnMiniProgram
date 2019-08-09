// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'zhonghanhua',
    age:22,
    students:[
      { id: 111, name: 'aaa', age: 10 },
      { id: 222, name: 'bbb', age: 20 },
      { id: 333, name: 'ccc', age: 30 }
    ],
    counters:0
  },

  // ＋按钮监听
  handleBtnClick(){
    // 1.错误做法，不会刷新界面
    // this.data.counters += 1

    // this.setData()
    this.setData({
        counters : this.data.counters + 1 
    })
  },
  // - 按钮监听
  handleSubtraction(){
    this.setData({
      counters: this.data.counters - 1
    })
  }

})