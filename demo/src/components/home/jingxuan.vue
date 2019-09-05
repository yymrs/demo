<template>
  <div class="home-jingxuan">
    <!-- 广告 -->
    <div class="ad">
      <img src="https://gfs13.gomein.net.cn/wireless/T1rpVsBmZ_1RCvBVdK_1065_129.png" alt="ad" />
      <span class="more">
        更多
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="content">
      <div class="item">
        <a href='https://prom.m.gome.com.cn/html/prodhtml/topics/201511/6/channelshoujitongxun.html'>
          <div class="item-text">
            <h2>电视内够会</h2>
            <span>套购的好礼</span>
          </div>
          <div class="item-img">
            <img src="https://gfs13.gomein.net.cn/wireless/T12TVXB5bT1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='http://prom.gome.com.cn/html/prodhtml/topics/201908/20/9961641383.html'>
          <div class="item-text">
            <h2>礼物开学季 装备换新机</h2>
            <span>套购的好礼0元得配件好礼</span>
          </div>
          <div class="item-img">
            <img src="https://gfs10.gomein.net.cn/wireless/T1ITdXBTDv1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='http://prom.gome.com.cn/html/prodhtml/topics/201908/19/3722974812.html'>
          <div class="item-text">
            <h2>冰箱洗衣机焕新节</h2>
            <span>海尔192L双门冰箱1199元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs9.gomein.net.cn/wireless/T1yL__BjD_1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='https://prom.m.gome.com.cn/html/prodhtml/topics/201511/6/channelshoujitongxun.html'>
          <div class="item-text">
            <h2>电脑开学季</h2>
            <span>爆品直降1000元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs11.gomein.net.cn/wireless/T1rSDsBQLT1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='http://prom.gome.com.cn/html/prodhtml/topics/201908/13/1466023386.html'>
          <div class="item-text">
            <h2>家具建材 宅家好物</h2>
            <span>全场低至8.8元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs12.gomein.net.cn/wireless/T1hoEXB5WT1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='https://prom.m.gome.com.cn/html/prodhtml/topics/201908/15/salem9n8luPfSSN.html'>
          <div class="item-text">
            <h2>智造美好家</h2>
            <span>智能好物98元起</span>
          </div>
          <div class="item-img">
            <img src="https://gfs8.gomein.net.cn/wireless/T1JzJQBgA_1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>



<style  scoped>
.home-jingxuan {
  padding: 0 0.2rem;
  margin-top: 0.3rem;
  font-size: 0.3rem;
}
.home-jingxuan .ad {
  position: relative;
  font-size: 0;
  border-bottom: 1px solid #f2f2f2;
}
.home-jingxuan .ad img {
  width: 100%;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
}
.more {
  position: absolute;
  right: 0.2rem;
  top: 50%;
  color: #999;
  font-size: 0.17rem;
  transform: translateY(-50%);
}
.content {
  display: flex;
  flex-wrap: wrap;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.item {
  width: 50%;
  font-size: .1rem;
  box-sizing: border-box;
  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2
}
.item a {
  display: block;
  background: #fff;
}
.item-text {
  padding-top: .16rem;
  padding-left: .2rem;
  
}
.item-text span {
  display: inline-block;
  margin-top: .1rem;
  margin-bottom: .1rem;
}
.item-img {
  font-size: 0;
  width: 100%;
}
.item-img img {
  width: 100%;
}
.item-text h2 {
  margin: 0
}

</style>