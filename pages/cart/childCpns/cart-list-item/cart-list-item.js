// pages/cart/childCpns/cart-list-item/cart-list-item.js
Component({
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    }
  },
  methods: {
    onCheckClick(e) {
      console.log(e, 'e')
    }
  }
})
