// pages/category/category.js
Page({
  data: {
    categories: [
      { title: '衣服' },
      { title: '帽子' },
      { title: '鞋子' },
      { title: '上衣' },
      { title: '袜子' },
      { title: '短裤' },
    ],
    categoryData: {
      subcategories: [
        {
          image: `/assets/images/home/goods/pop.jpeg`,
          title: '商品展示'
        },
        {
          image: `/assets/images/home/goods/pop.jpeg`,
          title: '商品展示'
        },
        {
          image: `/assets/images/home/goods/pop.jpeg`,
          title: '商品展示'
        }
      ],
      categoryDetail: []
    },
    currentIndex: 0
  },
  onLoad() {
    const categoryData = this.data.categoryData
    for (let i = 0; i < 40; i++) {
      categoryData.categoryDetail.push(
        {
          image: `/assets/images/home/goods/new.jpeg`,
          title: '汪冯的商品展示',
          price: 120,
          cfav: 88,
          iid: 1
        }
      )
    }
    this.setData({
      categoryData: categoryData
    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex
    this.setData({
      currentIndex
    })
  }
})
