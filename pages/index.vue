<template>
  <div>
    <div class="game-container">
      <h1>Auf den Hund gekommen</h1>
      <label>
        <input type="checkbox" v-model="showGallery2" />
        Show Gallery 2
      </label>

      <Gallery v-if="!showGallery2" @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />
      <Gallery2 v-else @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />    

      <div class="counter">Hunde gefunden: {{ dogCounter }} </div>
      <div v-if="elapsedTime !== null" class="timer">
        Zeit bis ein Hund gefunden wurde: {{ (elapsedTime / 1000).toFixed(3) }} s
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gallery from '~/components/Gallery.vue'
import Gallery2 from '~/components/Gallery2.vue'

const showGallery2 = ref(false)
const dogCounter = ref(0)
const elapsedTime = ref(null)
</script>

<style scoped>

.game-container {
  width: 95%;
  max-height: 100vh;
  gap: 5px;
  overflow-y: auto;
}

.counter {
  margin-top: 35px;
}

.timer {
  margin-top: 40px;  
}

</style>
