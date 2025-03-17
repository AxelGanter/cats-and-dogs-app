<template>
  
  <div class="app-container">
    <NuxtPage />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<style>
body {
  margin: 0;
  /* font-family: monospace; */
  font-family: Verdana, sans-serif;
  font-size: 1.5rem;

}
.app-container {
  background-color: #7aac71;
  color: #13300e;
  min-height: 100vh;
  padding-left: 25px;
}
</style>
