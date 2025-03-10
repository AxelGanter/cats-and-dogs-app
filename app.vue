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
  font-family: monospace;
  font-size: 1.5rem;
}
.app-container {
  background-color: black;
  color: green;
  min-height: 100vh;
  padding-left: 25px;
}
</style>
