<template>
  <div id="app">
    <h1>Interface de gestion de projet</h1>
    <div id="project" :class="{active:isActive}">
      <img :src="picture">
      <h2>{{ name }}</h2>
      <input type="checkbox" id="checkbox" v-model="isActive" >
      <label for="checkbox" v-if="isActive">actif</label>
      <label for="checkbox" v-else="!isActive">non actif</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        id: '5b3e3da861f2d927949fa8da',
        picture: 'http://placehold.it/32x32',
        name: 'PUSHCART',
        isActive: false,
        creation: 'Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)',
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #project {
    border: solid lightgray;
    margin: 10em 20em 10em 20em;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  h1, h2 {
    font-weight: normal;
  }

  .active {
    background-color: palegreen;
  }

</style>
