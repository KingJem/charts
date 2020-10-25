<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-view></router-view>
      <Layout></Layout>

    </div>
    <router-view/>
  </div>
</template>


<script>
import Layout from './views/Layout/Layout'

export default {
  name: 'app',
  components: {
    Layout
  },
  data() {
    return {
      radio: 6
    };
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, .1);
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, .25);
  transition: color .2s ease;
}
</style>
