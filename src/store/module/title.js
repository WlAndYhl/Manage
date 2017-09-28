import {
  SETTITLE
} from '../module_types.js'
const state = {
  title: ''
}
const actions = {
  setTitle ({commit}, title) {
    commit('SETTITLE', title)
  }
}
const mutations = {
  [SETTITLE] (state, title) {
    state.title = title
  }
}
export default {
  state,
  actions,
  mutations
}
