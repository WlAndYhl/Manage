<template>
  <div class="account">
    <accountControl></accountControl>
    <accountList></accountList>
    <div class="accountPage">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
  </div>
</template>
<script>
import accountControl from './accountControl.vue'
import accountList from './accountList.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'account',
  components: {
    accountControl,
    accountList
  },
  computed: mapState({
    total: ({account}) => account.total
  }),
  methods: {
    handleSizeChange (val) {
      // this.pageSize = val
      // this.$store.dispatch({
      //   type: 'accountSetCondition',
      //   page: this.pageNum,
      //   size: val
      // })
      this.accountSetCondition({
        pageSize: val
      })
      this.accountSearch()
    },
    handleCurrentChange (val) {
      // this.$store.dispatch({
      //   type: 'accountSetCondition',
      //   page: val,
      //   size: this.pagesize
      // })
      this.accountSetCondition({
        pageNum: val
      })
      this.accountSearch()
    },
    ...mapActions(['accountSetCondition', 'accountSearch'])
  }
}
</script>
<style>
.accountPage{
    text-align: center;
}
.account .el-table__header-wrapper table thead tr th div{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.account .el-table__body-wrapper table tbody tr td,.account .el-table__header-wrapper table thead tr th{
    text-align: center;
}
.account .el-table__body-wrapper table tbody tr td div{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>


