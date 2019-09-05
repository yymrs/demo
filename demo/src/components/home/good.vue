<template>
  <div class="home-good">
    <!-- 广告 -->
    <div class="ad">
      <img src="https://gfs11.gomein.net.cn/wireless/T10zDsBbhv1RCvBVdK_1065_129.png" alt="ad" />
      <span class="more">
        更多
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="content">
      
      <div class="item">
        <a href='http://prom.gome.com.cn/html/prodhtml/topics/201908/19/3722974812.html'>
          <div class="item-text">
            <h2>苏泊尔厨具专卖店</h2>
            <span>满199元减20元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs9.gomein.net.cn/wireless/T1duAsBghT1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='https://m.gome.com.cn/shop-80006318.html'>
          <div class="item-text">
            <h2>惠普电脑官方旗舰店</h2>
            <span>固态微边框轻薄本3739元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs12.gomein.net.cn/wireless/T1tlZsB5bv1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='http://prom.gome.com.cn/html/prodhtml/topics/201908/13/1466023386.html'>
          <div class="item-text">
            <h2>小米官方旗舰店</h2>
            <span>指定型号领券减200元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs12.gomein.net.cn/wireless/T1_hYsBv__1RCvBVdK_355_144.jpg" >
          </div>
        </a>
      </div>
      <div class="item">
        <a href='https://prom.m.gome.com.cn/html/prodhtml/topics/201908/15/salem9n8luPfSSN.html'>
          <div class="item-text">
            <h2>小熊电器官方旗舰店</h2>
            <span>满100减10元</span>
          </div>
          <div class="item-img">
            <img src="https://gfs12.gomein.net.cn/wireless/T1CldbBXVv1RCvBVdK_355_144.jpg" >
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
.home-good {
  padding: 0 0.2rem;
  margin-top: 0.3rem;
  font-size: 0.3rem;
}
.home-good .ad {
  position: relative;
  font-size: 0;
  border-bottom: 1px solid #f2f2f2;
}
.home-good .ad img {
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