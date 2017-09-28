<template>
  <div class="accountControl">
    <el-form :inline="true">
            <el-form-item label='是否退货'>
                <el-select v-model="searches.returnGoods" size='small'>        
                    <el-option
                    v-for='(val, key) in returnGoodsList'
                    :key='key'
                    :value='val.inner'
                    :label='val.inner'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='结算状态'>
                <el-select v-model="searches.status" size='small'>        
                    <el-option
                    v-for='(val, key) in statusList'
                    :key='key'
                    :value='key'
                    :label='val'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='发货商家'>
                <el-select v-model="searches.owner" size='small'>        
                    <el-option
                    v-for='(val, key) in ownerList'
                    :key='key'
                    :value='val.inner'
                    :label='val.inner'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='出货时间'>
                <el-date-picker
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
            </el-form-item>
        </el-form>
        <el-form :inline='true'>
            <el-form-item label='至'>
                <el-date-picker
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
            </el-form-item>
            <el-form-item label='退货时间'>
                <el-date-picker
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
            </el-form-item>
            <el-form-item label='至'>
                <el-date-picker
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
            </el-form-item>
            <el-form-item label='关键字'>
                <el-input size='small' v-model='searches.mainIdea'>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size='small' @click='Search' >搜索</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'accountControl',
  data () {
    return {
      searches: {
        status: '',
        returnGoods: '',
        owner: '',
        mainIdea: ''
      },
      returnGoodsList: [
        {
          inner: '是'
        },
        {
          inner: '否'
        }
      ],
      statusList: {
        0: '已结算',
        1: '未结算'
      },
      ownerList: [
        {
          inner: '申通'
        },
        {
          inner: '韵达'
        }
      ]
    }
  },
  methods: {
    ...mapActions(['accountSetCondition', 'accountSearch']),
    Search () {
      this.accountSetCondition(this.searches)
      this.accountSearch()
    }
  }
}
</script>
<style>
.accountControl{
    padding:20px 0;
}
.accountControl .el-input{
    width:180px;
}
.accountControl label{
    color:#616e7e;
}
</style>
