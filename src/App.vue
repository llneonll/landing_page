<template>
 
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>

    
  </div>
  

  <router-view/>
  
</template>
<script>
   export default{
     methods: {
        redirect(){
          this.$router.push({name:'Home'})
        },
        back(){
          this.$router.go(-1)
        },
        forward(){
          this.$router.go(+1)
        }
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
  max-width: 960px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: rgba(23, 217, 39, 0.849)
}
button {
  margin : auto;
  background: rgba(23, 217, 39, 0.849);
  color: white;
  padding: 10px 20px;
  border : none;
  cursor: pointer;
}
</style>