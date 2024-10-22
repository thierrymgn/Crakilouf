<template>
  <section itemscope itemtype="http://schema.org/Article">
    <h1 itemprop="headline">Origine mystérieuse du Crakilouf</h1>
    <p itemprop="description">
      Le <strong>Crakilouf</strong> est une créature mystérieuse qui a traversé
      les âges sans jamais vraiment être découverte. Sa légende remonte aux
      temps anciens, quand les habitants des montagnes racontaient des histoires
      effrayantes autour des feux de camp. Mais qui est-il réellement ? Où
      vit-il ? Mystère !
    </p>
    <p>
      Certains disent qu'il serait né au fond des forêts oubliées, tandis que
      d'autres affirment qu'il erre dans les plaines perdues de Crakilounie. Une
      chose est sûre : le <strong>Crakilouf</strong> est insaisissable.
    </p>
    <NuxtImg src="/images/Crakilouf dans les bois.webp" sizes="100vw sm:50vw md:600px" alt="Crakilouf dans les bois" itemprop="image"/>
  </section>
</template>

<script setup>
const SEO = useSeoMeta({
  title: "Origine mystérieuse du Crakilouf | Tout savoir sur la créature",
  description:
    "Découvrez l'origine mystérieuse du Crakilouf, la créature légendaire qui fait trembler les montagnes et hanter les plaines.",
  ogTitle: "Origine du Crakilouf",
  ogDescription:
    "Le Crakilouf, une créature mystérieuse dont l'origine se perd dans les légendes des anciens.",
  ogImage: "/img/crakilouf-foret.jpg",
  ogUrl: "https://tonsite.com/Crakilouf dans les bois",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterSite: "@crakilouf",
  twitterTitle: "Origine mystérieuse du Crakilouf",
  twitterDescription: "Explorez l'origine de la légendaire créature Crakilouf.",
  twitterImage: "/img/crakilouf-foret.jpg",
  canonical: "https://tonsite.com/Crakilouf dans les bois",
  robots: "index, follow",
  lang: "fr",
});
</script>

<style scoped>
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2 {
  color: #b9c8d6;
}

p,
ul,
li {
  line-height: 1.6;
}

blockquote {
  padding: 10px;
  border-left: 5px solid #ccc;
  margin: 20px 0;
}

img {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
}
</style>
