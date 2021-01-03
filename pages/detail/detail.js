// pages/detail/detail.js
Page({
  data: {
    iid: '', // 1m7c6iu
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: {}
  },
  onLoad: function (options) {
    // 1.获取传入的iid
    this.setData({
      iid: options.iid
    })
  },
  onAddCart() {
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;

    // 3.加入成功提示
    wx.showToast({
      title: '加入购物车成功',
    })
  }
})