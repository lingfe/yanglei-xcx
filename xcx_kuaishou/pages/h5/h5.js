// d:\lingfe\xcx\bzhiDome\pages\h5\h5.js
Page({
  data: {
    h5url:"",
  },
  onLoad: function (options) {
    this.setData({h5url:ks.getStorageSync("h5url")});
  }
})