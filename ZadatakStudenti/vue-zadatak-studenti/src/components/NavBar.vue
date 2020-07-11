<template>


           <div id="nav">
    <div>
        <div id="router">
       <router-link to="/">Studenti</router-link> | 
 <router-link to="/Kurs">Kurs</router-link>
<span v-if="!isLoggedIn()">Molimo Vas da se ulogujete, kako Bi ste pristupuli podacima.</span>
 </div>

 <div id="btn">
     
  <button  v-if="!isLoggedIn()"
          @click="handleLogin"
          variant="primary"
          class="my-2 my-sm-0"
          type="submit"> Sign In</button>
        <button v-if="isLoggedIn()"
          @click="handleLogout"
          variant="primary"
          class="my-2 my-sm-0"
          type="submit">Sign Out</button>
          </div>

    </div>  

    
</div>

</template>
<script>
  import { isLoggedIn, login, logout } from "../services/auth-service";
  export default {
    name: "app-nav",
    methods: {
      handleLogin() {
        login();
      },
      handleLogout() {
        logout();
      },
      isLoggedIn() {
        return isLoggedIn();
      },
    },
   
  };
</script>

<style lang="scss">
#nav {
    
 padding: 30px;
 
 
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  #router{
      float:left;
      margin-left: 75px;
      span {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.1em;  
          margin-left: 220px;
          color: #016c96;
          background-color: rgba(17, 0, 255, 0.123);
            text-decoration: underline;
          align-content: center;
          font-style: italic;
      }
  }
#btn {
    display: inline;
    float:right;
   padding-right: 20px;
    margin-right: 50px;
    
   
    button {
        
       font-family: Hack, monospace;
    background: #1abc9c;
    color: #ffffff;
    cursor: pointer;
    font-size: 1em;
    padding: 0.8rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: auto;
    position: relative;
    min-width: 125px;

    &::after {
        content: "\f2f6";
        font-family: "Font Awesome 5 Pro";
        font-weight: 400;
        position: absolute;
        left: 80%;
        top: 54%;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translate(-50%, -50%);

    }

    &:hover {
        background: #2b2bff;
        transition: all 0.5s;
        border-radius: 10px;
        box-shadow: 0px 6px 15px #0000ff61;
        padding: 1rem 3rem 1rem 1rem;
        color: #ffffff;

        &::after {
            opacity: 1;
            transition: all 0.5s;
            color: #ffffff;

        }
    }


    }
}
</style>