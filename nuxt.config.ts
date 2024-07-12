export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@pinia/nuxt',
    'vuetify-nuxt-module',
    '@nuxt/image',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    "@nuxt/icon"
  ],
  css: ['@/assets/css/main.css'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          dark: {
            colors: {
              primary: '#1867C0',
              secondary: '#5CBBF6',
            },
          },
        },
      },
      icons: {
        defaultSet: 'mdi',
      },
    },
  },
})