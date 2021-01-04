// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },
  methods: {
    onImageLoad() {
      this.triggerEvent('imageLoad')
    }
  }
})
