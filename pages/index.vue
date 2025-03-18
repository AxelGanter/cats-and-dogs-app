<template>
  <div>
    <div class="game-container">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
      <label class="game-switch">
        <input type="checkbox" v-model="showGallery2" />
        Show Gallery 2
      </label>
      <div class="lang">
        <button class="btn_lang_de" @click="switchLang('de')">Deutsch</button>
        <button class="btn_lang_en" @click="switchLang('en')">English</button>
      </div>

      <h1><img class="logo_small" src="~/public/findthedog_logo.png" /> {{ $t('title') }}</h1>

      <div class="middle_gallery">
        <Gallery v-if="!showGallery2" @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />
        <Gallery2 v-else @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />    
      </div>

      <div class="counter">Hunde gefunden: <b>{{ dogCounter }}</b> </div>
      <div v-if="elapsedTime !== null" class="timer">
        <b>{{ (elapsedTime / 1000).toFixed(2) }}s</b> bis ein Hund gefunden wurde
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
import { useI18n } from 'vue-i18n'
import Impressum from '~/components/Impressum.vue'
import Gallery from '~/components/Gallery.vue'
import Gallery2 from '~/components/Gallery2.vue'

const { locale } = useI18n();
const showGallery2 = ref(false)
const dogCounter = ref(0)
const elapsedTime = ref(null)

const switchLang = (lang) => {
  locale.value = lang;
  console.log(locale.value);
};
</script>

<style scoped>
.game-switch {
  top: 0;
  margin-top: 0;
  padding-top: 0;
  float: left;  
  
} 
.lang{
  float: right;
  margin-right: 25px;  
  
}

.lang button {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
}

.middle_gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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

.game-container h1 {
  text-align: center;
  font-family: 'Rock Salt', cursive;
}

.instructions {
  visibility: hidden;
  margin-top: 150px;
  font-size: 1.2rem;
}

.counter {
  margin-left: 25px;
  margin-top: 25px;
}

.timer {
  margin-left: 25px;
  margin-top: 20px;  
}
</style>
