<template>
  
  <div class="app-container">
    <div class="logo-container">
      <img class="logo" src="~/public/findthedog_logo.png" alt="Logo" @click="hideLogo" />
    </div>
    
    <NuxtPage />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const hideLogo = () => {
  const logo = document.querySelector('.logo-container')
  logo.style.display = 'none'
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
  /* font-family: monospace; */
  font-family: Verdana, sans-serif;
  font-size: 1.5rem;
  background-color: burlywood ;
}

.logo-container{
  margin: 0;
  padding: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  width: 98%;
}

.logo{
  /* background-color: burlywood; */
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
}

.app-container {
  color: #291701;
  min-height: 100vh;
}
</style>
