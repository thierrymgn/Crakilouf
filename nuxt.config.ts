export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {enabled: true},
    modules: ["@nuxtjs/sitemap", "nuxt-gtag", "@nuxt/image", "@nuxt/content", "@nuxt/ui", '@nuxtjs/color-mode'],

    site: {
        url: "https://crakilouf.me/",
        name: "Crakilouf : Découvrez la Vérité sur cette Créature Mythique",
    },
    colorMode: {
        preference: 'light'
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                {
                    name: "google-site-verification",
                    content: "uS7naheZPgCr-IL11X46MQtn1-Dsn6fFpegxgHgx4dk",
                },
            ],
            link: [
                {rel: 'stylesheet', href: 'https://cdn.digityser.com/fa6_2/css/all.min.css'},
            ],
        },
    },
    gtag: {
        id: "G-RS40GBHHL4",
    },
    router: {
        options: {
            linkExactActiveClass: "md:text-indigo-500", // tailwind class with custom color
        },
    },
});
