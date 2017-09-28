import 'whatwg-fetch'
const reqHeaders = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  sysCode: 'market',
  'market-token': localStorage.market_TOKEN || ''
}
const contverQuery = param => {
  if (!param) {
    return ''
  }
  return Object.keys(param).reduce((pre, key) => (pre + `${key}=${param[key]}&`), '').slice(0, -1)
}
const request = (url, init) => new Promise((resolve, reject) => {
  fetch(url, init).then((res) => {
    if (res.ok) {
      resolve(res.json())
    } else {
      reject(res)
    }
  })
})
export default {
  get: (url, params) => {
    return request(url + '?' + contverQuery(params), {
      method: 'GET',
      headers: reqHeaders
    })
  },
  post: (url, params) => {
    return request(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      mode: 'cors',
      body: contverQuery(params)
    })
  }
}
