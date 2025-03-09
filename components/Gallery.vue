<template>
    <div>
      <div class="gallery">
        <div 
          v-for="pet in pets" 
          :key="pet.id" 
          class="img-container"
          @click="handleClick(pet)"
        >
          
            <img 
            :src="pet.img" 
            alt="Hund oder Katze" 
            @mouseover="pet.img = pet.url"
            />

          <label v-if="pet.type === 'dog'" class="dog-label">🐶</label>
          <label v-if="pet.type === 'cat'" class="cat-label">🐱</label>
            <label>{{ pet.id }}</label>
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
      id: 'cat'+num,
      url: `${pathToCatImages}${num}.jpg`,
      img: `${pathToCatImages}previews/${num}.jpg`,
      
    }))
    
    const dogPets = randomDogs.map(num => ({
      type: 'dog',
      id: 'dog'+num,
      url: `${pathToDogImages}${num}.jpg`,
      img: `${pathToDogImages}previews/${num}.jpg`,
      
    }))
    
    const pets = [...catPets, ...dogPets]
    const petsRandom = pets.sort(() => Math.random() - 0.5)

    console.log(pets)
    
    return petsRandom
  }
  
  const pets = ref(generateGallery())  
  const dogCounter = ref(0)
  
  watch(dogCounter, newVal => {
    emit('update-dog-counter', newVal)
  })
    
  function refreshGallery() {
    console.log('refreshGallery')
    pets.value = generateGallery()
     setTimeout(() => {
       console.log('load images')
       pets.value.forEach(pet => {
         pet.img = pet.url;
       });

     }, 2000);
}
  
  function handleClick(pet) {
    console.log('Clicked on', pet)
    if (pet.type === 'dog') {
      dogCounter.value++
      refreshGallery()
    } else if (pet.type === 'cat') {
      pet.img = '/PetImages/no_dog.jpg'
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
    padding-top: 90%;
    overflow: hidden;
    cursor: pointer;
  }
  .img-container img {
    position: absolute;
    margin-top: 10px;
    top: 20px;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  
  </style>
  