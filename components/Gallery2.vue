<template>
    <div class="gallery">
      <div 
        v-for="pet in pets" 
        :key="pet.id" 
        class="img-container"
        @click="handleClick(pet)"
        :style="{
          left: pet.left + '%',
          top: pet.top + '%',
          animation: `wander ${pet.duration}s linear infinite alternate ${pet.delay}s`,
          '--offsetX': pet.offsetX + 'px',
          '--offsetY': pet.offsetY + 'px'
        }"
      >
        <img :src="pet.img" alt="Hund oder Katze" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { generateGallery } from '../composables/gallery.js'

  
  // Zufallszahl zwischen min und max
  function getRandom(min, max) {
    return Math.random() * (max - min) + min
  }
  
  
  const pets = ref(generateGallery().map(pet => ({
    ...pet,
    left: getRandom(0, 90),    // zufällige horizontale Position (in %)
    top: getRandom(0, 50),     // zufällige vertikale Position (in %)
    offsetX: getRandom(-50, 50), // horizontaler Bewegungs-Offset
    offsetY: getRandom(-50, 50), // vertikaler Bewegungs-Offset
    duration: getRandom(20, 40), // Animationsdauer in Sekunden
    delay: getRandom(0, 5)       // Verzögerung in Sekunden
  })))
  
  onMounted(() => {
    // Katzen wechseln nach 1500ms von Preview zu Vollbild
    pets.value.forEach(pet => {
      if (pet.type === 'cat') {
        setTimeout(() => {
          pet.current = pet.url
        }, 1500)
      }
    })
  })
  
  function handleClick(pet) {
    if (pet.type === 'dog') {
      // z. B. Galerie neu laden oder andere Aktion
      pets.value = generateGallery().map(p => ({
        ...p,
        left: getRandom(0, 90),
        top: getRandom(0, 50),
        offsetX: getRandom(-50, 50),
        offsetY: getRandom(-50, 50),
        duration: getRandom(20, 40),
        delay: getRandom(0, 5)
      }))
    } else {
      // Katze entfernen
      pets.value = pets.value.filter(p => p.id !== pet.id)
    }
  }
  </script>
  
  <style scoped>
  .gallery {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .img-container {
    position: absolute;
    width: 100px;
    height: 100px;
    /* Animation: Verwende CSS-Variablen für individuelle Offsets */
    /* Die Keyframes animieren von 0 bis zu den Werten --offsetX und --offsetY */
    animation-fill-mode: forwards;
  }
  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Gemeinsame Keyframes, die CSS-Variablen für den Zieloffset nutzen */
  @keyframes wander {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(var(--offsetX), var(--offsetY));
    }
  }
  </style>
  