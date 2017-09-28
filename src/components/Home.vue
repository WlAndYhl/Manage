<template>
  <div class="home">   
    <navHeader></navHeader>
    <navMenu></navMenu>
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>
import navHeader from './basic/navHeader'
import navMenu from './basic/navMenu'
export default {
  name: 'home',
  components: {
    navHeader,
    navMenu
  }
}
</script>
<style scoped>
main{
  box-sizing:border-box;
  padding:24px;
  margin: 65px 0 0 240px;
}
</style>
