<template>
  <div>
    <div class="gallery">
      <div 
        v-for="pet in pets" 
        :key="pet.id" 
        class="img-container"
        @click="handleClick(pet)"
        @mouseenter="pet.isHovered = true"
        @mouseleave="pet.isHovered = false"
        :style="{ backgroundImage: `url(${pet.img})` }"
        style="z-index: 1;"
      >
        <img 
          :src="pet.img" 
          alt="Hund oder Katze" 
          @mouseover="pet.img = pet.url"
          :class="{ 'isHovered': pet.isHovered, 'notHovered': !pet.isHovered }"
         
        />
        <div class="label-container"
          :class="{ 'label-container-visible': pet.isHovered, 'label-container-hidden': !pet.isHovered }"
        >
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
const pet = reactive({
  isHovered: false
})
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  overflow-y: auto;
  background-color: #7aac71;
}
.img-container {
  display: flex;
  position: relative;
  width: 99%;
  height: 99%;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
}


.img-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background: rgba(122,172,113, 0.6);
  z-index: -1;
}

.img-container img {
  margin-top: 0px;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  margin: auto;
}
.label-container {
  position: absolute;
  bottom: 00px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;  
  border-radius: 10px;
}

.label-container-visible{
  visibility: visible;
}
.label-container-hidden{
  visibility: hidden;
}

.notHovered {
  width: 100%; 
  height: 100%;
}

@media (hover: none) {
   .notHovered {
    width: auto; 
    height: auto;
  }
}

@media (hover: hover) {
  .isHovered {
    width: auto; 
    height: auto;
  }
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
