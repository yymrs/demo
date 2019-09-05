<template>
  <div>
    <van-nav-bar title left-arrow @click-left="onClickLeft" />
    <div class="register">
      <!-- 注册 -->
      <div class="logo">
        <img src="https://misc.gomein.net.cn/plus/images/u/login/logo_xh.png?v=20190624" alt="logo" />
      </div>
      <form method="post">
        <section>
          <label for="user">用户：</label>
          <input type="text" v-model="user" maxlength="20" name="user" id="user" />
        </section>
        <section>
          <label for="pass">密码：</label>
          <input type="password" v-model="pass" maxlength="20" name="pass" id="pass" />
        </section>
        <section>
          <label for="passok">确认密码：</label>
          <input type="password" v-model="passok" maxlength="20" name="passok" id="passok" />
        </section>

        <button @click.prevent="postUser">注册</button>
      </form>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
import { mapMutations} from 'vuex'
export default {
  data() {
    return {
      user: "",
      pass: "",
      passok: ""
    };
  },
  methods: {
    ...mapMutations(['setUserId']),
    onClickLeft(){
      window.history.go(-1)
    },
    postUser() {
      var user = this.user;
      var pass = this.pass;
      var passok = this.passok;
      if (!user || !pass || !passok) {
        Toast({
          message:'信息不全'
        })
        return
      }
      if(pass!=passok){
         Toast({
          message:'两次密码不一致'
        })
        return
      }
      var data = {
        user,
        pass,passok
      }
      console.log(this);
      this.axios.post('/api/users/user',data).then(response=>{
        console.log(response);
        if(response.data.code!=200){
          Toast('注册失败')
          return
        }
        Toast('注册成功')
        this.setUserId(response.data.result[0].userid)
        this.$router.push({
          name:'mine'
        })
      })
    }
  }
};
</script>

<style scoped>
.register {
  margin: 0 auto;
  max-width: 6rem;
  font-size: 0.2rem;
}
.logo {
  padding: 0.2rem;
}
.van-nav-bar__arrow {
  font-size: 0.6rem;
}
input {
  width: 70%;
  margin-left: 0.8rem;
}
#passok {
  margin-left: 0.3rem;
}
section {
  margin-top: 0.2rem;
}
button {
  margin-top: 0.3rem;
  width: 100%;
  padding: 0.2rem;
  background: #ff94cb;
  color: #fff;
  border-radius: 0.4rem;
  border: none;
}
</style>
