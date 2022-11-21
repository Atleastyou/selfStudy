DNS解析：

输入域名按下回车以后变成IP地址的过程就是DNS解析的过程
作用：把域名解析成对应IP地址的服务器
特征：DNS保存了一张域名与对应的IP地址的表，一个域名对应一个IP地址，一个IP地址可以对应多个域名

三次握手，四次挥手
客户端发起请求，告诉服务单我请求连接
服务端收到请求连接，告诉客户端，确认请求连接，可以链接
客户端建立链接，告诉服务端建立链接
双方建立链接

四次挥手
客户端告诉服务单断开连接请求
服务端收到断开连接请求，给服务单反馈收到请求信息
服务端这是会做一些断开连接准备，告诉客户端等我通知，准备工作好了以后告诉客户端可以断开连接了
客户端收到断开连接以后，给服务端发送断开确认信息
双方断开连接


数据代理
let vm = new Vue({
  data () {
    return {
      a: 1,
      b: 1
    }
  }
})

function Vue (options) {
  let _data = options.data()
  let _this = this
  for (let k in _data) {
    Object.defineProperty(_this, k, {
      get () {
        return _data[k]
      }
      set (newValue) {
        _data[k] = newValue
      }
    })
  }
}