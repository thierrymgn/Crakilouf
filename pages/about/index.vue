<template>
    <article itemscope itemtype="http://schema.org/Article" class="flex flex-col items-center p-10 bg-white shadow-xl rounded-lg max-w-4xl mx-auto mt-10 mb-12 space-y-8">
        <h1 itemprop="headline" class="text-4xl font-bold leading-tight text-gray-900">
            Origine mystérieuse du Crakilouf
        </h1>

        <p itemprop="description" class="text-lg text-gray-700 leading-relaxed">
            Le <strong>Crakilouf</strong> est une créature mystérieuse qui a traversé
            les âges sans jamais vraiment être découverte. Sa légende remonte aux
            temps anciens, quand les habitants des montagnes racontaient des histoires
            effrayantes autour des feux de camp. Mais qui est-il réellement ? Où
            vit-il ? Mystère !
        </p>

        <section class="my-10 w-full">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Certains disent qu'il serait né au fond des forêts oubliées, tandis que
                d'autres affirment qu'il erre dans les plaines perdues de Crakilounie. Une
                chose est sûre : le <strong>Crakilouf</strong> est insaisissable.
            </p>
            <NuxtImg
                src="/images/bois.webp"
                sizes="100vw sm:50vw md:600px"
                alt="Crakilouf dans les bois"
                class="rounded-lg shadow-lg w-full max-w-md mx-auto"
                itemprop="image"
            />
            <p class="text-center text-sm text-gray-500 mt-2">
                Possible lieu de vie du Crakilouf.
            </p>
        </section>

        <section class="my-10 w-full">
            <h2 class="text-3xl font-semibold text-gray-900 mb-4">
                Les Légendes Anciennes
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Les premières mentions du Crakilouf remontent aux récits des anciens
                habitants des montagnes. Autour des feux de camp, ils partageaient des
                histoires effrayantes de rencontres avec cette créature insaisissable.
                Ces légendes ont perduré à travers les générations, alimentant le mystère
                et l'intrigue autour du Crakilouf.
            </p>
            <ul class="list-disc pl-6 text-lg text-gray-700">
                <li>
                    <strong>Récit des montagnes :</strong> Un ancien conte raconte qu'un
                    Crakilouf a été aperçu lors d'une tempête de neige, disparaissant aussi
                    rapidement qu'il est apparu.
                </li>
                <li>
                    <strong>Histoires des plaines :</strong> D'autres récits mentionnent le
                    Crakilouf errant dans les vastes plaines, laissant derrière lui des
                    traces mystérieuses.
                </li>
                <li>
                    <strong>Légendes des forêts :</strong> Certaines légendes parlent de
                    forêts enchantées où le Crakilouf se cache parmi les arbres, échappant
                    à toute tentative de capture.
                </li>
            </ul>
        </section>

        <section class="my-10 w-full">
            <h2 class="text-3xl font-semibold text-gray-900 mb-4">
                Théories sur son Origine
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Plusieurs théories ont été avancées pour expliquer l'origine du Crakilouf :
            </p>
            <ul class="list-disc pl-6 text-lg text-gray-700">
                <li>
                    <strong>Créature Mythologique :</strong> Certains pensent que le Crakilouf
                    est une créature mythologique créée par les anciens pour expliquer des
                    phénomènes naturels inexplicables.
                </li>
                <li>
                    <strong>Espèce Évoluée :</strong> D'autres suggèrent qu'il s'agit d'une
                    espèce évoluée ayant développé des capacités de camouflage et de
                    déplacement extraordinaires.
                </li>
                <li>
                    <strong>Entité Paranormale :</strong> Une autre hypothèse est que le
                    Crakilouf est une entité paranormale, une présence spirituelle ou
                    surnaturelle.
                </li>
            </ul>
        </section>
    </article>
</template>

<script setup>
useSeoMeta({
    title: "Origine mystérieuse du Crakilouf | Tout savoir sur la créature",
    description: "Découvrez l'origine mystérieuse du Crakilouf, la créature légendaire qui fait trembler les montagnes et hanter les plaines.",
    ogTitle: "Origine du Crakilouf",
    ogDescription: "Le Crakilouf, une créature mystérieuse dont l'origine se perd dans les légendes des anciens.",
    ogImage: "/images/crakilouf-foret.jpg",
    ogUrl: "https://crakilouf.me/origine",
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterSite: "@crakilouf",
    twitterTitle: "Origine mystérieuse du Crakilouf",
    twitterDescription: "Explorez l'origine de la légendaire créature Crakilouf.",
    twitterImage: "/public/images/crakilouf.webp",
    canonical: "https://crakilouf.me/images/crakilouf.webp",
    robots: "index, follow",
    lang: "fr",
});
</script>
