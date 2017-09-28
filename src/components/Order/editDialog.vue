<template>
  <div class="dialog">
    <el-form ref="form">
        <el-form-item v-if='editType === "service"'>
          <ul class="DialogInner">
            <li>
              <label for="">收货人</label>
              <el-input></el-input>
            </li>
            <li>
              <label for="">收货地址</label>
              <el-input></el-input>
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
              <label for="">物流公司</label>
              <el-input></el-input>
            </li>
            <li>
              <label for="">物流单号</label>
              <el-input></el-input>
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
  props: ['row'],
  computed: mapState({
    editType: ({order}) => order.editType
  }),
  mounted () {
    console.log(this.row)
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



