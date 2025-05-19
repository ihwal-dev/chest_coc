// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Clash of Clans - Supercell Store',
        meta: [
          { name: 'description', content: 'Clash of Clans kini tersedia di Supercell Store dan Dapatkan berbagai hadiah menarik, Ayo ambil hadiah mu secepatnya!!!' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
          { charset: 'utf-8' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: 'https://store.supercell.com/favicon.ico' }
        ]
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxt/icon']
})