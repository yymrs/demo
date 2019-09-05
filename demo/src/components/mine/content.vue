<template>
  <div class="login-next" ref="mine">
    <div class="content">
      <div class="back">
        <div class="content">
          <div class="userInfor">
            <img id="userHead" src="https://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png" />
            <div class="inforList">
              <p>
                <a id="userNikeName" href>{{}}</a>
              </p>
              <a href="/gcoin_authentication.html#/">
                <p class="noRealName">未实名</p>
              </a>
            </div>
          </div>
          <div class="top-img">
            <a class="gift" href="http://club.m.gome.com.cn/memberclub/mygiftbag">
              <span class="gift_img"></span>
              <a href="/message.html" class="messageBtn"></a>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="middle">
      <div>
        <img src="https://app.gomein.net.cn/plus/images/ucenter/daifukuai.png?v=2017092001" alt />
        <span>待付款</span>
      </div>
      <div>
        <img src='https://app.gomein.net.cn/plus/images/ucenter/daishouhuo.png?v=2017092001' alt />
        <span>代收货</span>
      </div>
      <div>
        <img src='https://app.gomein.net.cn/plus/images/ucenter/daipingjia.png?v=2017092001' alt />
        <span>待评价</span>
      </div>
      <div>
        <img src='https://app.gomein.net.cn/plus/images/ucenter/tuihou.png?v=2017092001' alt />
        <span>退款/售后</span>
      </div>
      <div>
        <img src='https://app.gomein.net.cn/plus/images/ucenter/dingdan.png?v=2017092001' alt />
        <span>全部订单</span>
      </div>
    </div>

    <div class="min-money">
      <div>
        <p>0.00</p>
        <span>国美币余额</span>
      </div>
      <div>
        <p>4</p>
        <span>优惠卷</span>
      </div>
      <div>
        <p>0</p>
        <span>美豆</span>
      </div>
      <div>
        <p>
          <img src="https://app.gomein.net.cn/plus/images/ucenter/meitongka.png?v=2017092001" alt="">
        </p>
        <span>美通卡</span>
      </div>
      <div>
        <p>
          <img src="https://app.gomein.net.cn/plus/images/ucenter/qianbao.png?v=2017092001" alt="">
        </p>
        <span>我的钱包</span>
      </div>
    </div>

    <div class="footer">
      <div class="item">
        <img src="https://app.gomein.net.cn/plus/images/ucenter/huiyuanbu.png?v=2017092001" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
      <div class="item">
        <img src="" alt="">
        <p>会员俱乐部</p>
      </div>
    </div>

    <div class="youlike">
      <span><span style="color:red">❤</span> 你可能喜欢的</span>
    </div>
  <!-- {{classlist[0]}} -->
    <div class="youlike-item">
      <!-- <div class="border" >
        <a href="">
          <img src="https://gfs17.gomein.net.cn/T1a9AbBXbT1RCvBVdK_260.jpg" alt="">
          <p>                 九阳（Joyoung）JYY-50C3 电压力锅 一锅双胆 八段调压 口感可调 5L高压锅            </p>
        </a>
        <div class="price">
          ￥{{299}}
        </div>
      </div> -->
      <div class="border" v-for="(item, index) in classlist" :key="index">
        <a href="">
          <img :src="item.iurl" alt="">
          <p>{{item.pn}}</p>
        </a>
        <div class="price">
          ￥{{item.price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['classlist'],
  data() {
    
    return {
      // classlist:[],
      userid: ""
    };
  },
  created:function(){
    this.getdata()
  },
  mounted:function(){
    this.refresh()

  },
  methods: {
    getuser() {},
    onClickLeft() {
      history.go(-1);
    },
    getdata(){
      // this.axios.get('guomei/mine').then(resolve=>{
      //   console.log(resolve);
      //   this.classlist= this.classlist.concat(resolve.data.a)
      // })
    },
    refresh(){
      // 滚动条滚动时，<div class="home" ref="home">的高度
      // console.log(this.$refs);
      
     
     
    }
  }
};
</script>


<style scoped>
.back {
  width: 100%;
  height: 3rem;
  background-image: url(https://css.gomein.net.cn/plus/style/ucenter/css/userBg.47888ca02e.png);
}
.back .content {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
}
.userInfor {
  display: flex;
}
.top-img {
  position: absolute;
  top: 0;
  right: 1rem;
}
.gift_img {
  display: inline-block;
  width: 0.7rem;
  height: 0.57rem;
  background: url(https://css.gomein.net.cn/plus/style/ucenter/css/gift.b5b6719101.gif)
    no-repeat;
  background-size: contain;
}
.login-next {
  background: #f2f2f2;
}
.messageBtn {
  position: absolute;
  right: -0.7rem;
  top: 0.2rem;
  width: 0.41rem;
  height: 0.38rem;
  background: url(https://css.gomein.net.cn/plus/style/ucenter/css/messageIcon.e66ecc9715.png)
    center no-repeat;
  background-size: contain;
}
.userInfor img {
  width: 1.5rem;
  border-radius: 50%;
}

.noRealName {
  margin-left: 0.5rem;
  padding: 0.1rem;
  border-radius: 0.1rem;
  background: #ccc;
  color: #fff;
  border: 1px solid #ccc;
}

.middle {
  display: flex;
  text-align: center;
  padding: .5rem 0;
  background: #fff;
}
.middle > div {
  width: 20%;
}
.middle > div img {
  width: 0.5rem;
  margin-top: .2rem;
}
.min-money{
  display: flex;
  margin-top: .3rem;
  background: #fff
}
.min-money > div {
  width: 20%;
  text-align: center;
}
.min-money > div p {
  margin: 0;
  margin-top: .2rem;

}
.min-money > div img {
  width: 0.5rem;
}
.min-money > div span {
  display: block;
  margin-top: .2rem;
  padding-bottom: .3rem;
}
.min-money > div:nth-last-of-type(1) span{
  margin: 0
}
.min-money > div:nth-last-of-type(2) span{
  margin: 0
}
.middle > div span {
  display: block;
}

.footer {
  margin-top: .3rem;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  background: #fff
}
.footer .item {
  width: 25%;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: .2rem;
}
.footer .item:nth-child(-n+4){
  border-top: 1px solid #ccc
}
.footer .item img {
  width: .5rem;
}
.footer .item p {
  margin-top: 0
}

.youlike {
  padding: .2rem 0;
  text-align: center
}
.youlike::after{
  display: block;
  position: relative;
  top: -.18rem;
  /* width: 100%; */
  font-size: 0;
  font-weight: 100;
  height: .0001rem;
  border:1px solid #ccc;
  z-index: 1;

  content: "-"
}
.youlike span {
  background: #f2f2f2;
  padding: 0 .1rem;
  position: relative;
  z-index: 10;
}

.youlike-item {
  display: flex;
  flex-wrap: wrap;
  background: #f2f2f2;
}
.youlike-item .border {
  box-sizing: border-box;
  background: #f2f2f2;
  padding: .1rem;
  width: 50%;
  padding: .1rem;
}
.youlike-item .border a {
  background: #fff;
  display: block;
  padding: .1rem;
}
.youlike-item .border a img {
  width: 100%;
}
.youlike-item .border a p {
  margin: 0;
  overflow: hidden;
}
.price {
  font-size: .3rem;
  color:#ff5c5c;

}
</style>