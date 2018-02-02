
<template>
  <div>
    <app-nav></app-nav>
    <div class="content">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
 
</template>

<script>
  import Footer from "./components/AppFooter.vue";
  import Nav from "./components/AppNav.vue";
  
  export default {
    name: 'App',
    components: {
      'app-footer': Footer,
      'app-nav': Nav
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  html, body {
    min-height: 100vh;
    margin: 0;
  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .content {
    margin-top: 50px;
    /*min-height: 100;*/
  }
  /*#app {*/
    /*min-height: 100%;*/
  
    /*.content{*/
      /*min-height: calc(100% - 50px);*/
      /*margin-top: 50px;*/
      /**/
      /*!*.push {*!*/
        /*!*height: 50px;*!*/
      /*!*}*!*/
    /*}*/
  /*}*/
  
</style>
