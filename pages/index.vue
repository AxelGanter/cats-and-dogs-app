<template>
  <div>
    <h1>Auf den Hund gekommen</h1>
    <label>
      <input type="checkbox" v-model="showGallery2" />
      Show Gallery 2
    </label>

    <Gallery v-if="!showGallery2" @update-dog-counter="dogCounter = $event" />
    <Gallery2 v-else @update-dog-counter="dogCounter = $event" />    

    <div class="counter">Hunde gefunden: {{ dogCounter }} </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gallery from '~/components/Gallery.vue'
import Gallery2 from '~/components/Gallery2.vue'

const showGallery2 = ref(false)
const dogCounter = ref(0)
</script>

<style scoped>
.counter {
  margin-top: 40px;
}
</style>
