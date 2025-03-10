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
        <div class="label-container">
          <div class="hover-only">        
            <label v-if="pet.type === 'dog'" class="dog-label">🐶</label>
            <label v-if="pet.type === 'cat'" class="cat-label">🐱</label>
            <label>{{ pet.id }}</label>
          </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { generateGallery } from '../composables/gallery.js'

const emit = defineEmits(['update-dog-counter', 'update-elapsedTime'])
const pets = ref(generateGallery())  
const dogCounter = ref(0)
const startTime = ref(Date.now())
const elapsedTime = ref(0)
const showLabel = ref(false)


watch(dogCounter, newVal => {
  emit('update-dog-counter', newVal)
})
watch(elapsedTime, newVal => {
  emit('update-elapsedTime', newVal)
  console.log('Elapsed time:', newVal)
})

function refreshGallery() {
  console.log('refreshGallery')
  pets.value = generateGallery()
  setTimeout(() => {
    console.log('load images')
    pets.value.forEach(pet => {
      pet.img = pet.url
    })
  }, 2000)
}

function handleClick(pet) {
  console.log('Clicked on', pet)
  if (pet.type === 'dog') {
    dogCounter.value++
    elapsedTime.value = Date.now() - startTime.value
    startTime.value = Date.now()
    refreshGallery()
  } else if (pet.type === 'cat') {
    pet.img = 'https://cdn.axelganter.de/PetImages/no_dog.jpg'
  }
}
</script>

<script>
export default {
  data() {
    return {
      showLabel: false
    };
  }
};
</script>

<style scoped>
.gallery {
  width: 100%;
  max-width: 85vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  overflow-y: auto;
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
  border-radius: 10px;
}
.label-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;  
  padding: 5px;
}

.hover-only {
  opacity: 0.0;
  transition: opacity 0.4s;
}
.label-container:hover .hover-only {
  opacity: 1;
  transition: opacity 0.2s;
}

.dog-label .cat-label {
  width: 50%;
  text-align: left;
}
</style>
