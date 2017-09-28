<template>
    <div id="order">
       <orderExcel></orderExcel>
       <orderControl></orderControl> 
       <orderList></orderList>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="5"
            layout="prev, pager, next"
            :total="orderList.length">
        </el-pagination>
    </div>
</template>
<script>
import orderExcel from './orderExcel.vue'
import orderControl from './orderControl.vue'
import orderList from './orderList.vue'
export default {
  name: 'order',
  components: {
    orderExcel,
    orderControl,
    orderList
  },
  data () {
    return {
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
    handleSizeChange: function (val) {
      console.log(val)
    },
    handleCurrentChange: function (val) {
      this.arr = this.orderList.slice((val - 1) * 5, (val - 1) * 5 + 5)
    }
  },
  created () {
    this.arr = this.orderList.slice(0, 5)
  }
}
</script>
<style>
*{
    margin:0;
    padding:0;
    list-style: none;
    text-decoration: none;
}
#order{
    width:100%;
    height:100%;
}
#order .el-table__header-wrapper table thead tr th div{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
#order .el-table__body-wrapper table tbody tr td,#order .el-table__header-wrapper table thead tr th{
    text-align: center;
}
#order .el-table__body-wrapper table tbody tr td div{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>


