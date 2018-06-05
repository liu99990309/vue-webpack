/**
 * 获取url参数
 */
const forEach = (str) => {
  let i
  let l
  let n
  const o = {}
  const arr = str.substr(1).split('&')

  for (i = 0, l = arr.length; i < l; i++) {
    n = arr[i].split('=')
    o[n[0]] = decodeURIComponent(n[1])
  }

  return o
}

export default forEach(window.location.search)
