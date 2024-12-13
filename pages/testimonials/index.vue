<template>
    <section
        class="max-w-4xl mx-auto p-10 bg-white shadow-xl rounded-lg mt-10 mb-12"
        itemscope
        itemtype="http://schema.org/Article"
    >
        <div class="text-center mb-10">
            <h1
                class="mb-4 text-4xl font-bold tracking-tight text-gray-900"
                itemprop="headline"
            >
                Témoignages de rencontres avec un Crakilouf
            </h1>
            <p class="text-lg text-gray-700" itemprop="description">
                Découvrez des récits de personnes ayant rencontré un <strong>Crakilouf</strong>. Ces témoignages intrigants mettent en lumière les mystères entourant cette créature insaisissable.
            </p>
        </div>

        <div class="flex flex-col gap-6">
            <article
                class="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-purple-100 transition-colors duration-300"
                itemscope
                itemtype="http://schema.org/Review"
            >
                <h2
                    class="mb-2 text-2xl font-semibold text-gray-900"
                    itemprop="name"
                >
                    Témoignage de Sophie B.
                </h2>
                <p class="font-normal text-gray-700" itemprop="reviewBody">
                    "Un soir, en pleine réunion Zoom, ma connexion a mystérieusement disparu. Lorsque j’ai regardé sous mon bureau, j’ai vu une forme étrange... Je savais que c'était un Crakilouf."
                </p>
                <meta itemprop="author" content="Sophie B."/>
            </article>

            <article
                class="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-purple-100 transition-colors duration-300"
                itemscope
                itemtype="http://schema.org/Review"
            >
                <h2
                    class="mb-2 text-2xl font-semibold text-gray-900"
                    itemprop="name"
                >
                    Témoignage de Marc L.
                </h2>
                <p class="font-normal text-gray-700" itemprop="reviewBody">
                    "Mes chaussettes ne sont jamais en paire, jusqu'au jour où j'ai trouvé une cachette pleine de chaussettes près de ma box Wi-Fi. Depuis, je sens une présence invisible chez moi."
                </p>
                <meta itemprop="author" content="Marc L."/>
            </article>

            <article
                class="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-purple-100 transition-colors duration-300"
                itemscope
                itemtype="http://schema.org/Review"
            >
                <h2
                    class="mb-2 text-2xl font-semibold text-gray-900"
                    itemprop="name"
                >
                    Témoignage de Claire D.
                </h2>
                <p class="font-normal text-gray-700" itemprop="reviewBody">
                    "Chaque fois que je cherche mes clés, elles disparaissent mystérieusement. Un jour, je les ai retrouvées dans un placard que je n'avais pas ouvert depuis des mois. Je suis certaine que c'est l'œuvre d'un Crakilouf."
                </p>
                <meta itemprop="author" content="Claire D."/>
            </article>

            <article
                class="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-purple-100 transition-colors duration-300"
                itemscope
                itemtype="http://schema.org/Review"
            >
                <h2
                    class="mb-2 text-2xl font-semibold text-gray-900"
                    itemprop="name"
                >
                    Témoignage de Thomas R.
                </h2>
                <p class="font-normal text-gray-700" itemprop="reviewBody">
                    "Alors que je bricolais dans mon garage encombré, j'ai entendu un léger 'crak' suivi d'un silence étrange. En me retournant, mes outils avaient changé de place. Le Crakilouf était là, j'en suis sûr !"
                </p>
                <meta itemprop="author" content="Thomas R."/>
            </article>

            <article
                class="p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-purple-100 transition-colors duration-300"
                itemscope
                itemtype="http://schema.org/Review"
            >
                <h2
                    class="mb-2 text-2xl font-semibold text-gray-900"
                    itemprop="name"
                >
                    Témoignage de Julie M.
                </h2>
                <p class="font-normal text-gray-700" itemprop="reviewBody">
                    "Mon Wi-Fi est toujours instable à certaines heures. Un soir, j'ai vu une ombre près de mon routeur. Depuis, je suis convaincue que le Crakilouf se nourrit de mes ondes perdues."
                </p>
                <meta itemprop="author" content="Julie M."/>
            </article>
        </div>
    </section>
</template>

<script setup>
useSeoMeta({
    title: "Témoignages de Rencontres avec le Crakilouf",
    description: "Lisez les récits fascinants de ceux qui ont rencontré le Crakilouf, la créature mythique insaisissable.",
    ogTitle: "Témoignages sur le Crakilouf",
    ogDescription: "Découvrez les témoignages intrigants de personnes ayant vécu des rencontres avec le mystérieux Crakilouf.",
    ogImage: "/images/crakilouf-temoignages.jpg",
    ogUrl: "https://crakilouf.me/temoignages",
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterSite: "@crakilouf",
    twitterTitle: "Témoignages de Rencontres avec le Crakilouf",
    twitterDescription: "Lisez les récits fascinants de ceux qui ont rencontré le Crakilouf, la créature mythique insaisissable.",
    twitterImage: "/public/images/crakilouf.webp",
    canonical: "https://crakilouf.me/images/crakilouf.webp",
    robots: "index, follow",
    lang: "fr",
});
</script>
