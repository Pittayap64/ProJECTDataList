<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Kanit' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 60px;
  margin-left: 20%;
  margin-right: 20%;
  padding: 50px 50px;
  background-color: rgb(58, 54, 54);
  border-radius: 20px;
}
a1{
  color: #ffffff;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(https://t1.blockdit.com/photos/2020/03/5e62fa5b8776e80c9eac6223_800x0xcover_rKPF7C0M.jpg);
}

button {
     font-family: 'Kanit', sans-serif;
     font-size: 1em;
     background-color: rgb(255, 255, 255);
     border-radius: 12px;
 }

button:hover {  
  box-shadow: 0 8px 50px 0 #818080; 
  background-color: rgb(116, 96, 96)(156, 48, 48);
  color: rgb(255, 115, 0);
  }
  
</style>
