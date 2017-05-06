<template>
  <div id="app">
    <h3>welcome vuex demo</h3>
    <input type='button' value='增加' @click='increment'>
    <input type='button' value='减少' @click='decrement'>
    <input type='button' value='偶数才增加' @click='addOdd'>
    <input type='button' value='异步增加' @click='addAsync'>
    <p>现在数字为：{{count2}}</p>
    <p>{{getOdd}}</p>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:mapGetters([
    'count2',//是个函数,
    'getOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'addOdd',
    'addAsync'
  ])

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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
