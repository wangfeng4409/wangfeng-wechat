//app.js
const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  onLaunch() {
    // 1、先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    // 2、判断token是否有值
    if (token && token.length !== 0) {
      // 有token,需验证token是否过期
      this.check_token(token)
    } else {
      // 没有token进行登录操作
      this.login()
    }
  },
  check_token() {
    // // 验证token是否失效
    // wx.request({
    //   url: 'url',
    //   success(res) {
    //     // token有效
    //     if (res) {
    //       // 执行一些操作
    //     } else {// token无效
    //       this.login()
    //     }
    //   }
    // })
  },
  login() {
    // // 登录操作
    // wx.login({
    //   success(res) {
    //     // code只有5min的有效期
    //     console.log(res)
    //     const code = res.code
    //     // 将code发送自己的服务端
    //     wx.request({
    //       url: 'url',
    //       method: 'post',
    //       data: {
    //         code
    //       },
    //       success(res) {
    //         // 取出token
    //         const token = res.data.token
    //         // // 第一种方式: 将token保存在globalData中
    //         // this.globalData.token = token
    //         // 第二种方式: 进行本地存储
    //         wx.setStorageSync(TOKEN, token)
    //       }
    //     })
    //   }
    // })
  }
})
