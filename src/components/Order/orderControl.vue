<template>
    <div class="control">
        <el-form :inline="true">
            <el-form-item label='订单状态'>
                <el-select v-model="searches.status" size='small'>        
                    <el-option
                    v-for='(val, key) in filt'
                    :key='key'
                    :value='val.inner'
                    :label='val.inner'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='收货城市'>
                <el-select v-model="searches.city" size='small'>        
                    <el-option
                    v-for='(val, key) in filtCity'
                    :key='key'
                    :value='val.inner'
                    :label='val.inner'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='优惠方式'>
                <el-select v-model="searches.style" size='small'>        
                    <el-option
                    v-for='(val, key) in freeStyle'
                    :key='key'
                    :value='val.inner'
                    :label='val.inner'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='支付时间'>
                <el-date-picker
                    v-model="searches.payTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </el-form-item>
        </el-form>
        <el-form :inline='true'>
            <el-form-item label='发货商家'>
                <el-input size='small' v-model='searches.send'>
                </el-input>
            </el-form-item>
            <el-form-item label='关键字'>
                <el-input size='small' v-model='searches.mainIdea'>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size='small'>搜索</el-button>
                <el-button type="primary" size='small'>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'control',
  data () {
    return {
      searches: {
        status: '',
        city: '',
        style: '',
        payTime: '',
        send: '',
        mainIdea: ''
      },
      filt: [
        {
          inner: '审核中'
        },
        {
          inner: '审核失败'
        },
        {
          inner: '待发货',
          code: 2
        },
        {
          inner: '已发货',
          code: 3
        },
        {
          inner: '交易成功'
        }
      ],
      filtCity: [
        {
          inner: '北京'
        },
        {
          inner: '上海'
        },
        {
          inner: '广州'
        },
        {
          inner: '葫芦岛'
        }
      ],
      freeStyle: [
        {
          inner: '免息券'
        },
        {
          inner: '优惠券'
        }
      ]
    }
  }
}
</script>
<style>
.control{
    padding:20px 0;
}
.control .el-input{
    width:180px;
}
.control label{
    color:#616e7e;
}
</style>
