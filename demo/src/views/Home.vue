<template>
  <div class="home">
  <AD></AD>
  <SEARCH></SEARCH>
  <SWIPE></SWIPE>

  <NAV></NAV>
  </div>
</template>

<script>
  import ad from '../components/home/ad'
  import search from '../components/home/search'
  import swipe from '../components/home/swipe'
  import nav from '../components/home/nav'

export default {
  name: 'home',
  components: {
    "AD":ad,
    "SEARCH":search,
    "SWIPE":swipe,
    "NAV":nav
  }
}
</script>
