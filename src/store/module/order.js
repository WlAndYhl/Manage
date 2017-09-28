import { SETEDITTYPE } from '../module_types'
const state = {
  editType: '',
  dataList: ''
}
const actions = {
  setEditType ({commit}, type) {
    commit('SETEDITTYPE', type)
  }
}
const mutations = {
  [SETEDITTYPE] (state, type) {
    state.dataList = type.data[type.ind]
    state.editType = type.type
  }
}
const getters = {
  editType: state => state.editType,
  dataList: state => state.dataList
}
export default {
  state,
  actions,
  mutations,
  getters
}
