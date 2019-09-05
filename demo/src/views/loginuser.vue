<template>
  <div class="mine">
    <div class="content">
      <div class="logo">
        <img src="https://misc.gomein.net.cn/plus/images/u/login/logo_xh.png?v=20190624" alt="logo" />
      </div>
      <div class="logotype">
        <a href="javascript:;" :class="{current: loginMode}" @click="toggle(true)">账号密码登录</a>
        <a href="javascript:;" :class="{current: !loginMode}" @click="toggle(false)">短信验证码登录</a>
      </div>

      <form action method="post">
        <div class="item" :class="{current: loginMode}">
          <section>
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="用户名" v-model="user_name" />
            </section>
            <section class="login-verification">
              <input type="password" maxlength="20" placeholder="密码" v-if="pwdMode" v-model="pwd" />
              <input type="text" maxlength="20" placeholder="密码" v-else v-model="pwd" />
              <div class="switch-show">
                <img
                  @click.prevent="dealPwdMode(false)"
                  :class="{on: pwdMode}"
                  src="https://misc.gomein.net.cn/plus/style/ucenter/css/icon_phone.2b4394b85b.png"
                  alt
                  width="20"
                />
                <img
                  @click.prevent="dealPwdMode(true)"
                  :class="{on: !pwdMode}"
                  src="https://misc.gomein.net.cn/plus/images/u/login/icon_pwd.png?v=2017092001"
                  alt
                  width="20"
                />
              </div>
            </section>
            <section class="login-message">
              <input type="text" maxlength="4" placeholder="验证码" v-model="captcha" />
              <img
                class="get-verification"
                src="http://localhost:3000/users/captcha"
                alt="captcha"
                @click.prevent="getCaptcha()"
                ref="captcha"
              />
            </section>
            <router-link to="/register" class="register">注册</router-link>
          </section>
        </div>
        <div class="item" :class="{current: !loginMode}">
          <section class="login-message">
            <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
            <button
              class="get-verification"
              v-if="!countDown"
              :class="{phone_right: phoneRight}"
              @click.prevent="getVerifyCode()"
            >获取验证码</button>
            <button v-else disabled="disabled" class="get-verification">已发送({{countDown}}s)</button>
          </section>
          <section class="login-verification">
            <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
          </section>
          <section class="login-hint">
            <span>
              未注册手机登录成功将自动注册，且代表您已同意协议
              <a href="https://m.gome.com.cn/register_boder.html">《国美平台服务协议》</a>
              <a href="https://m.gome.com.cn/register_boder_privacy.html">《国美平台隐私政策》</a>
              <a href="https://m.gome.com.cn/meifubao_service_agreement.html">《美付宝服务协议》</a>
              <a style="display:none;" href="/privacy_policy.html">《国美隐私政策》</a>
            </span>
          </section>
        </div>

        <button class="login-submit" :class="{current: loginMode}" @click.prevent="login()">登录</button>
        <button
          class="login-submit"
          :class="{current: !loginMode}"
          @click.prevent="login()"
        >同意协议注册并登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loginMode: true, // 登录方式, true 手机验证码登录, flase 账号登录
      phone: "", // 手机号码
      countDown: 0, // 倒计时
      code: "", // 验证码
      user_name: "", // 用户名
      pwd: "", // 密码
      pwdMode: true, // 密码的显示方式, true 密文  false 明文
      captcha: "", // 图形验证码
      userInfo: {}
    };
  },
  computed: {
    phoneRight() {
      return /^1[34578]\d{9}$/.test(this.phone);
    }
  },

  methods: {
    ...mapMutations(["setUserId"]),
    login() {
      var user_name = this.user_name;
      var pwd = this.pwd;
      // var captcha = this.captcha;
      var data = {
        user_name,
        pwd
      };
      if (this.loginMode) {
        //账号密码登录
        if (!user_name || !pwd) {
          Toast("信息不全");
          return;
        }
        this.axios.post("/api/users/login", data).then(resolve => {
          console.log(resolve);
          if (resolve.data.code != 200) {
            Toast("账号或密码有误");
            return;
          }
          Toast("登录成功");
          this.setUserId(resolve.data.result[0].userid);
          this.$router.push({
            name: "mine"
          });
        });
      } else {
        //手机验证码登录
        var data2 = {
          phone: this.phone,
          code: this.code
        };
        if (!this.phone) {
          Toast("请输入手机号");
          return;
        } else if (!this.phoneRight) {
          Toast("请输入正确的手机号码!");
          return;
        }
        if (!this.code) {
          Toast("请输入验证码!");
          return;
        } else if (!/^\d{6}$/gi.test(this.code)) {
          Toast("请输入正确的验证码!");
          return;
        }
        //发起请求
        this.axios.post("/api/users/login_code", data2).then(resolve => {
          if (resolve.data.code == 200) {
            Toast("登录成功");
            // this.setUserId(resolve.data.result[0].userid);
            this.$router.push({
              name: "mine"
            });
          }
          console.log(resolve);
        });
      }
    },
    getVerifyCode() {
      console.log("dsd");
      if (this.phoneRight) {
        this.countDown = 60;
        // 2.2 设置定时器
        this.intervalId = setInterval(() => {
          this.countDown--;
          if (this.countDown === 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);

        // 2.3 获取短信验证码

        this.axios
          .get(`/api/users/send_code?phone='${this.phone}'`)
          .then(resolve => {
            console.log(resolve);
          });

        // 2.4 获取验证码失败
        // if(resolve.err_code === 0){
        //    // console.log(result.message);
        //   Toast({
        //     message: '已发送',
        //     position: 'center',
        //     duration: 3000
        //   });

        //   // 2.5 后续处理
        setTimeout(() => {
          clearInterval(this.intervalId);
          this.countDown = 0;
        }, 3000);
      }
    },
    onClickLeft() {
      history.go(-1);
    },
    toggle(flag) {
      this.loginMode = flag;
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/users/captcha?time=" + new Date();
    }
  }
};
</script>


<style scoped >
.item,
.login-submit {
  display: none;
}
.van-nav-bar__arrow {
  font-size: 0.6rem;
}

.mine {
  font-size: 0.2rem;
  background-color: #f2f2f2;
  height: 100vh;
}
.register {
  display: inline-block;
  color: #fff;
  background: #666;
  border-radius: 0.1rem;
  padding: 0.1rem;
}
.current {
  display: block;
}

.content {
  padding: 0 1rem;
}
.van-nav-bar__arrow {
  font-size: 0.6rem;
}
.logo {
  padding: 0 1.4rem 0.13rem 1.4rem;
  font-size: 0;
}
.logo img {
  width: 100%;
}
.logotype {
  text-align: center;
}
.logotype .current {
  border-bottom: 1px solid #ff94cb;
}
.logotype a {
  display: inline-block;
  padding: 0 0.3rem 0.2rem;
}

.login-message input {
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem 0.4rem;
  border: none;
  border-bottom: 1px solid #ccc;
}
.login-message {
  position: relative;
}
.login-message img {
  position: absolute;
  bottom: 0;
  right: 0;
}
.login-message button {
  position: absolute;
  right: 0;
  top: 0rem;
  padding: 0.2rem;
  border: none;
  background: transparent;
  color: #ccc;
}
.login-verification input:nth-of-type(1) {
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 0.2rem;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
}
.login-hint {
  color: #ccc;
}
.login-hint a {
  color: #78bee9;
}
.switch-show img {
  position: absolute;
  top: 2.6rem;
}
.switch-show img:nth-child(2) {
  top: 3.5rem;
}

.login-submit {
  margin-top: 0.2rem;
  width: 100%;
  padding: 0.2rem;
  border-radius: 0.4rem;
  border: none;
  background: -webkit-linear-gradient(left, #ff94cb 0, #ff80aa 100%);
  color: #fff;
}
</style>