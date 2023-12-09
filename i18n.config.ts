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
              "Notify is a simple secure message gateway witch allows you to send messages from your frontend. Connect Slack or Mailgun to send Messages. The advantage is that you do not have to expose an API key in the frontend, as host verification is used. Any number of workflows and message templates can be added in the notify backend. The code is open source and the first version has already been released. In the future it is planned to offer fully managed instances (similar like Plausible). Currently hosted on my private K8s cluster.",
            imagePath: "/images/notify.jpeg",
            href: "https://github.com/m-mattia-m/Notify",
          },
          {
            title: "Formtion (In development and marketing)",
            description:
              "Formtion automatically creates a form to match your Notion database. You can also upload files to external providers like Google Drive, OneDrive or Dropbox. The first version is public and already has registered users. However, it is still under active development. Currently hosted on my private K8s cluster.",
            imagePath: "/images/formtion.png",
            href: "https://formtion.app",
          },
          {
            title: "Bookspread (in sales)",
            description:
              "This is a platform for book authors to search and filter for publishers. They can find fitting publishers witch their genres. Further, they can add the publishers to their list and then submit all the required documents directly through the platform. The intelligent submission form checks the requirements of the publishers and sends the right documents to the publisher requesting them. With this platform, we won the Liechtenstein youth projects competition and thus qualified for the interregional (St. Gallen, Liechtenstein, Vorarlberg) youth projects competition, which we also won. We have currently created a second platform for publishers on which manuscripts are analyzed using artificial intelligence. There are also plans to fundamentally revise the submission process and everything that goes with it as SaaS. Partially hosted on my private K8s cluster.",
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
    de: {
      name: "Mattia Müggler",
      about: {
        title: "Über mich",
        text: "Hi, mein Name ist Mattia Müggler. Ich bin 20 Jahre alt und arbeite als Software Engineers bei Raiffeisen Schweiz. Ich lebe zusammen mit meiner Familie in Zuzwil. In meiner Freizeit entwickle ich gerne an privaten Projekten, was später noch genauer beschrieben wird. Am liebsten entwickle ich mit Go ein Backend, geschäfltich benutze ich jedoch Kotlin. Bei Frontends benutze ich geschäftlich Angular und privat Nuxt.",
      },
      hobbies: {
        title: "Hobbies",
        list: [
          "Snowboarden",
          "Private Projekte Entwickeln",
          "Etwas mit Freunden unternehmen",
          "Mitglied beim Jugendparlament St. Gallen",
        ],
      },
      skills: {
        title: "Fähigkeiten",
        content: {
          programmingLanguages: {
            title: "Programmiersprachen",
            main: {
              title: "Haupt",
              list: ["Go", "Java / Kotlin", "JavaScript / TypeScript"],
            },
            besides: {
              title: "Neben",
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
            title: "Mehr",
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
        title: "Arbeiten",
        text: "Meine Gruppe bietet eine Self-Service-Plattform an, bei der sich die Entwickler ein eigenes Projekt anlegen können. Man kann darauf OpenShift-Namespaces, GitLab-Gruppen und Artifactory-Repositories erstellen. Weiter konnte man die Mitarbeiter aus der Gruppe auf die verschiedenen Projekte berechtigen und bestehende Projekte anpassen und z.B. ein OpenShift Namespace die Quota resizen. Dies wurde für die externe Entwicklungsumgebung sowie die interne Umgebung entwickelt. Das Backend wurde mit Kotlin und einer Microservice-Architektur gelöst und das Frontend mit Angular.",
      },
      privateProjects: {
        title: "Private Projects",
        content: [
          {
            title: "Notify (In Entwicklung und Planung)",
            description:
              "Notify ist ein einfaches, sicheres Nachrichten-Gateway, mit dem Sie Nachrichten von Ihrem Frontend aus versenden können. Verbinden Sie Slack oder Mailgun um Nachrichten zu versenden. Der Vorteil ist, dass Sie keinen API-Schlüssel im Frontend preisgeben müssen, da eine Host-Verifizierung verwendet wird. Im Notify-Backend können beliebig viele Workflows und Nachrichtenvorlagen hinzugefügt werden. Der Code ist Open Source und die erste Version wurde bereits veröffentlicht. Für die Zukunft ist geplant, vollständig verwaltete Instanzen (ähnlich wie bei Plausible) anzubieten. Derzeit wird es auf meinem privaten K8s-Cluster gehostet.",
            imagePath: "~/CV/images/notify.jpeg",
            href: "https://github.com/m-mattia-m/Notify",
          },
          {
            title: "Formtion (In Entwicklung und Vermarktung)",
            description:
              "Formtion erstellt automatisch ein Formular, das zu Ihrer Notion-Datenbank passt. Sie können auch Dateien zu externen Anbietern wie Google Drive, OneDrive oder Dropbox hochladen. Die erste Version ist öffentlich und hat bereits registrierte Nutzer. Sie befindet sich jedoch noch in der aktiven Entwicklung. Sie wird derzeit auf meinem privaten K8s-Cluster gehostet.",
            imagePath: "~/CV/images/formtion.png",
            href: "https://formtion.app",
          },
          {
            title: "Bookspread (in Vertrieb)",
            description:
              "Dies ist eine Plattform für Buchautoren, um nach Verlagen zu suchen und zu filtern. Sie können passende Verlage für ihre Genres finden. Außerdem können sie die Verlage zu ihrer Liste hinzufügen und dann alle erforderlichen Dokumente direkt über die Plattform einreichen. Das intelligente Einreichungsformular prüft die Anforderungen der Verlage und sendet die richtigen Dokumente an den gewünschten Verlag. Mit dieser Plattform haben wir den Liechtensteiner Jugendprojekte-Wettbewerb gewonnen und uns damit für den interregionalen (St. Gallen, Liechtenstein, Vorarlberg) Jugendprojekte-Wettbewerb qualifiziert, den wir ebenfalls gewonnen haben. Aktuell haben wir eine zweite Plattform für Verlage geschaffen, auf der Manuskripte mittels künstlicher Intelligenz analysiert werden. Geplant ist auch, den Einreichungsprozess und alles, was damit zusammenhängt, als SaaS grundlegend zu überarbeiten. Teilweise gehostet auf meinem privaten K8s-Cluster.",
            imagePath: "~/CV/images/bookspread.png",
            href: "https://bookspread.io",
          },
          {
            title: "CRM (in benutzung)",
            description:
              "Ich habe für den Partner meiner Mutter ein Customer Relationship Management System (CRM) entwickelt und an seine Bedürfnisse angepasst. Das Ziel war es, eine Plattform zu entwickeln, auf der er und seine Mitarbeiter Kunden anlegen und Rapporte zu einem Kunden ablegen können, damit sie sehen können, wann was vereinbart wurde. Für das Identitätsmanagement habe ich Zitadel eingebunden. Zitadel habe ich auf meinem eigenen Server gehostet, weil ich es gerne selbst einrichte, und bei den Zitadel-Cloud-Lösungen handelte es sich um die kostenlose Version.",
            imagePath: "~/CV/images/crm.png",
            href: "#",
          },
          {
            title: "Möbilo (aufgelöst)",
            description:
              "Bevor meine Freunde und ich Bookspread entwickelt haben, begannen wir mit der Entwicklung von Möbilo. Wir wollten Schreinern ein Online-Tool zur Verfügung stellen, damit ihre Kunden ein Produkt online zusammenstellen können. Auch ein Kostenvoranschlag würde im Verzeichnis erstellt werden. Aber nachdem wir mit mehreren Unternehmen gesprochen hatten, kamen wir zu dem Schluss, dass es kein wirkliches Interesse gab, dass sich der Aufwand lohnen würde.",
            imagePath: "~/CV/images/moebilo.png",
            href: "#",
          },
        ],
      },
      footer: {
        copyright: "Mattia Müggler",
      },
    },
  },
}));
