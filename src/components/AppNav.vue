<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Home</b-navbar-brand>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!--<div id="navbar">-->
    <!--<div class="navbar-default">-->
      <!--<ul>-->
        <!--<li v-for="menu in menus"> {{ menu.name }} </li>-->
      <!--</ul>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
  import router from '../router';
  import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';
  import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle';
  import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
  import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
  import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
  
  export default {
    components: {
      BNavbarNav,
      BNavbarBrand,
      BNavbarToggle,
      BNavbar,
      'b-navbar': bNavbar,
      'b-navbar-toggle': bNavbarToggle,
      'b-navbar-brand': bNavbarBrand,
      'b-navbar-nav': bNavbarNav,
      'b-collapse': bCollapse
    },
    data() {
      return {
        menus: router.options.routes
      }
    }
  }
</script>

<style lang="scss">
  
  #navbar {
    width: 100%;
    min-height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: lightgrey;
    
  }
</style>
