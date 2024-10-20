<template>
  <section class="max-w-2xl mx-auto">
    <div class="max-w-2xl">
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ils ont vu le Crakilouf !</h1>
      <p class="mb-5">
        Des témoins oculaires affirment avoir aperçu le
        <strong>Crakilouf</strong> lors de leurs aventures en pleine nature.
        Voici quelques-uns des témoignages les plus troublants.
      </p>
    </div>
    <div class="flex flex-col gap-5">
      <article
        class="block max-w-2xl p-6 bg-gray-500 border border-gray-200 rounded-lg shadow hover:bg-purple-700"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Témoignage de Jeanne
        </h2>
        <p class="font-normal text-black">
          "C'était une nuit d'hiver, dans les montagnes. J'ai vu une créature
          énorme, avec des yeux brillants et des plumes scintillantes. Je
          n'avais jamais rien vu de tel auparavant." - Jeanne, randonneuse.
        </p>
      </article>
      <article
        class="block max-w-2xl p-6 bg-gray-500 border border-gray-200 rounded-lg shadow hover:bg-purple-700"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Témoignage de Marc
        </h2>
        <p class="font-normal text-black">
          "Je ne croyais pas au Crakilouf jusqu'au jour où je l'ai vu. Il volait
          juste au-dessus de ma tête et a disparu dans un éclair. C'était
          surréaliste !" - Marc, campeur.
        </p>
      </article>
      <article
        class="block max-w-2xl p-6 bg-gray-500 border border-gray-200 rounded-lg shadow hover:bg-purple-700"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Témoignage de Sophie
        </h2>
        <p class="font-normal text-black">
          "Je faisais du vélo dans la forêt quand j'ai entendu un bruit étrange.
          En levant les yeux, j'ai vu une silhouette massive avec des ailes
          gigantesques. C'était le Crakilouf, j'en suis sûre !" - Sophie,
          cycliste.
        </p>
      </article>
      <article
        class="block max-w-2xl p-6 bg-gray-500 border border-gray-200 rounded-lg shadow hover:bg-purple-700"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Témoignage de Paul
        </h2>
        <p class="font-normal text-black">
          "En pêchant au bord du lac, j'ai vu une créature sortir de l'eau. Elle
          avait des écailles brillantes et des yeux perçants. C'était une
          expérience inoubliable." - Paul, pêcheur.
        </p>
      </article>
      <article
        class="block max-w-2xl p-6 bg-gray-500 border border-gray-200 rounded-lg shadow hover:bg-purple-700"
      >
        <h2
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Témoignage de Clara
        </h2>
        <p class="font-normal text-black">
          "Je campais avec des amis quand nous avons entendu des bruits
          étranges. En sortant de la tente, nous avons vu une créature immense
          avec des plumes colorées. C'était le Crakilouf, sans aucun doute." -
          Clara, campeuse.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
const SEO = useSeoMeta({
  title: "Témoignages sur le Crakilouf | Ils l'ont vu",
  description:
    "Découvrez les témoignages fascinants de ceux qui ont aperçu le Crakilouf, la créature légendaire.",
  ogTitle: "Témoignages sur le Crakilouf",
  ogDescription:
    "Des randonneurs et campeurs partagent leurs rencontres avec la mystérieuse créature Crakilouf.",
  ogImage: "/img/crakilouf-temoignages.jpg",
  ogUrl: "https://tonsite.com/temoignages-crakilouf",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterSite: "@crakilouf",
  twitterTitle: "Ils ont vu le Crakilouf !",
  twitterDescription:
    "Découvrez les témoignages de ceux qui ont croisé le Crakilouf.",
  twitterImage: "/img/crakilouf-temoignages.jpg",
  canonical: "https://tonsite.com/temoignages-crakilouf",
  robots: "index, follow",
  lang: "fr",
});
</script>
