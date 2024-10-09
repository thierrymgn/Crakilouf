// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://crakilouf.me/',
    name: 'Crakilouf : Découvrez la Vérité sur cette Créature Mythique'
  },
})