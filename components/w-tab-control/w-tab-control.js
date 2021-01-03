// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(e) {
      // 设置最新的index
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      const data = { index: this.data.currentIndex }
      this.triggerEvent('tabclick', data)
    },
    setCurrentIndex(index) {
      this.setData({
        currentIndex: index
      })
    }
  }
})
