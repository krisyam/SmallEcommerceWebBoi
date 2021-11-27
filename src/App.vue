<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/cart">Cart</router-link>
  </div>
  <router-view/>
</template>
 
<script>
export default {
  name: 'app',
  components:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin: 0;
  background-color: #f2dede;
}
#nav {
  padding: 20px;
  background-color: #DEF2F2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
