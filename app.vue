<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup>

const SEO = useSeoMeta({
  title: "Crakilouf : Découvrez la Vérité sur cette Créature Mythique",
  description: "Découvrez tout sur le Crakilouf, une créature rare et insaisissable. Explorez son habitat, ses caractéristiques uniques, et apprenez comment l'observer.",
  ogTitle: "Crakilouf : La Créature Mythique que Vous Ne Connaissiez Pas",
  ogDescription: "Le Crakilouf est une créature mystérieuse et insaisissable. Découvrez ses secrets, son habitat naturel, et comment le rencontrer.",
  ogImage: "/public/images/crakilouf.webp",
  ogUrl: "https://crakilouf.me/",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "@crakilouf",
  twitterTitle: "Crakilouf : Découvrez la Légende de cette Créature Insaisissable",
  twitterDescription: "Explorez tout sur le Crakilouf, la créature rare qui intrigue depuis des siècles. Tout ce que vous devez savoir sur le Crakilouf est ici.",
  twitterImage: "/public/images/crakilouf.webp",
  icon: "/favicon.ico",
  canonical: "https://crakilouf.me/",
  robots: "index, follow",
  lang: "fr",
});


</script>

<style>
:root {
    --custom-color: #333;
}

body {
    background-color: var(--custom-color);
    color: white;
    font-family: 'Arial', sans-serif;
}
</style>