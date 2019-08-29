<template>
  <div class="home-ad" v-if="isshow">
    <div class="dell">
      <img ref="del" @click="del" src="https://css.gomein.net.cn/plus/style/appDown/images/close.png" alt="删除" />
    </div>
    <div class="conner">
      <div class="logotext">
      <div>
        <img src="https://gfs9.gomein.net.cn/T1VnKvB7_T1RCvBVdK.png" alt="ad-logo" />
      </div>
      <div class="text">
        <p>注册享好礼</p>
        <p>送260礼包</p>
      </div>
      </div>
      <div class="done">下载领取</div>
    </div>
  </div>
</template>>


<script>
export default {
  data() {
    return {
        isshow:true
    };
  },
  methods: {
      del(){
        //   设置隐藏ad
        this.isshow = !this.isshow
      }
  }
};
</script>


<style  scoped>
.home-ad {
  margin: 0;
  padding: 0;
  background: #333;
}
.home-ad {
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  height: 1.2rem;
}
.dell {
  font-size: 0.3rem;
  margin-left: 0.3rem;
  line-height: 1.2rem;
  display: flex;
  align-items: center;
}
.dell img {
    width: .35rem;
}
.conner {
  display: flex;
  flex-grow: 1;
  font-size: 0.3rem;
}
.conner img {
  width: 0.84rem;
}
.logotext {
    display: flex;
    align-items: center;
    margin-left: .3rem;
    flex-grow: 1;
}
.logotext img {
    display: block;
}
.logotext p {
    text-align: left;
    margin: 0;
    margin-left: .1rem;
    line-height: 1.4;
    color: #999
}
.logotext p:nth-child(1){
    color: #fff;
}
.done {
  line-height: 1.2rem;
  padding: 0 .25rem;
  color: #fff;
  background: #EE1955;

}
</style>