const baseURL = 'http://123.207.32.32:8000'
const timeout = 5000

function request(options) {
  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      data: options.data,
      method: options.method || 'GET',
      success(res) {
        resolve(res.data)
        wx.showToast({
          title: '接口出错',
          icon: 'error',
          duration: 2000,
          mask: true
        })
      },
      fail() {
        reject()
        wx.showToast({
          title: '接口出错',
          icon: 'error',
          duration: 2000,
          mask: true
        })
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
}

export default request;
