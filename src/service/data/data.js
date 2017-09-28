let data = []
for (let i = 0; i < 100; i++) {
  let obj = {}
  obj = Object.assign({}, {
    SerialNum: i,
    orderNo: i + 1,
    productName: i % 3 === 1 ? '移动' : '联通',
    articleNumber: '货号' + i,
    supplier: '供货商',
    settleCash: i % 4 === 0 ? '未结算' : '已结算',
    salePrice: '商品售价',
    billCash: '账单金额',
    benefitWays: '优惠方式',
    inCome: '闪银收入',
    isSettlement: '结算状态',
    payType: '支付方式',
    orderTime: '下单时间',
    kdCom: '物流公司',
    kdNum: '物流单号',
    sendGoodTime: '发货时间',
    isRefund: i % 3 === 0 ? '退货' : '不退货',
    refundReason: '退货原因',
    refundTime: '退货时间'
  })
  data.push(obj)
}
export default data
