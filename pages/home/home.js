// pages/home/home.js
import { getMultiData } from '../../service/home.js'
const BACK_TOP_POSITION = 1000;
Page({
  data: {
    banners: [
      '/assets/images/home/banner/0.jpg',
      '/assets/images/home/banner/1.jpg',
      '/assets/images/home/banner/2.jpg',
      '/assets/images/home/banner/3.jpg'
    ],
    recommends:[
      { image: '/assets/images/home/recommend/0.png', title: '十点抢劵' },
      { image: '/assets/images/home/recommend/1.png', title: '好物特卖' },
      { image: '/assets/images/home/recommend/2.png', title: '内购福利' },
      { image: '/assets/images/home/recommend/3.png', title: '初秋上新' }
    ],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 1, list: [] },
      new: { page: 1, list: [] },
      sell: { page: 1, list: [] },
    },
    currentType: 'pop',
    topPosition: 0,
    showBackTop: false,
    showTabControl: false
  },
  onLoad() {
    // this.fetchData()
    const goods = this.data.goods
    for (let key in goods) {
      for (let i = 0; i < 40; i++) {
        goods[key].list.push(
          {
            image: `/assets/images/home/goods/${key}.jpeg`,
            title: '汪冯的商品展示',
            price: 120,
            cfav: 88,
            iid: `${i}`
          }
        )
      }
    }
    this.setData({
      goods: goods
    })
  },
  // 请求接口
  fetchData() {
    getMultiData().then(res => {
      console.log(res, 'res')
    })
  },
  tabClick(e) {
    // 1.根据当前的点击赋值最新的currentType
    let currentType = ''
    switch(e.detail.index) {
      case 0:
        currentType = 'pop'
        break
      case 1:
        currentType = 'new'
        break
      case 2:
        currentType = 'sell'
        break
    }
    this.setData({
      currentType: currentType
    })
    console.log(this.selectComponent('.tab-controls'), '父级拿到子组件中的数据')
    this.selectComponent('.tab-controls').setCurrentIndex(e.detail.index)
    this.selectComponent('.tab-controls-temp').setCurrentIndex(e.detail.index)
  },
  // 获取滚轮滚动的高度事件
  scrollPosition(e) {
    // 1.获取滚动的顶部
    const position = e.detail.scrollTop;

    // 2.设置是否显示
    this.setData({
      showBackTop: position > BACK_TOP_POSITION,
    })

    wx.createSelectorQuery().select('.tab-controls').boundingClientRect((rect) => {
      const show = rect.top > 0
      if (Math.floor(rect.top) === 0) {
        console.log(e, 'e')
      }
      this.setData({
        showTabControl: !show
      })
    }).exec()
  },
  // 返回到顶部事件
  onBackTop() {
    // wx.pageScrollTo({
    //   scrollTop: 0,
    //   duration: 0
    // })
    this.setData({
      showBackTop: false,
      topPosition: 0
    })
  },
  // 加载更多
  loadMore() {
    console.log('---我已经到底部了---')
    const goods = this.data.goods
    for (let i = 0; i < 40; i++) {
      goods[this.data.currentType].list.push(
        {
          image: `/assets/images/home/goods/${this.data.currentType}.jpeg`,
          title: '汪冯的商品展示',
          price: 120,
          cfav: 88,
          iid: `${i}`
        }
      )
    }
    this.setData({
      goods: goods
    })
  }
})
