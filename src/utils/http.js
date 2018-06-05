import Hashes from 'jshashes'
import es6Promise from 'es6-promise'
import axios from 'axios'
import login from './login'

es6Promise.polyfill()

const md5 = new Hashes.MD5()
const http = axios.create()

http.interceptors.request.use(
  (config) => {
    config.data = config.data || {}
    const { data, cache, hash } = config

    // 加密
    if (hash) {
      const t = new Date().getTime()
      const sign = `${t}pcrjy@iyu034!34`
      data.sign = md5.hex(sign)
      data.t = t
    }

    // 补全url
    config.url = `${GLOBAL.prefixAPI}${config.url}`

    // 防止浏览器缓存url。如果是get请求，则默认开启清缓存
    if (cache === false || (cache === undefined && config.method.toLowerCase() === 'get')) {
      config.params = config.params || {}
      config.params._ = +new Date()
    }

    // data post
    config.headers = config.headers || {}
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (data) {
      const arr = []
      Object.keys(data).forEach((key) => {
        const v = data[key]
        if (v !== undefined) {
          arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
        }
      })
      config.data = arr.join('&')
    }

    return config
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response
      const h = data && data.h
      const code = h && h.code
      const msg = h && h.msg
      if (code === 200) {
        response.data = data.b
      } else {
        response.status = code
        response.statusText = msg
        response.data = data

        if ((code === 10 || code === 14) && !response.config.disableAutoLogin) {
          login()
        }
        return Promise.reject(response)
      }
    }
    return response
  },
  error => Promise.reject(error.response)
)

export default http
