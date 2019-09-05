<template>
  <div class="home-tese">
    <!-- 广告 -->
    <div class="ad">
      <img src="https://gfs12.gomein.net.cn/wireless/T1u8AsBXhv1RCvBVdK_1065_129.png" alt="ad" />
      <span class="more">
        更多
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="content">
      <div class="item">
        <a href='https://prom.m.gome.com.cn/html/prodhtml/topics/201511/6/channelshoujitongxun.html'>
          <div class="item-text">
            <h2>家电清洗</h2>
            <span>杀菌消毒率高达99%</span>
          </div>
          <div class="item-img">
            <img src="https://gfs13.gomein.net.cn/wireless/T1t8EQB7_T1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='https://m.gome.com.cn/shop-80011410.html'>
          <div class="item-text">
            <h2>手机维修</h2>
            <span>免费上门 26分钟响应</span>
          </div>
          <div class="item-img">
            <img src="https://gfs12.gomein.net.cn/wireless/T19whvB_EQ1RCvBVdK_355_144.jpg" >
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
.home-tese {
  padding: 0 0.2rem;
  margin-top: 0.3rem;
  font-size: 0.3rem;
}
.home-tese .ad {
  position: relative;
  font-size: 0;
  border-bottom: 1px solid #f2f2f2;
}
.home-tese .ad img {
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
  border-bottom: 1px solid #f2f2f2;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
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