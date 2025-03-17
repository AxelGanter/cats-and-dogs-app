<template>
  
  <div class="app-container">
    <img class="logo" src="~/public/findthedog_logo.png" alt="Logo" @click="hideLogo" v-show="isLogoVisible" />
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

.logo{
  /* background-color: burlywood; */
  position: absolute;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  padding: 0 ;
  z-index: 2;
}

.app-container {
  color: #291701;
  min-height: 100vh;
  padding-left: 25px;
}
</style>
