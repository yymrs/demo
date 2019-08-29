<template>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index" >
  <img :src="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default {
  data() {
    return {
      images:[
        "https://gfs5.gomein.net.cn/wireless/T1EMCXBCKT1RCvBVdK_1080_320.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1vwWXB_Ev1RCvBVdK_1080_320.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1kgxXB4bv1RCvBVdK_1080_320.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1AgZXBQbv1RCvBVdK_1080_320.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1vghXBmZv1RCvBVdK_1080_320.jpg",
        "https://gfs5.gomein.net.cn/wireless/T1y9KXBQbT1RCvBVdK_1080_320.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1pe_XBgbv1RCvBVdK_1080_320.jpg",
        "https://gfs8.gomein.net.cn/wireless/T1USWXBKDT1RCvBVdK_1080_320.jpg"
      ]
    }
  },
  methods: {
    
  },
  created() {
    
  },
}
</script>

<style scoped>
  .van-swipe-item {
    font-size: 0;
    height: 2.2rem;
  }
  .van-swipe-item img {
    width: 100%;
    height: 100%;
  }
</style>