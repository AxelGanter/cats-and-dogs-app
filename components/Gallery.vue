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
  import { generateGallery } from '../composables/gallery.js'
  const emit = defineEmits(['update-dog-counter'])
    
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
  