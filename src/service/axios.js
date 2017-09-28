import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import json from './data/data.js'
export default {
  bootstrap () {
    let wlp = json
    var mock = new MockAdapter(axios)
    mock.onGet('/changeval').reply(config => {
      for (let i = 0, len = json.length; i < len; i++) {
        json[i].SerialNum === config.wl.SerialNum ? json[i] = config.wl : ''
      }
      return new Promise((resolve, reject) => {
        resolve([200, {
          success: 1
        }])
      })
    })
    mock.onGet('/success').reply(config => {
      console.log(config)
      let pageJson = wlp
      if (config.status && !config.returnGoods) {
        let searchJson1 = []
        if (config.status === '0') {
          for (var i = 0; i < json.length; i++) {
            if (json[i].settleCash === '已结算') {
              searchJson1.push(json[i])
            }
          }
          pageJson = searchJson1
        }
        let searchJson2 = []
        if (config.status === '1') {
          for (var j = 0; j < json.length; j++) {
            if (json[j].settleCash === '未结算') {
              searchJson2.push(json[j])
            }
          }
          pageJson = searchJson2
        }
      }
      if (!config.status && config.returnGoods) {
        let searchJson3 = []
        if (config.returnGoods === '是') {
          for (var k = 0; k < json.length; k++) {
            if (json[k].isRefund === '退货') {
              searchJson3.push(json[k])
            }
          }
          pageJson = searchJson3
        }
        let searchJson4 = []
        if (config.returnGoods === '否') {
          for (var l = 0; l < json.length; l++) {
            if (json[l].isRefund === '不退货') {
              searchJson4.push(json[l])
            }
          }
          pageJson = searchJson4
        }
      }
      if (config.status && config.returnGoods) {
        let searchJson5 = []
        if (config.returnGoods === '是' && config.status === '0') {
          for (var a = 0; a < json.length; a++) {
            if (json[a].isRefund === '退货' && json[a].settleCash === '已结算') {
              searchJson5.push(json[a])
            }
          }
          pageJson = searchJson5
        }
        let searchJson6 = []
        if (config.returnGoods === '否' && config.status === '0') {
          for (var b = 0; b < json.length; b++) {
            if (json[b].isRefund === '不退货' && json[b].settleCash === '已结算') {
              searchJson6.push(json[b])
            }
          }
          pageJson = searchJson6
        }
        let searchJson7 = []
        if (config.returnGoods === '是' && config.status === '1') {
          for (var c = 0; c < json.length; c++) {
            if (json[c].isRefund === '退货' && json[c].settleCash === '未结算') {
              searchJson7.push(json[c])
            }
          }
          pageJson = searchJson7
        }
        let searchJson8 = []
        if (config.returnGoods === '否' && config.status === '1') {
          for (var d = 0; d < json.length; d++) {
            if (json[d].isRefund === '不退货' && json[d].settleCash === '未结算') {
              searchJson8.push(json[d])
            }
          }
          pageJson = searchJson8
        }
      }
      let newWl = pageJson.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      return new Promise((resolve, reject) => {
        resolve([200, {
          total: pageJson.length,
          data: newWl
        }])
      })
    })
  }
}
