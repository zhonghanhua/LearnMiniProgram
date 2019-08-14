// pages/input/input.js
Page({

  handleFocus(event){
    console.log('获取焦点',event)
  },
  handleInput(event) {
    console.log('输入', event)
  },
  handleBlur(event) {
    console.log('失去焦点', event)
  }
})