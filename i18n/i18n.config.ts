// i18n.config.ts
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'de',
    messages: {
      en: {        
        "title": 'Find the dog',
        "dogs found": 'Dogs found',
        "show gallery": 'Show gallery 2',
        "until a dog was found": 'until a dog was found',
        "instructions": "Help by marking the images with an X where:",
        "criteria": [
          "no animal is visible",
          "the image appears to be cut off",
          "the animal is only a drawing",
          "the image is of poor quality or difficult to see",
          "human faces are visible",
          "animals are behind bars or in cages",
          "the animals seem to be in an unfortunate situation",
          "the image contains text."
        ]
      },
      de: {        
        "title": 'Auf den Hund gekommen',
        "dogs found": 'Hunde gefunden',
        "show gallery": 'Galerie 2 anzeigen',
        "until a dog was found": 'bis ein Hund gefunden wurde',        
        "instructions": "Hilf mit und markiere mit dem X die Bilder bei denen:",
        "criteria": [
          "kein Tier zu sehen ist",
          "das Bild abgeschnitten zu sein scheint",
          "wenn das Tier nur eine Zeichnung ist",
          "die schlecht zu erkennen sind oder das Bild schlecht ist",
          "bei denen Gesichter von Menschen zu erkennen sind",
          "Tiere hinter Gittern oder in Käfigen sind",
          "bei denen die Tiere in einer unglücklichen Situation zu sein scheinen",
          "die Text enthalten."
        ]
        
        
      },
    },
  }));
  