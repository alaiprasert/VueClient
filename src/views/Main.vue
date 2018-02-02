<template>
  <div class="hello">
    <h1>hello {{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        msg: 'welcome to vue.js'
      }
    },
    created () {
      console.log('create main');
    },
    methods: {
    }
  }
</script>

<style>

</style>
