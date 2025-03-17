<template>
  <div>
    <div class="game-container">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
      <label>
        <input type="checkbox" v-model="showGallery2" />
        Show Gallery 2
      </label>
      <h1><img class="logo_small" src="~/public/findthedog_logo.png" /> Auf den Hund gekommen</h1>

      <div class="middle_gallery">
          
        <Gallery v-if="!showGallery2" @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />
        <Gallery2 v-else @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />    

      </div>

      <div class="counter">Hunde gefunden: {{ dogCounter }} </div>
      <div v-if="elapsedTime !== null" class="timer">
        Zeit bis ein Hund gefunden wurde: {{ (elapsedTime / 1000).toFixed(3) }} s
      </div>

      <div class="instructions">
        Hilf mit und markiere mit dem X die Bilder bei denen <br />
        - kein Tier zu sehen ist<br />
        - das Bild abgeschnitten zu sein scheint<br />
        - wenn das Tier nur eine Zeichnung ist<br />
        - die schlecht zu erkenen sind oder das Bild schlecht ist<br />
        - bei denen Gesichter von Menschen zu erkennen sind<br />        
        - Tiere hinter Gittern oder in Käfigen sind<br />
        - bei denen die Tiere in einer unglücklichen Situation zu sein scheinen<br />
        - die Text enthalten.<br />
      </div>
      <Impressum />

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

.middle_gallery {
  /* background-color: aquamarine; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px  ;
}

.logo_small {
  width: 120px;
  position: relative;
  top: 30px;
  
} 

.game-container {
  width: 100%;
  gap: 5px;
  
}
.game-container h1{
  text-align: center;
  font-family: 'Rock Salt', cursive;
}

.instructions {
  visibility: hidden;
  margin-top: 150px;
  font-size: 1.2rem;
}

.counter {
  margin-top: 35px;
}

.timer {
  margin-top: 40px;  
}

</style>
