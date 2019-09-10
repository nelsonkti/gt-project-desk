let baseUrl = 'http://127.0.0.1:8081/api' // 本地代理

console.log('NODE_ENV:' + process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'local':
    baseUrl = 'http://127.0.0.1:8081/api' // 测试环境url
    break
  case 'dev':
    baseUrl = 'http://127.0.0.1:8081/api' // 测试环境url
    break
  case 'pre':
    baseUrl = 'http://testxyapi.jingzhuan.cn/api' // 预上线环境url
    break
  case 'production':
    baseUrl = 'http://testxyapi.jingzhuan.cn/api' // 生产环境url
    break
}

export default baseUrl