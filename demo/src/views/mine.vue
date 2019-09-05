<template>
  <div class="mine" >
    <van-nav-bar title left-arrow @click-left="onClickLeft" />
    <router-link  class='home' to="/">首页</router-link>
    <center ref="mine" :classlist='classlist'></center>
  </div>
</template>


<script>
// import login from '../components/mine/login'
import center from '../components/mine/content'

export default {
  data() {
    return {
      userId:'',
      classlist:[]
    };
  },
  computed: {
    phoneRight() {
      return /^1[34578]\d{9}$/.test(this.phone);
    }
  },
  created:function(){
    this.getdata()
    window.onscroll=this.refresh
    },
  components: {
    // "login":login,
    "center":center
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    getdata(){
      this.axios.get('guomei/mine').then(resolve=>{
        console.log(resolve);
        this.classlist= this.classlist.concat(resolve.data.a)
      })
      console.log('xia');
      
    },
    refresh(){
      console.log(this.$refs.mine);
       let innerHeight = this.$refs.mine.$el.clientHeight;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight =
        document.documentElement.clientHeight || document.body.scrollHeight;
      console.log(innerHeight,scrollHeight,scrollTop);
      if (scrollTop + scrollHeight + 100 >= innerHeight) {
          this.getdata()
      }
    }
  }
};
</script>

<style scoped >
.van-nav-bar__arrow {
  font-size: 0.6rem;
}

.mine {
  font-size: 0.2rem;
  background-color: #f2f2f2;
  height: 100vh;
}
.home {
  position: fixed;
  z-index: 100;
  top: .1rem;
  color: #000;
  padding: .2rem;
  left: 44%;
}
</style>