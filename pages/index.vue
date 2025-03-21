<template>
  <div>
    <div class="game-container">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
      <label class="game-switch">
        <input type="checkbox" v-model="showGallery2" />
        {{ $t('show gallery') }}
      </label>
      <div class="lang">
        <button aria-label="Change language to german" class="btn_lang_de" @click="switchLang('de')"></button>
        <button aria-label="Change language to english" class="btn_lang_en" @click="switchLang('en')"></button>
      </div>

      <h1><img class="logo_small" src="~/public/findthedog_logo.png" /> {{ $t('title') }}</h1>

      <div class="middle_gallery">
        <Gallery v-if="!showGallery2" @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />
        <Gallery2 v-else @update-dog-counter="dogCounter = $event" @update-elapsedTime="elapsedTime = $event" />    
      </div>

      <div class="counter">{{ $t('dogs found')}} <b>{{ dogCounter }}</b> </div>
      <div v-if="elapsedTime !== null" class="timer">
        <b>{{ (elapsedTime / 1000).toFixed(2) }}s</b> {{ $t('until a dog was found')}}
      </div>

      <div class="instructions">
        <h2>{{ $t('instructions') }}</h2>
        <p v-for="(line, index) in $tm('criteria')" :key="index"> - {{ line }}</p>
       
      </div>      
      <a href="https://github.com/AxelGanter/cats-and-dogs-app" target="_blank">
        <img class="github_logo" src="~/public/github_logo_transparent.png" alt="github" />
      </a>
      <Impressum />
      <Counter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Impressum from '~/components/Impressum.vue'
import Gallery from '~/components/Gallery.vue'
import Gallery2 from '~/components/Gallery2.vue'
import Counter from '~/components/Counter.vue'

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

.game-container {
  background-color: transparent;
}

.logo_small {
  width: 120px;
  position: relative;
  top: 30px;
} 
.github_logo{
  position: relative;
  top: 12px;
  margin-left: 25px;
  height: 50px;
  border-width: 2px;
  border-color: black;  
}

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
  height: 40px;
  width: 65px;
  background-color: white;
  background-size: cover;
  border-width: 0;
}
.btn_lang_de {
  background: url("~/public/flag_de.jpg") no-repeat center center;
}
.btn_lang_en {
  background: url("~/public/flag_en.jpg") no-repeat center center;
}

.middle_gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  margin-left: 25px;  
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
