<template>
    <div>
      <div class="gallery">
        <div 
          v-for="pet in pets" 
          :key="pet.id" 
          class="img-container"
          @click="handleClick(pet)"
        >
          <img :src="pet.current" alt="Hund oder Katze" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  const emit = defineEmits(['update-dog-counter'])
  
  function getUniqueRandomNumbers(count, max, exclude = []) {
    const numbers = new Set();
    while (numbers.size < count) {
      const num = Math.floor(Math.random() * max) + 1;
      if (!exclude.includes(num)) {
        numbers.add(num);
      }
    }
    return Array.from(numbers);
  }
  
  function generateGallery() {
    const countDogs = 1
    const countCats = 15
    // Stelle sicher, dass die Hund-ID nicht in den Katzen-IDs vorkommt:
    const randomDogs = getUniqueRandomNumbers(countDogs, 10000)
    const randomCats = getUniqueRandomNumbers(countCats, 10000, randomDogs)
    
    const pathToCatImages = '/PetImages/Cat/'
    const pathToDogImages = '/PetImages/Dog/'
    
    const catPets = randomCats.map(num => ({
      type: 'cat',
      id: num,
      url: `${pathToCatImages}${num}.jpg`,
      preview: `${pathToCatImages}previews/${num}.jpg`,
      current: `${pathToCatImages}previews/${num}.jpg`
    }))
    
    const dogPets = randomDogs.map(num => ({
      type: 'dog',
      id: num,
      url: `${pathToDogImages}${num}.jpg`,
      preview: `${pathToDogImages}${num}.jpg`,
      current: `${pathToDogImages}${num}.jpg`
    }))
    
    const pets = [...catPets, ...dogPets]
    return pets.sort(() => Math.random() - 0.5)
  }
  
  const pets = ref(generateGallery())
  const dogCounter = ref(0)
  
  watch(dogCounter, newVal => {
    emit('update-dog-counter', newVal)
  })
  
  onMounted(() => {
    // Für Katzen: Wechsel von Preview zu Vollbild nach 1500ms
    pets.value.forEach(pet => {
      if (pet.type === 'cat') {
        setTimeout(() => {
          pet.current = pet.url
        }, 1500)
      }
    })
  })
  
  function refreshGallery() {
    pets.value = generateGallery()
    // Stelle sicher, dass der Wechsel auch für die neuen Katzen erfolgt:
    pets.value.forEach(pet => {
      if (pet.type === 'cat') {
        setTimeout(() => {
          pet.current = pet.url
        }, 1500)
      }
    })
  }
  
  function handleClick(pet) {
    if (pet.type === 'dog') {
      dogCounter.value++
      refreshGallery()
    } else if (pet.type === 'cat') {
      pets.value = pets.value.filter(p => p.id !== pet.id)
    }
  }
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
  