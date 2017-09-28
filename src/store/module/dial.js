import {
  DIAL
} from '../module_types'
const state = {
  PrizeSon: ['一等奖:iPhone6 plus', ' 二等奖:iPad Air2', ' 三等奖:iPad mini retina', ' 四等奖:特级红富士一个', ' 鼓励奖:充电宝', '参与奖:你想干嘛'], // 奖品提示
  totalNum: 6, // 转盘 总数
  isStatr: false, // 锁 专拍没有执行完的时候 不可以再次点击 ;
  lenCloc: 0, // 当前第几次计算叠加的度数
  turn: 3 // 转盘旋转最低的圈数
}
const actions = {
  dialTurn ({commit}, turntable) {
    commit('DIAL', turntable)
    console.log(turntable)
  }
}
const mutations = {
  [DIAL] (state, turntable) {
    if (!state.isStatr) {
      state.isStatr = true
      let random = Math.floor(Math.random() * turntable.length)
      if (random <= 6) {
        random = Math.floor(Math.random() * 80 + 30)
      }
      // state.operation(random)
      op(random)
    } else {
      return false
    }
    function op (ran) {
      var wheel = document.getElementById('wheel')
      state.lenCloc ++
      let Prize = turntable[ran] - 1
      let sun = state.turn * 360 // 编号  // 度数  //  时间
      if (Prize >= state.totalNum) {
        Prize = 0
      }
      let soBuom = parseInt(Math.floor(Math.random() * 60) - 30)
      turntable.splice(ran, 1)
      wheel.style.transform = 'rotate(' + ((state.lenCloc * sun + Prize * 60) + soBuom) + 'deg)'
      setTimeout(function () {
        alert('您获得了奖品编号:' + state.PrizeSon[Prize])
        state.isStatr = false
      }, 3200)
    }
  }
}
export default {
  state,
  actions,
  mutations
}
