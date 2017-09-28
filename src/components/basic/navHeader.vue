<template>
    <header>
      <h3>{{title}}</h3>
        <div class="user">   
            <span>{{username}}</span>
            <span @click='logout'>退出</span>
        </div>
    </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      username: localStorage.user,
      canSubmit: true
    }
  },
  computed: mapState({
    title: ({title}) => title.title
  }),
  methods: {
    logout () {
      if (!this.canSubmit) {
        return false
      }
      this.canSubmit = false
      this.$http.post('/wecashMarketSystem/auth/logout').then((res) => {
        this.canSubmit = false
        if (Number(res.successful)) {
          localStorage.removeItem('user')
          localStorage.removeItem('market_TOKEN')
          this.$router.push('/login')
        } else {
          this.$message(res.errorDescription)
        }
      }, () => {
        this.canSubmit = true
      })
    }
  }
}
</script>
<style scoped>
header{
    position:fixed;
    top:0;
    left:240px;
    z-index: 4;
    width:100%;
    height:65px;
    color:#fff;
    line-height: 65px;
    background-color: #207fde;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.14);
}
h3 {
    float: left;
    margin: 0;
    padding:0;
    margin-left:10px;
}
.user{
    float: right;
    font-size:18px;
    margin-right: 270px;
}
.user span{
    display: inline-block;
    padding: 0 10px;
    cursor:pointer;
}
</style>

