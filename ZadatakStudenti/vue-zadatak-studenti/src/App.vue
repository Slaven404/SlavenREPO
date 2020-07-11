<template>
  <div id="app">
   <!-- <div id="nav">
    <div>
      <router-link to="/">Studenti</router-link> | 
 <router-link to="/kurs">Kurs</router-link>
</div>
     

    </div> -->
<nav-bar />
    <router-view/>

   

  </div>
</template>
<script>
  import NavBar from "@/components/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar
    }
  };
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

 
 
}

#nav {
  padding: 30px;
 display: inline;

 
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
