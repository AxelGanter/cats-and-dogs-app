<template>
    <div>
      <div class="gallery">
        <div 
          v-for="img in images" 
          :key="img" 
          class="img-container"
          @click="handleClick(img)"
        >
          <img :src="img" alt="Hund oder Katze" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['update-dog-counter'])

function getUniqueRandomNumbers(count, max) {
  const numbers = Array.from({ length: max }, (_, i) => i + 1)
  return numbers.sort(() => Math.random() - 0.5).slice(0, count)
}

function generateGallery() {
  const countDogs = 1
  const countCats = 15
  const randomDogs = getUniqueRandomNumbers(countDogs, 100)
  const randomCats = getUniqueRandomNumbers(countCats, 100)
  const pathToCatImages = '/PetImages/Cat/'
  const pathToDogImages = '/PetImages/Dog/'
  const catImages = randomCats.map(num => `${pathToCatImages}${num}.jpg`)
  const dogImages = randomDogs.map(num => `${pathToDogImages}${num}.jpg`)
  const allImages = [...catImages, ...dogImages]
  return allImages.sort(() => Math.random() - 0.5).slice(0, 16)
}

const images = ref(generateGallery())

function refreshGallery() {
  images.value = generateGallery()
}

function removeImage(img) {
  images.value = images.value.filter(i => i !== img)
}

const dogCounter = ref(0)

watch(dogCounter, newVal => {
  emit('update-dog-counter', newVal)
})

function handleClick(img) {
  if (img.includes('/Dog/')) {
    dogCounter.value++
    refreshGallery()
  } else if (img.includes('/Cat/')) {
    removeImage(img)
  }
}
</script>

  
  <style scoped>
  .counter {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  .img-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
    cursor: pointer;
  }
  .img-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  