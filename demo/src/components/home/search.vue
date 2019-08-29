<template>
  <div class="home-search">
    <div class="search-logo">
      <img
        src="https://css.gomein.net.cn/plus/style/index/images/grass_logo.png?v=2017092001"
        alt="search-log"
      />
    </div>
    <div class="input">
      <i class="fa fa-search"></i>
      <input class="search" type="search" readonly="readonly" placeholder="家具建材低至8.8元" />
    </div>
    <div class="shoping-cotainer">
    <div class="shopping">
    <img src="https://css.gomein.net.cn/plus/style/index/images/grass_cart.png?v=2017092001" alt="shopping">
    </div>
    <div class="login">
     登录
    </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style  scoped>
.home-search {
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  height: 1.1rem;
  line-height: 1.1rem;
  border: 1px solid red;
}
.search-logo img {
  display: block;
  width: 0.56rem;
}
.input {
  margin-left: 0.3rem;

  display: flex;
  position: relative;
  align-items: center;
}
.input .search {
  box-sizing: border-box;
  font-size: .2rem;
  width: 4.2rem;
  height: 0.7rem;
  padding: 0 0 0 0.8rem;
  background-color: #f6f6f6;
  border-radius: 0.35rem;
  outline: none;
  border: 0
}
.fa-search {
  position: absolute;
  font-size: 0.3rem;
  color: #999;
  top: 0.1.6rem;
  left: 0.25rem;
}
.shoping-cotainer{
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
}
.shopping img {
    margin-left: .1rem;
    display: block;
    width: .5rem;
}
.login {
    font-size:.3rem;
    color: #666
}
</style>