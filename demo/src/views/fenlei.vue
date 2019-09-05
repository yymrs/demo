<template>
  <div class="fenlei">
    <AD></AD>
    <div class="topseacrh">
      <i class="fa fa-angle-left" @click="back"></i>
      <input type="text" v-model="value" placeholder="笔记本低至1999元" />
      <i class="fa fa-search"></i>
    </div>

    <div class="item">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, index) in list"
          :key="index"
          :title="item.name"
          @click="toggle(item.id)"
        />
      </van-sidebar>

      <!-- hot的分类 -->
      <!-- {{activeKey}} -->
      <div class="item-right hot" v-if="activeKey==0">
        <div class="aaa">
          <div class="itemlist" v-for="(item, index) in hot" :key="index">
        <div class="title">
          {{item.goodsTypeName}}
        </div>
        <div class="container">
          <div class="itemlist-item" @click="listtarget(a.goodsTypeId)" v-for="(a, i) in (item.goodsTypeList)" :key="i" >
          <div>
            <img :src="a.goodsTypeImgUrl" alt="">
            <span>{{a.goodsTypeName}}</span>
          </div>
        </div>
        </div>
      </div>
        </div>
      </div>
      <div v-else>
        <!-- secondLevelCategories -->
        <div v-if="qita.imageUrl">
          <img :src="qita.imageUrl" style="width:100%">
        </div>
        <div class="item-right">
        <div class="itemlist" v-for="(item, index) in qita.secondLevelCategories" :key="index">
        <div class="title">
          {{item.goodsTypeName}}
        </div>
        <div class="container qita">
          <div class="itemlist-item " v-for="(a, i) in (item.goodsTypeList)" :key="i">
          <div>
            <img :src="a.goodsTypeImgUrl" alt="">
            <span>{{a.goodsTypeName}}</span>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import ad from "../components/home/ad";
export default {
  components: {
    AD: ad
  },
  data() {
    return {
      list: [
        { id: "17951827", name: "热门分类" },
        { id: "17951828", name: "手机数码" },
        { id: "17951829", name: "电脑办公" },
        { id: "17951830", name: "电视影音" },
        { id: "17951831", name: "空调冰洗" },
        { id: "17951832", name: "厨房卫浴" },
        { id: "17951833", name: "空调冰洗" },
        { id: "17951834", name: "厨房卫浴" },
        { id: "17951835", name: "生活电器" },
        { id: "17951836", name: "食品酒水" },
        { id: "17951837", name: "美妆个护" },
        { id: "17951838", name: "母婴玩具" },
        { id: "17951839", name: "营养保健" },
        { id: "17951840", name: "服饰鞋帽" },
        { id: "17951841", name: "运动户外" },
        { id: "17951842", name: "箱包奢品" },
        { id: "17951843", name: "钟表首饰" },
        { id: "17951844", name: "住宅家具" },
        { id: "17951845", name: "家装建材" },
        { id: "17951846", name: "家居日用" },
        { id: "17951847", name: "床品家纺" },
        { id: "17951848", name: "汽车用品" },
        { id: "17951849", name: "黄金收藏" },
        { id: "17951850", name: "智能家居" },
        { id: "17951851", name: "生活服务" }
      ],
      value: "",
      activeKey: 0,
      hot:[],
      qita:[]
    };
  },
  created() {
    this.data();
  },
  methods: {
    back() {
      history.go(-1);
    },
    data() {
      this.axios
        .get(
          "/mineo/index.php?ctl=goods_class&act=ajaxGetClassList&cid=17951827"
        )
        .then(resolve => {
          console.log(resolve);
          this.hot = resolve.data.secondLevelCategories
        });
    },
    toggle(id) {
      console.log(id);
      this.axios
        .get(
          `/mineo/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${id}`
        )
        .then(resolve => {
          console.log(resolve);
          this.qita=resolve.data
        });
    },
    listtarget(id){
      console.log(id);
      
    }
  }
};
</script>


<style scoped>
.fenlei {
  font-size: 0.2rem;
}
.topseacrh {
  direction: flex;
  /* top: 0; */
  /* align-items: baseline */
}
.topseacrh i {
  font-size: 0.6rem;
  margin: 0 0.2rem;
  position: relative;
  top: 0.1rem;
}
.topseacrh i:nth-of-type(1) {
  padding: 0.1rem;
}
.topseacrh i:nth-of-type(2) {
  font-size: 0.3rem;
  position: relative;
  left: -1rem;
  top: 0rem;
}
.topseacrh input {
  width: 70%;
  border: none;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  outline: none;
  padding: 0.2rem;
}
.item {
  display: flex;
  width: 100%;
  height: 105vh;
}
.item-right,.aaa {
  position: relative;
  height: 100%;
  overflow-y:scroll !important;
}
.item .itemlist {
  width: 100%;
}
.item .hot .itemlist:last-child .container{
  /* border: 1px solid #ccc; */
  justify-content: inherit;
  flex-wrap: wrap;
}
.item .hot .itemlist:last-child .container>div {
  width: 29.5%;
  margin-top: .2rem;
}
.item .itemlist .title{
  /* width: 100%; */
  margin: .3rem 0;
  padding-left: .1rem;
}
.item .container{
  display: flex;
  width: 100%;
  justify-content: space-around
}
.item>div{
  width: 70%;
}
.van-sidebar {
  width: 30% !important;
}
.van-sidebar  {
  border: 1px solid red;
  height: 105vh;
  overflow-y: scroll
}
.item .container .itemlist-item{
  /* display: flex; */
  width: 33%;
  text-align: center;
  margin: 0 .1rem;
  /* border: 1px solid #ccc; */
  background: #f8f8f8;
}
.item .container .itemlist-item img {
  width: 100%;
}
.qita {
  flex-wrap: wrap;
  justify-content: inherit !important ;
}
.qita .itemlist-item{
  width: 29% !important;
  margin-top: .2rem !important;
}
.qita .itemlist-item div{
  height: 100%;
}
</style>