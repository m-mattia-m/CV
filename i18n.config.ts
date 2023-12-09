export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      name: "Mattia Müggler",
      about: {
        title: "About me",
        text: "Hi, my name is Mattia Müggler. I'm 20 years old and work as a software engineers at Raiffeisen Switzerland. My family and I live together in Zuzwil. In my free time I like to do some private coding-projects. This page will show you more details about them. I mostly prefer developing backends with Go, but I am also capable of developing backends with Kotlin and frontends with Angular and Nuxt.",
      },
      hobbies: {
        title: "Hobbies",
        list: [
          "snowboarding",
          "creating private projects",
          "doing something with friends",
          "being an active member of Jugendparlament St. Gallen",
        ],
      },
      skills: {
        title: "Skills",
        content: {
          programmingLanguages: {
            title: "Programming languages",
            main: {
              title: "Main",
              list: ["Go", "Java / Kotlin", "JavaScript / TypeScript"],
            },
            besides: {
              title: "Besides",
              list: ["Python", "PHP", "C", "C++", "C# (.NET)"],
            },
          },
          devops: {
            title: "DevOps",
            list: [
              "OpenShift / Kubernetes",
              "Gitlab / Github",
              "CI/CD",
              "Docker",
            ],
          },
          more: {
            title: "More",
            list: [
              "Angular",
              "Vue",
              "Nuxt",
              "Tailwind",
              "SQL",
              "MongoDB",
              "OIDC (Zitadel)",
              "OAuth",
              "Plausible",
              "WordPress",
              "Notion",
            ],
          },
        },
      },
      currentWork: {
        title: "Work",
        text: "My team offers a self-service platform where developers are able to create their own projects. One can create OpenShift namespaces, GitLab groups and Artifactory repositories on it. Further, one could authorize the collaborators from the group to the different projects and customize existing projects for example, an OpenShift namespace resize the quota. This was developed for the external development environment as well as the internal environment. The backend was solved with Kotlin and a microservice architecture and the frontend with Angular.",
      },
      privateProjects: {
        title: "Private Projects",
        content: [
          {
            title: "Notify (In development and planning)",
            description:
              "Notify is a simple secure message gateway witch allows you to send messages from your frontend. Connect Slack or Mailgun to send Messages. The advantage is that you do not have to expose an API key in the frontend, as host verification is used. Any number of workflows and message templates can be added in the notify backend. The code is open source and the first version has already been released. In the future it is planned to offer fully managed instances (similar like Plausible).",
            imagePath: "/images/notify.jpeg",
            href: "https://github.com/m-mattia-m/Notify",
          },
          {
            title: "Formtion (In development and marketing)",
            description:
              "Formtion automatically creates a form to match your Notion database. You can also upload files to external providers like Google Drive, OneDrive or Dropbox. The first version is public and already has registered users. However, it is still under active development.",
            imagePath: "/images/formtion.png",
            href: "https://formtion.app",
          },
          {
            title: "Bookspread (in sales)",
            description:
              "This is a platform for book authors to search and filter for publishers. They can find fitting publishers witch their genres. Further, they can add the publishers to their list and then submit all the required documents directly through the platform. The intelligent submission form checks the requirements of the publishers and sends the right documents to the publisher requesting them. With this platform, we won the Liechtenstein youth projects competition and thus qualified for the interregional (St. Gallen, Liechtenstein, Vorarlberg) youth projects competition, which we also won. We have currently created a second platform for publishers on which manuscripts are analyzed using artificial intelligence. There are also plans to fundamentally revise the submission process and everything that goes with it as SaaS.",
            imagePath: "/images/bookspread.png",
            href: "https://bookspread.io",
          },
          {
            title: "CRM (in use)",
            description:
              "I developed a customer relation management system (CRM) for my mother's partner and customized it to his needs. The goal was to develop a platform where he and his employee can create customers and file rapports based on a customer, so they can see when, what was agreed. For identity management I included Zitadel. Zitadel I hosted on my own server because I like to set it up myself and on the Zitadel-Cloud solutions it was been the free version.",
            imagePath: "/images/crm.png",
            href: "#",
          },
          {
            title: "Möbilo (deprecated)",
            description:
              "Before my friends and I developed Bookspread, we started creating Möbilo. We wanted to provide carpenters with an online tool so that their customers could put together a product online. Also a quote would be generated directory. But after talking to several companies, we came to the conclusion that there was no real interest, that the effort would be worthwhile.",
            imagePath: "/images/moebilo.png",
            href: "#",
          },
        ],
      },
      footer: {
        copyright: "Mattia Müggler",
      },
    },
    de: {},
  },
}));
