const loginUrl = '/login.html'
const ref = encodeURIComponent(window.location.href)
let locked = false // 上锁，防止重定向期间被多次调用
export default () => {
  if (locked) return
  locked = true
  window.location.href = `${loginUrl}?ref=${ref}`
}
