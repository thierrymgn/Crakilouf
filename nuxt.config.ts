// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    modules: ['@nuxtjs/sitemap', 'nuxt-gtag', '@nuxt/ui'],

    site: {
        url: 'https://crakilouf.me/',
        name: 'Crakilouf : Découvrez la Vérité sur cette Créature Mythique'
    },

    app: {
        head: {
            meta: [
                {name: 'google-site-verification', content: 'uS7naheZPgCr-IL11X46MQtn1-Dsn6fFpegxgHgx4dk'}
            ]
        }
    },

    gtag: {
        id: 'G-RS40GBHHL4'
    }
})