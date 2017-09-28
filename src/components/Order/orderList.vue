<template>
  <div class="list">
      <el-table :data='arr'>
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
            <el-table-column label="商家操作" :width='150'>
                <template scope="scope">
                    <el-button
                    size="small"
                    @click='edits("shop")'>编辑</el-button>
                    <el-button
                    size="small"
                    type="danger"
                    >确认收货</el-button>
                </template>
            </el-table-column>
      </el-table> 
      <el-dialog title="编辑" :visible.sync="dialogFormVisible">
        <editDialog></editDialog>
              <el-button type="primary" @click='dialogFormVisible = false'>保存</el-button>
              <el-button @click='dialogFormVisible = false'>取消</el-button>
      </el-dialog>
  </div>
</template>
<script>
import editDialog from './editDialog.vue'
import fetcher from '../../tools/fetcher'
import { mapActions } from 'vuex'
export default {
  name: 'list',
  components: {
    editDialog
  },
  data () {
    return {
      dialogFormVisible: false,
      arr: [],
      orderTitle: {
        orderNo: ['订单号'],
        productName: ['商品名称'],
        skuCode: ['Sku'],
        outSkuId: ['货号'],
        orderCash: ['订单金额'],
        orderStatus: ['订单状态'],
        benefitWay: ['优惠方式'],
        benefitCash: ['优惠金额'],
        payWay: ['支付方式'],
        orderTime: ['创建时间'],
        buyer: ['购买人'],
        userId: ['用户id'],
        consignee: ['收货人'],
        address: ['收货地址'],
        contact: ['联系方式'],
        remark: ['备注'],
        manu: ['发货商家'],
        manuId: ['商家id'],
        deliveryTime: ['发货时间'],
        logistics: ['物流'],
        logisticsNo: ['物流单号'],
        // supplyRemark: ['商家备注'],
        refundsStatus: ['退货状态']
      },
      orderList: [{
        number: 1,
        order: '1',
        name: '测试',
        sku: '1',
        goodsId: 1,
        amount: '128.00',
        status: '交易成功',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 2,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 3,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 4,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 5,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 6,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 7,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      },
      {
        number: 8,
        order: '2',
        name: '测试2',
        sku: '2',
        goodsId: 2,
        amount: '128.00',
        status: '审核中',
        way: '免息券',
        favour: '10',
        payway: '信用支付',
        createTime: '2017-06-15 12:00:00',
        user: 'hj',
        salesReturn: '退货'
      }]
    }
  },
  methods: {
    ...mapActions(['setEditType']),
    edits (type) {
      this.dialogFormVisible = true
      this.setEditType(type)
    }
  },
  created () {
    // this.arr = this.orderList
    fetcher.get('/wecashMarketSystem/system/product/order/list').then((res) => {
      this.arr = res.data
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


