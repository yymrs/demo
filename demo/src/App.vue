<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.van-grid-item__text{
  margin-top: 0 !important
}
.van-icon__image {
  font-size: 1rem !important
}
[class*=van-hairline]::after {
  border:none !important
}

</style>
