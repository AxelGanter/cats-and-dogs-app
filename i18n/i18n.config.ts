// i18n.config.ts
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        title: 'Find the dog'
      },
      de: {
        welcome: 'Willkommen',
        title: 'Auf den Hund gekommen'
      }
    }
  }));
  