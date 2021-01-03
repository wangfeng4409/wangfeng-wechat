// pages/category/childCpns/w-content/w-content.js
Component({
  properties: {
    subcategories: {
      type: Array
    },
    categoryDetail: {
      type: Array
    }
  },
  data: {
    currentIndex: 0,
  },
  methods: {
    tabClick(e) {
      console.log(this.properties.categoryDetail)
    }
  }
})
