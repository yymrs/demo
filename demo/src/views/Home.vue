<template>
  <div class="home" id="top">
    <!-- 广告 -->
    <AD></AD>
    <!-- 搜索 -->
    <van-sticky class="search-fixed">
      <SEARCH></SEARCH>
    </van-sticky>
    <!-- <SEARCH></SEARCH> -->
    <!-- 轮播图 -->
    <SWIPE></SWIPE>
    <!-- shopping导航 -->
    <NAV class="swipe"></NAV>

    <div class="home-ad">
      <img src="https://gfs10.gomein.net.cn/T1KgbXB7dT1RCvBVdK.gif" alt="ad" />
    </div>
    <div class="home-ad-draw">
      <ul>
        <li>
          <img src="https://gfs11.gomein.net.cn/T1hkEXB5CT1RCvBVdK.gif" alt="draw" />
        </li>
        <li>
          <img src="https://gfs10.gomein.net.cn/wireless/T10KCXBsAT1RCvBVdK_533_363.jpg" alt="活动" />
        </li>
      </ul>
    </div>
    <!-- 国美头条区 -->
    <GUOMEI class="guomei-container"></GUOMEI>
    <!-- 优购指南 -->
    <PINGLEI></PINGLEI>
    <!-- 精选 -->
    <JINGXUAN></JINGXUAN>

    <!-- 国美书家 -->
    <SHUJIA></SHUJIA>

    <!-- 国美特色服务 -->
    <TESE></TESE>

    <!-- 好店 -->
    <GOOD></GOOD>

    <!-- 猜你喜欢 -->
    <LIKE></LIKE>

    <!-- 底部的 -->
    <FOOTER></FOOTER>
  </div>
</template>

<script>
import ad from "../components/home/ad";
import search from "../components/home/search";
import swipe from "../components/home/swipe";
import nav from "../components/home/nav";
import guomei from "../components/home/guomei";
import pinglei from "../components/home/pinglei";
import jingxuan from "../components/home/jingxuan";
import shujia from "../components/home/shujia";
import tese from "../components/home/tese";
import good  from "../components/home/good";
import like  from "../components/home/like";
import footer  from "../components/home/footer";

export default {
  name: "home",
  components: {
    AD: ad,
    SEARCH: search,
    SWIPE: swipe,
    NAV: nav,
    GUOMEI: guomei,
    PINGLEI: pinglei,
    JINGXUAN: jingxuan,
    SHUJIA: shujia,
    TESE:tese,
    GOOD:good,
    LIKE:like,
    FOOTER:footer
  }
};
</script>

<style  scoped>
.home {
  background: #f3f5f7;
}

.home-ad img {
  width: 100%;
}
.home-ad-draw {
  padding: 0 0.2rem;
  height: 2rem;
  display: flex;
}
.home-ad-draw ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.home-ad-draw ul li {
  flex: 1;
  width: 1%;
}
.home-ad-draw ul li:nth-of-type(1) {
  margin-right: 0.01rem;
}
.home-ad-draw ul li img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.guomei-container {
  padding: 0 0.2rem;
}
.search-fixed {
  z-index: 999;
}
</style>
