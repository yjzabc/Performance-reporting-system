// miniprogram/pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    name:[],
    new_name:'',
    new_array:''
  },
  del_name:function(e){
    let name = this.data.name
    name.splice(name.findIndex(item => item === e.currentTarget.dataset.key), 1)
    this.setData({
      name: name
    })
  },
  del_array:function(e){
    let array = this.data.array
    array.splice(array.findIndex(item => item === e.currentTarget.dataset.key), 1)
    this.setData({
      array: array
    })
  },
  add_name:function(e){
    let name = this.data.name
    if (this.data.new_name != ''&&name.indexOf(this.data.new_name) === -1) {
      name.push(this.data.new_name)
      this.setData({
        name: name
      })
    }
  },
  add_array:function(e){
    let array = this.data.array
    if (this.data.new_array != '' &&array.indexOf(this.data.new_array) === -1){
      array.push(this.data.new_array)
      this.setData({
        array: array
      })
    }
  },
  input_name:function(e){
    this.setData({
      new_name:e.detail.value
    })
  },
  input_array: function (e) {
    this.setData({
      new_array: e.detail.value
    })
  },
  input_branch:function(e){
    app.globalData.branch_name = e.detail.value
  },
  submit:function(e){
    let data = {
      name:this.data.name,
      performance_title:this.data.array
    }
    wx.cloud.callFunction({
      name: 'db2',
      data: data,
      success: res => {
        console.log('[云函数] [login] user openid: ', res)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:app.globalData.name,
      array: app.globalData.array
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})