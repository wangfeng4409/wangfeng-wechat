// pages/category/childCpns/w-menu/w-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: {
      type: Array
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    onItemClick(e) {
      // 1.改变当前的currentIndex
      const currentIndex = e.currentTarget.dataset.index;
      this.setData({
        currentIndex
      })

      // 2.将最新的currentIndex传递到分类页面
      this.triggerEvent('menuclick', {currentIndex}, {})
    }
  }
})
