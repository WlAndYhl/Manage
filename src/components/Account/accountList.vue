<template>
  <div class="accountList">
    <el-table :data='renderList'>
            <el-table-column
                v-for='(v, k) in orderTitle'
                :label='v[0]'
                :prop='k'
                :key='k'
                :width='v[1]'
                align=center
            >
            </el-table-column>
            <el-table-column label="客户操作" :width='150'>
                <template scope="scope">
                    <el-button
                    size="small"
                    @click='edits("service", scope.$index)'>编辑</el-button>
                    <el-button
                    size="small"
                    type="danger"
                    >退货</el-button>
                </template>
            </el-table-column>
            <el-table-column label="商家操作" :width='170'>
                <template scope="scope">
                    <el-button
                    size="small"
                    @click='edits("shop", scope.$index)'>编辑</el-button>
                    <el-button
                    size="small"
                    type="danger"
                    >确认收货</el-button>
                </template>
            </el-table-column>
      </el-table> 
      <el-dialog title="编辑" :visible.sync="dialogFormVisible">
        <accountDialog @changeV = 'getV'></accountDialog>
              <el-button type="primary" @click='save'>保存</el-button>
              <el-button @click='dialogFormVisible = false'>取消</el-button>
      </el-dialog>
  </div>
</template>
<script>
import accountDialog from './accountDialog.vue'
import { account } from '../../assets/js/modules.js'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'list',
  components: {
    accountDialog
  },
  computed: mapState({
    renderList: ({account}) => account.data
  }),
  data () {
    return {
      dialogFormVisible: false,
      orderTitle: account,
      empty: ''
    }
  },
  methods: {
    ...mapActions(['setEditType', 'accountSearch']),
    edits (type, ind) {
      this.dialogFormVisible = true
      this.setEditType({
        type: type,
        ind: ind,
        data: this.renderList
      })
    },
    filter (k) {
      console.log(k)
    },
    getV (val) {
      this.empty = val
    },
    save () {
      axios.get('/changeval', {wl: this.empty}).then((res) => {
        console.log(res)
      })
      this.dialogFormVisible = false
    }
  },
  mounted () {
    this.accountSearch({
      page: 1,
      size: 10
    })
  }
}
</script>
<style>
.el-dialog{
  width:350px;
}
.el-dialog__body .el-button--primary{
  margin-left:50%;
}
</style>
