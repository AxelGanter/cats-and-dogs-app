<template>
    <div class="gallery">
      <div v-for="img in images" :key="img" class="img-container">
        <img :src="img" alt="Hund oder Katze" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const countDogs = 1
  const countCats = 15
  const randomDogs = Array.from({ length: countDogs }, () => Math.floor(Math.random() * 100) + 1)
  const randomCats = Array.from({ length: countCats }, () => Math.floor(Math.random() * 100) + 1)
  const pathToCatImages = '/PetImages/Cat/'
  const pathToDogImages = '/PetImages/Dog/'
  
  const catImages = randomCats.map(num => `${pathToCatImages}${num}.jpg`)
  const dogImages = randomDogs.map(num => `${pathToDogImages}${num}.jpg`)
  const allImages = [...catImages, ...dogImages]
  
  const images = computed(() =>
    [...allImages].sort(() => Math.random() - 0.5).slice(0, 16)
  )
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  .img-container {
    width: 25%;
    padding: 5px;
  }
  .img-container img {
    width: 100%;
    height: auto;
  }
  </style>
  