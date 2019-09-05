<template>
  <div class="footer">
    <ul>
      <li>登录</li>
      <li>注册</li>
      <li>更多</li>
      <li>反馈</li>
    </ul>
    <div class="copyright">
      copyright © 2000-2019 gome.com.cn
      <br />
      <span>如有侵权，联系删除</span>
    </div>

    <div class="nav">
      <div @click="toggle('home')">
        <img src="https://gfs11.gomein.net.cn/wireless/T1kx_QBsDT1RCvBVdK_48_48.png" alt="home" />
        <p class="home">首页</p>
      </div>
      <div @click="toggle('fenlei')">
        <img src="https://gfs11.gomein.net.cn/wireless/T1_5AbBQYv1RCvBVdK_48_48.png" alt="classift" />
        <p>分类</p>
      </div>
      <div @click="toggle('yougou')">
        <img src="https://gfs12.gomein.net.cn/wireless/T1UTZvBQdQ1RCvBVdK_48_48.png" alt="good" />
        <p>优选</p>
      </div>
      <div @click="toggle('shopping')">
        <img src="https://gfs12.gomein.net.cn/wireless/T1SFVbBbWv1RCvBVdK_48_48.png" alt="shopping" />
        <p>购物车</p>
      </div>
      <div @click="toggle('mine')">
        <img src="https://gfs10.gomein.net.cn/wireless/T1KTYvBTEQ1RCvBVdK_48_48.png" alt="mine" />
        <p>我的</p>
      </div>
    </div>

    <div class="go-top">
      <a href="#top">
        <span></span>
        <i class="fa fa-chevron-up"></i>
        <br />顶部
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
    toggle(target) {
      console.log(target);
      // 跳转对应name的路由组件
      console.log(this.userid);
      
      if (target == "mine" && !this.userid) {
        this.$router.push({ name: 'loginuser' });
        return
      }
      this.$router.push({ name: target });
    }
  }
};
</script>

<style scoped>
.footer {
  font-size: 0.2rem;
  padding: 0.3rem;
  background: #fff;
  color: #888;
  margin-bottom: 1.3rem;
}
.footer ul {
  display: flex;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #ccc;
}
.footer ul li {
  width: 25%;
  text-align: center;
  border-right: 1px solid #ccc;
}
.footer ul li:last-child {
  border: none;
}
.copyright {
  margin-top: 0.3rem;
  text-align: center;
}

.nav {
  display: flex;
  position: fixed;
  padding: 0.1rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  z-index: 10;
  border-top: 1px solid #e4e4e4;
}
.nav div {
  width: 20%;
  padding: 0.1rem;
  text-align: center;
}
.nav p {
  margin: 0;
}
.nav .home {
  color: #ff0027;
}
.nav div img {
  width: 0.57rem;
}

.go-top {
  padding: 0.2rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 1rem;
  height: 1rem;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 0;
  color: rgb(153, 153, 153);
}
.go-top i {
  font-size: 0.3rem;
  color: rgb(153, 153, 153);
}
.go-top span {
  position: absolute;
  top: 0.2rem;
  right: 0.36rem;
  display: inline-block;
  width: 0.2rem;
  border: 1px solid #ccc;
}
</style>