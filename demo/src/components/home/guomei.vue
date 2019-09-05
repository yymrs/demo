<template>
  <div class="guomei-container">
    <div class="guomei-toutiao">
      <div class="guomei-toutiao-left">
        国美头条
        <span></span>
      </div>
      <div class="guomei-toutiao-right">
        <van-swipe
          style="height:2rem; width:60%"
          :autoplay="3000"
          vertical
          :loop="true"
          :show-indicators="false"
        >
          <van-swipe-item>
            <span class="vip">会员专属</span> 美豆兑海尔品牌立减20元
          </van-swipe-item>
          <van-swipe-item>
            <span class="vip">国美黄金</span> 投资金条 优惠购金
          </van-swipe-item>
          <van-swipe-item>
            <span class="vip">云闪付</span> 满20立减10元 先到先得
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="guomei-content">
      <div class="gto item">
        <div class="gto-header">
          <h2>国美秒杀</h2>
          <span>{{time}}</span>
        </div>
        <ul>
          <li>
            <img src="https://gfs17.gomein.net.cn/T1UKhQB5bv1RCvBVdK_160.jpg" alt="gto" />
            <p>￥69</p>
            <p>
              <s>￥69.8</s>
            </p>
          </li>
          <li>
            <img src="https://gfs17.gomein.net.cn/T1OsxsBmJT1RCvBVdK_160.jpg" alt="gto" />
            <p>￥289</p>
            <p>
              <s>￥299</s>
            </p>
          </li>
          <li>
            <img src="https://gfs17.gomein.net.cn/T19PhTByhv1RCvBVdK_160.jpg" alt="gto" />
            <p>￥169</p>
            <p>
              <s>￥179</s>
            </p>
          </li>
        </ul>
      </div>
      <div class="newproduct item">
        <div class="newproduct-text">
          <h2>新品抢先</h2>
          <span>华为手环限量抢</span>
        </div>
        <div class="newproduct-img">
          <img src="https://gfs12.gomein.net.cn/wireless/T1LgKXBjxT1RCvBVdK_355_144.jpg" alt="手环" />
        </div>
      </div>
      <div class="newproduct item">
        <div class="newproduct-text">
          <h2>值得买</h2>
          <span>大家都在买</span>
        </div>
        <div class="newproduct-img">
          <img src="https://gfs13.gomein.net.cn/wireless/T1hvLsB_Dv1RCvBVdK_355_144.jpg" alt="手环" />
        </div>
      </div>
      <div class="newproduct item">
        <div class="newproduct-text">
          <h2>品牌特卖</h2>
          <span>海尔 领卷至高减1000元</span>
        </div>
        <div class="newproduct-img">
          <img src="https://gfs12.gomein.net.cn/wireless/T1XnVXBXAT1RCvBVdK_355_144.jpg" alt="手环" />
        </div>
      </div>
    </div>
    <guomeifooter></guomeifooter>
  </div>
</template>

<script>
import footer from "./guomei-footer";
export default {
  data() {
    return {
      time: "02:34:54"
    };
  },
  components: {
    guomeifooter:footer
  }
};
</script>

<style  scoped>
.guomei-toutiao {
  font-size: 0.4rem;
  display: flex;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  background: #fff;
  margin-top: 0.2rem;
  border-bottom: 1px solid #ccc;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
}
.van-swipe__track {
  height: 0.5rem;
}
.guomei-toutiao-left {
  width: 4rem;
}
.guomei-toutiao-left span {
  width: 0.1rem;
  border-right: 1px solid #ccc;
}
.guomei-toutiao-right {
  margin-left: 0.1rem;
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
}
.vip {
  margin-right: 0.1rem;
  color: #f20c56;
  background: #ffdce7;
  padding: 0.1rem;
  border-radius: 0.09rem;
}

.van-swipe {
  width: 100% !important;
}
.van-swipe-item {
  height: 100%;
  font-size: 0.2rem;
  width: 100% !important;
}
/* //国美 */
.guomei-content {
  /* padding: 0 0.2rem; */
  font-size: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
}
.guomei-content p {
  margin: 0;
}
.guomei-content .gto {
}
.gto-header {
  margin-top: 0;
  margin-left: 0.1rem;
}
.gto-header h2 {
  margin-top: 0;
}
.guomei-content .gto-header {
  display: flex;
  align-items: center;
}
.guomei-content .gto-header span {
  padding: 0.04rem 0.2rem;
  background: #fff;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
  color: #f20c56;
  border: 1px solid #f20c56;
}
.guomei-content .item {
  width: 49.8%;
  padding-top: 0.2rem;
}
.guomei-content .gto ul {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.guomei-content .gto ul li {
  /* border: 1px solid red; */
  padding-left: 0.1rem;
}
.guomei-content .gto ul li p:nth-of-type(1) {
  color: #000;
}
.guomei-content .gto ul li p:nth-of-type(2) {
  color: #ccc;
}
.guomei-content .gto ul li img {
  font-size: 0;
  width: 1.1rem;
}
.newproduct {
  display: flex;
  flex-wrap: wrap;
  height: 2.8rem;
}
.newproduct-img {
  width: 100%;
}
.newproduct-img img {
  width: 100%;
}
.newproduct-text {
  padding-left: 0.2rem;
}
.newproduct-text h2 {
  margin: 0;
  color: #48a6ff;
}

</style>