import {
  SETCONDITIONS,
  SETSEARCH,
  SETTOTAL,
  SETDATA
} from '../module_types.js'
// import '../../service/axios'
import axios from 'axios'
const state = {
  conditions: {
    pageNum: 1,
    pageSize: 10
  },
  total: 0,
  data: [],
  currentPage: 1
}
const actions = {
  accountSetCondition ({commit}, conditions) {
    commit('SETCONDITIONS', conditions)
  },
  accountSearch ({commit}, num) {
    axios.get('/success', {...state.conditions}).then((res) => {
      commit('SETTOTAL', res.data.total)
      commit('SETDATA', res.data.data, num)
    })
    // fetcher.get('/wecashMarketSystem/system/settle/order/list', {...state.conditions}).then((res) => {
    //   commit('SETTOTAL', res.data.Total)
    //   commit('SETDATA', res.data.data, num)
    // })
  }
}
const mutations = {
  [SETCONDITIONS] (state, conditions) {
    state.conditions = Object.assign(state.conditions, conditions)
  },
  [SETDATA] (state, data, num) {
    state.data = data
  },
  [SETSEARCH] (state) {
    // console.log('1')
  },
  [SETTOTAL] (state, total) {
    state.total = total
  }
}
export default {
  state,
  actions,
  mutations
}
