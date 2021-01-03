// pages/cart/cart.js
Page({
  data: {
    cartList: [
      {
        imageURL: '/assets/images/home/goods/sell.jpeg',
        title: '汪冯',
        desc: '裤子',
        price: 12,
        count: 1,
        checked: false
      }
    ],
    isSelectAll: false,
    totalPrice: 0,
    totalCounter: 0
  },
  onShow() {
    wx.setNavigationBarTitle({
      title: `购物车(0)`,
    })
  },
  onSelectAll() {
    // 1.判断是否是全部选中
    if (this.data.isSelectAll) { // 点击之前全部选中
      this.data.cartList.forEach(item => {
        item.checked = false
      })
      this.setData({
        cartList: this.data.cartList,
        isSelectAll: false
      })
    } else { // 点击之前某些没选中
      this.data.cartList.forEach(item => {
        item.checked = true
      })
      this.setData({
        cartList: this.data.cartList,
        isSelectAll: true
      })
    }
    this.changeData()
  },
  changeData() {
    // 1.获取所有选中数据
    let totalPrice = 0;
    let counter = 0;

    for (let item of this.data.cartList) {
      if (item.checked) {
        counter++
        totalPrice += item.price * item.count
      }
    }

    // 2.修改数据
    this.setData({
      totalCounter: counter,
      totalPrice: totalPrice
    })
  }
})
