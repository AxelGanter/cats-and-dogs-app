<template>
  
  <div class="app-container">
    <div class="logo-container">
      <img class="logo" src="~/public/findthedog_logo.png" alt="Logo" @click="hideLogo" v-show="isLogoVisible" />
    </div>
    
    <NuxtPage />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
const isLogoVisible = ref(true)

const hideLogo = () => {
  isLogoVisible.value = false
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
