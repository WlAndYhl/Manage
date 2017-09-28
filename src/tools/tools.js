import fetcher from './fetcher.js'
window.fetcher = fetcher
export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: fetcher
    })
  }
}
