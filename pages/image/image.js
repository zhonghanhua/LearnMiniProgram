Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    //系统api，让用户选择相册或者拍照
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成！')
  }

})