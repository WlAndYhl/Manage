<template>
  <div class="dialog">
    <el-form ref="form">
        <el-form-item v-if='editType === "service"'>
          <ul class="DialogInner">
            <li>
              <label for="">订单号</label>
              <el-input :placeholder='dataList.SerialNum.toString()' :disabled="true"></el-input>
            </li>
            <li>
              <label for="">商品名称</label>
              <el-input :placeholder='dataList.productName.toString()' v-model='wl' @change='changVal'></el-input>
            </li>
            <li>
              <label for="">结算状态</label>
              <el-input :placeholder='dataList.settleCash.toString()'></el-input>
            </li>
            <li>
              <label for="">备注</label>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容">
              </el-input>
            </li>
          </ul>
          
        </el-form-item>
        <el-form-item v-if='editType === "shop"'>
            <ul class="DialogInner">
            <li>
              <label for="">订单号</label>
              <el-input :placeholder='dataList.SerialNum.toString()' :disabled="true"></el-input>
            </li>
            <li>
              <label for="">商品名称</label>
              <el-input :placeholder='dataList.productName.toString()'></el-input>
            </li>
            <li>
              <label for="">结算状态</label>
              <el-input :placeholder='dataList.settleCash.toString()'></el-input>
            </li>
            <li>
              <label for="">备注</label>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容">
              </el-input>
            </li>
          </ul>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'dialog',
  data () {
    return {
      wl: ''
    }
  },
  computed: mapState({
    editType: ({order}) => order.editType,
    dataList: ({order}) => order.dataList
  }),
  methods: {
    changVal () {
      for (var i in this.dataList) {
        if (i === 'productName') {
          this.dataList[i] = this.wl
        }
      }
      this.$emit('changeV', this.dataList)
    }
  }
}
</script>
<style>
.DialogInner li{
  display:flex;
  margin-top:20px;
}
.DialogInner label{
  flex:3;
  display: flex;
  justify-content: center;
  align-content: center;
}
.DialogInner .el-input{
  flex:7;
}
.DialogInner .el-input input{
  width:90%;
}
.DialogInner .el-textarea{
  flex:7;
}
.DialogInner .el-textarea .el-textarea__inner{
  width:90%;
}
</style>