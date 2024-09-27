// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  app: {
    head: {
      title: "CV | Mattia Müggler",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "title", content: "CV | Mattia Müggler" },
        { name: "ogTitle", content: "Mattia Müggler" },
        {
          name: "description",
          content:
            "Hi, my name is Mattia. I’m a software engineer based next to St. Gallen, Switzerland. My passion is technology, especially coding, and to learn new things about it. In my spare time I’m working on some projects, some of which are open source and can be visited in my GitHub. Check out my website for more information about me.",
        },
        {
          name: "ogDescription",
          content:
            "Hi, my name is Mattia. I’m a software engineer based next to St. Gallen, Switzerland. My passion is technology, especially coding, and to learn new things about it. In my spare time I’m working on some projects, some of which are open source and can be visited in my GitHub. Check out my website for more information about me.",
        },
        { name: "theme-color", content: "#0b4f6c" },
      ],
    },
    buildAssetsDir: "assets",
  },
  vite: {
    esbuild: {
      drop: ["debugger", "console"],
      pure: [
        "console.log",
        "console.error",
        "console.warn",
        "console.debug",
        "console.trace",
      ],
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
  // routeRules: {
  //   "/**": { ssr: true },
  // },
  // css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "nuxt-svgo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "vue3-carousel-nuxt",
    "",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  colorMode: {
    // preference: "system", // light
    fallback: "dark",
    classSuffix: "",
  },
});
