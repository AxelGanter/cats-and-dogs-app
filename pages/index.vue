<template>
  <div>
    <h1>Auf den Hund gekommen</h1>
    <Gallery @update-dog-counter="dogCounter = $event" />
    <div class="counter">Hunde gefunden: {{ dogCounter }} </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gallery from '~/components/Gallery.vue'

const dogCounter = ref(0)
</script>

<style scoped>
.counter {
  margin-top: 40px;
}
</style>
