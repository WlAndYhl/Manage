<template>
    <div id="login">
        <div class="loginBg">
            <div id="particles-js"></div>

            <!-- stats - count particles -->
            <div class="count-particles">
            <span class="js-count-particles"></span>
            </div>
            <div class="middleLogin">
                <h3>Wecash Mall</h3>
                  <form class="userInfo">
                    <div class="user">
                      <label :class='{"focus-on": activeA, "focus-off":noactiveA}'>用户名</label>
                      <input type='text' @focus='fnUser' @blur='blurUser' v-model='username'></input>
                      <div class="tip"><div :class='{"left": tipShow}'><p></p></div><div :class='{"right": tipShow}'><p></p></div>
                        <p v-if='tipShow'>输入错误</p>
                      </div>
                    </div>
                    <div class="pwd">
                      <label :class='{"focus-on": activeB, "focus-off":noactiveB}'>登录密码</label>
                      <input type='password' @focus='fnPwd' @blur="blurPwd" v-model="password"></input>
                    </div>
                    <button class="btn" @click='log' type='button'>登录</button>
                  </form>
                                
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      tipShow: false,
      litTip: false,
      activeA: false,
      noactiveA: false,
      activeB: false,
      noactiveB: false,
      npShow: false,
      canSubmit: true
    }
  },
  methods: {
    fnUser: function () {
      var user = document.getElementsByClassName('user')[0]
      var userInput = user.getElementsByTagName('input')[0]
      if (userInput.value === '') {
        this.activeA = true
        this.noactiveA = false
        user.style.borderColor = '#34a3c1'
        this.tipShow = false
      }
    },
    blurUser: function () {
      var user = document.getElementsByClassName('user')[0]
      var userInput = user.getElementsByTagName('input')[0]
      if (userInput.value === '') {
        this.activeA = false
        this.noactiveA = true
        user.style.borderColor = '#b8edff'
      }
    },
    fnPwd: function () {
      var pwd = document.getElementsByClassName('pwd')[0]
      var pwdInput = pwd.getElementsByTagName('input')[0]
      if (pwdInput.value === '') {
        pwd.style.borderColor = '#34a3c1'
        this.activeB = true
        this.noactiveB = false
      }
    },
    blurPwd: function () {
      var pwd = document.getElementsByClassName('pwd')[0]
      var pwdInput = pwd.getElementsByTagName('input')[0]
      if (pwdInput.value === '') {
        pwd.style.borderColor = '#b8edff'
        this.activeB = false
        this.noactiveB = true
      }
    },
    log: function () {
      var pwd = document.getElementsByClassName('pwd')[0]
      var pwdInput = pwd.getElementsByTagName('input')[0]
      var user = document.getElementsByClassName('user')[0]
      var userInput = user.getElementsByTagName('input')[0]
      if (!this.canSubmit) {
        return false
      }
      if (pwdInput.value === '' || userInput.value === '') {
        this.tipShow = true
        return false
      } else {
        this.tipShow = false
        this.$http.post('/wecashMarketSystem/auth/login', {
          username: this.username,
          password: this.password
        }).then((res) => {
          this.canSubmit = false
          if (Number(res.successful)) {
            localStorage.setItem('user', this.username)
            localStorage.setItem('market_TOKEN', res.data.headerValue)
            this.$router.push('/home/order')
          } else {
            this.canSubmit = true
          }
        })
      }
    }
  },
  mounted () {
    particlesJS.load('particles-js', './static/particles.json')
  }
}
</script>
<style>
*{
    margin:0;
    padding:0;
}
input::-webkit-input-placeholder{
        color: white;
    }
.middleLogin{
    width:400px;
    height:300px;
    background: rgba(22,66,93,0.7);
    position: absolute;
    left:50%;
    top:50%;
    margin:-150px 0 0 -200px;
    border-radius:8px;
    box-shadow:2px 2px #1d5379;
}
.middleLogin h3{
    font-size:17px;
    font-weight:normal;
    color:#d9f8ff;
    text-align: center;
    margin-top:30px;
}
.middleLogin .userInfo{
  width:60%;
  height:200px;
  margin-left:20%;
}
.middleLogin .userInfo .user{
    width:100%;
    height:30px;   
    border-bottom:1px solid #b8edff;
    margin-top:40px;
    position:relative;
}
.middleLogin .userInfo .user label{
    position: absolute;
    left:0;
    color:#fff;
    font-size:14px;
}
.middleLogin .userInfo .pwd label{
    position: absolute;
    left:0;
    color:#fff;
    font-size:14px;
}
.middleLogin .userInfo .user input{
    width:100%;
    height:30px;
    line-height: 30px;
    font-size:14px;
    color:#fff;
    border:none;
    background: none;
    outline:0;
    text-indent: 5px;
}
.middleLogin .userInfo .pwd{
    width:100%;
    height:30px;
    border-bottom:1px solid #b8edff;
    margin-top:25px;
    position: relative;
}
.middleLogin .userInfo .pwd input{
    width:100%;
    height:30px;
    line-height: 30px;
    font-size:14px;
    color:#fff;
    border:none;
    background: none;
    outline:0;
    text-indent: 5px;
}
.middleLogin .userInfo .btn{
    width:100%;
    height:30px;
    background:rgba(12,174,199,0.8);
    border:none;
    margin-top:30px;
    color:#fff;
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../../images/Bigbg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
}
#login{
    width:100%;
    height:100%;       
}
.loginBg{
    width:100%;
    height:100%;
    background: url(../../images/Bigbg.jpg);
    background-size:100% 100%; 
}
.middleLogin .userInfo .user .focus-on{
  transform: scale(0.75) translateY(-20px);
  transition: 1s all ease;
  color:#24a7c5;
}
.middleLogin .userInfo .user .focus-off{
  transform: scale(1) translateY(0);
  transition: 1s all ease;
  color:#fff;
}
.middleLogin .userInfo .pwd .focus-on{
  transform: scale(0.75) translateY(-20px);
  transition: 1s all ease;
  color:#24a7c5;
}
.middleLogin .userInfo .pwd .focus-off{
  transform: scale(1) translateY(0);
  transition: 1s all ease;
  color:#fff;
}
.tip{
  position: absolute;
  bottom:-1px;
  width:100%;
  height:1px;
  text-align: center;
  font-size:12px;
  color:red;
}
.tip .left{
  height:1px;
  width:50%;
  float: left;
  transform: rotate(180deg);
}
.tip .left p{
  height:1px;
  background: red;
  animation:load 2s ease;
}
.tip .right{
  height:1px;
  width:50%;
  float:left;
}
.tip .right p{
  height:1px;
  background: red;
  animation:load 2s ease;
}
.tip .left .np{
  height:1px;
  background: red;
  animation:reload 2s ease;
}
.tip .right .np{
  height:1px;
  background: red;
  animation:reload 2s ease;
}
@keyframes load {
  from{
    width:0%;
  }
  to{
    width: 100%;
  }
}
@keyframes reload {
  from{
    width:100%;
  }
  to{
    width: 0%;
  }
}
</style>


