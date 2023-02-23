// pages/add-box/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        formData:{
          six: '',
          age: NaN,
          height: NaN,
          weight: NaN,
          hobby:  '',
          expect: '',
          city: ''
        },
        hobbyTextarea: '如果你更详细地告诉我，说不定我给你一个更大的惊喜哟！😘',
        expectTextarea: '如果你更详细地告诉我，说不定我给你一个更大的惊喜哟！😘',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    // 选择性别
    headleSelectSix(e){
      const { value } = e.currentTarget.dataset || {}
      if(value !== this.data.formData.six){
        const formData = this.data.formData
        formData['six'] = value
        this.setData({ formData })
      }
    },
    // 处理通用的输入框
    headleInput(e){
      const key = e.currentTarget.dataset.type || ''
      const value = e.detail.value || ''
      if(key){
        const formData = this.data.formData
        console.log(formData);
        formData[key] = value
        this.setData({ formData })
      }
    },
    // 获取用户定位
    getLocation(){
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          console.log(res);
        }
       })
       
    },
    // 提交
    onSubmit(){
      console.log(this.data.formData)
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
      wx.getSetting({
        success: (res) => {
          console.log(res);
        },
      })
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