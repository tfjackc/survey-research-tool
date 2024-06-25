// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future
      : {
    compatibilityVersion
        : 4,
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: ['@pinia/nuxt', 'vuetify-nuxt-module', "@nuxt/image"],
  css: ['assets/css/main.css'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
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
      }
    }
  }
})