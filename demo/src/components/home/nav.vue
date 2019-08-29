<template>
  <div class="shopping-nav">
    <van-grid :column-num="5">
      <van-grid-item v-for="(value,i) in lists" :key="i" :icon="value.img" :text="value.text" />
    </van-grid>
  </div>
</template>

<script>
export default {

  data() {
    return {
      lists:[
        {img:'https://gfs11.gomein.net.cn/wireless/T1BZd_BgD_1RCvBVdK_195_129.png',text:"手机电脑"},
        {img:'https://gfs13.gomein.net.cn/wireless/T11gZvBChQ1RCvBVdK_195_129.png',text:"国美电器"},
        {img:'https://gfs12.gomein.net.cn/wireless/T1uZDsByhv1RCvBVdK_195_129.png',text:"国美超市"},
        {img:'https://gfs10.gomein.net.cn/wireless/T1k3D_B_L_1RCvBVdK_195_129.png',text:"美店组团"},
        {img:'https://gfs13.gomein.net.cn/wireless/T1p0dsBsbv1RCvBVdK_195_129.png',text:"分期购"},
        {img:'https://gfs11.gomein.net.cn/wireless/T1Ii_bBmbb1RCvBVdK_195_129.png',text:"充值服务"},
        {img:'https://gfs11.gomein.net.cn/wireless/T1u.K_B5W_1RCvBVdK_195_129.png',text:"国美家装"},
        {img:'https://gfs13.gomein.net.cn/wireless/T1vGdsBsLv1RCvBVdK_195_129.png',text:"领美豆"},
        {img:'https://gfs11.gomein.net.cn/wireless/T1J9_vBgxb1RCvBVdK_195_129.png',text:"国美管家"},
        {img:'https://gfs10.gomein.net.cn/wireless/T11MWbBQhv1RCvBVdK_195_129.png',text:"我的"},
      ]
    }
  },
  methods: {
    
  },
};
</script>

<style  scoped>
.shopping-nav {
  background: #f2f2f2 !important
}

[class*=van-hairline]::after {
  border:none !important
}
</style>