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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
.img-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* Erzeugt ein Quadrat */
  overflow: hidden;
}
.img-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Zoomt das Bild so, dass es den Container füllt */
}
</style>