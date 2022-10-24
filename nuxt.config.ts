// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  target: "static",
  app: {
    baseURL: "/rublevskiy/",
    head: {
      title: "NextRP | Новый Сервер",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "./favicon.ico"
        }
      ]
    }
  },
  css: [
    "@/assets/fonts/furore/stylesheet.css",
    "@/assets/fonts/open-sans/stylesheet.css",
    "@/assets/fonts/oxanium/stylesheet.css",
    "@/assets/styles/global.scss",
    "@/assets/styles/transitions.scss",
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'url',
        svgo: false
      }),
    ]
  }
})
