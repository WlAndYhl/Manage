<template>
  <div class='dialCenter'>
    <div id="pointer" class="wheel-pointer"><i></i></div>
    <div class="wheel-btn" @click='rang'>
        <a id="button" href="javascript:;">
            <strong>试试手气!</strong>
        </a>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'dialCenter',
  data () {
    return {
      trunNum: [2, 5, 10, 20, 25, 40], // 概率奖品 编号
      turntable: [] // 随机概率计算
    }
  },
  methods: {
    ...mapActions(['dialTurn']),
    rang () {
      this.dialTurn(this.turntable)
    }
  },
  created () {
    /* 循环概率 */
    for (let i = 0; i < this.trunNum.length; i++) {
      for (let j = 0; j < this.trunNum[i]; j++) {
        this.turntable.push(i + 1)
      }
    }
  }
}
</script>

