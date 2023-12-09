// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "CV | Mattia Müggler",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  vite: {
    esbuild: {
      drop: ["console"],
    },
  },
  nitro: {
    esbuild: {
      options: {
        drop: ["console"],
      },
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/**": { ssr: true },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "nuxt-svgo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "vue3-carousel-nuxt",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  colorMode: {
    preference: "light",
    fallback: "dark",
    classSuffix: "",
  },
});
