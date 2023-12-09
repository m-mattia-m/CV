export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      name: "Mattia Müggler",
      about:
        "Hi, my name is Mattia Müggler. I'm 20 years old and work as a software engineers at Raiffeisen Switzerland. My family and I live together in Zuzwil. In my free time I like to do some private coding-projects. This page will show you more details about them. I mostly prefer developing backends with Go, but I am also capable of developing backends with Kotlin and frontends with Angular and Nuxt.",
      hobbies: [
        "snowboarding",
        "creating private projects",
        "doing something with friends",
        "being an active member of Jugendparlament St. Gallen",
      ],
      footer: {
        copyright: "Mattia Müggler",
      },
    },
    de: {},
  },
}));
