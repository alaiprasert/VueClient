<template>
  <div id="vue-footer">
    <p>
      <a v-bind:href="url" target="_blank">{{ msg }}</a>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '© Networked Society Institute',
        url: 'http://networkedsociety.unimelb.edu.au/home'
      }
    },
    created() {}
  }
</script>

<style lang="scss">
  #vue-footer {
    text-align: center;
    width: 100%;
    height: 50px;
    
    a{
      color: darkblue;
      text-decoration: none;
    }
  }
</style>
