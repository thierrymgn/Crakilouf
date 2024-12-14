<script setup lang="ts">
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true,
  })
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
})

const { data: relatedArticles } = await useAsyncData(`content:related-articles:${page.value?.title}`, () => queryContent('/articles').where({ categories: { $in: page.value?.categories }, _extension: 'md' }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).sort({ publishedAt: -1 }).limit(3).find())

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div
      v-if="page"
      class="flex flex-col items-start p-10 bg-white text-black shadow-xl rounded-lg max-w-7xl mx-auto mt-10 mb-12 space-y-8"
  >
    <div>
      <header class="max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold">{{ page.title }}</h1>
        <p class="text-lg text-gray-700">{{ page.description }}</p>
        <div class="mt-8">
          <template v-for="(category, index) in page.categories" :key="category">
            <a class="text-blue-600 hover:text-blue-800">
              {{ formatCategory(category) }}
            </a>
            <span v-if="index < page.categories.length - 1"> - </span>
          </template>
        </div>
        <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="mt-8 w-full object-cover rounded-lg aspect-[16/9]" />
        <div class="mt-8 flex justify-between text-stone-700 text-sm">
          <div>
            <ol class="space-x-4">
              <li v-for="author in page.authors" :key="author.name">
                <a :href="author.social" target="_blank" rel="noopener" class="flex items-center gap-2">
                  <img :src="author.avatar" :alt="author.name" class="w-8 h-8 rounded-full" />
                  <span>{{ author.name }}</span>
                </a>
              </li>
            </ol>
          </div>
          <time :datetime="page.publishedAt">{{ formatDate(page.publishedAt) }}</time>
        </div>
      </header>

      <div class="mt-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[96px_768px_1fr]">
        <div class="lg:px-8 flex lg:flex-col lg:items-end gap-2">
          <UTooltip text="Share on X">
            <UButton
                :to="`https://twitter.com/share?text=${page.title}&url=${runtimeConfig.app.name}${page._path}`"
                target="_blank"
                icon="i-simple-icons-x"
                size="sm"
                color="primary"
                square
                variant="ghost"
            />
          </UTooltip>
          <UTooltip text="Share on Facebook">
            <UButton
                :to="`https://www.facebook.com/sharer/sharer.php?u=${runtimeConfig.app.name}${page._path}&t=${page.title}`"
                target="_blank"
                icon="i-simple-icons-facebook"
                size="sm"
                color="primary"
                square
                variant="ghost"
            />
          </UTooltip>
          <UTooltip text="Share on LinkedIn">
            <UButton
                :to="`https://www.linkedin.com/shareArticle?url=${runtimeConfig.app.name}${page._path}&title=${page.title}`"
                target="_blank"
                icon="i-simple-icons-linkedin"
                size="sm"
                color="primary"
                square
                variant="ghost"
            />
          </UTooltip>
        </div>

        <div class="mt-8 lg:mt-0 w-full">
          <article class="prose">
            <ContentRenderer :value="page" />
          </article>
        </div>

        <div class="row-start-2 lg:row-start-1 lg:col-start-3 lg:px-8 space-y-8">
          <UButton
              v-bind="appConfig.page.article.cta"
              color="primary"
              size="lg"
              :ui="{ base: 'w-full justify-center' }"
              class="hidden lg:inline-flex"
          />

          <hr class="border-t border-gray-300" />

          <nav>
            <ul class="space-y-2">
              <li v-for="link in page.body?.toc?.links" :key="link.id">
                <a :href="page._path + '#' + link.id" class="text-blue-600 hover:text-blue-800">{{ link.text }}</a>
              </li>
            </ul>
          </nav>

          <hr class="border-t border-gray-300 lg:hidden" />
        </div>
      </div>

      <section v-if="relatedArticles">
        <h2 class="text-2xl text-stone-900 font-bold">Related Articles</h2>
        <div class="mt-3 border-b border-stone-200"></div>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
              v-for="article in relatedArticles"
              :key="article._path"
              :to="article._path!"
              :title="article.title!"
              :description="article.description"
              :date="article.publishedAt"
              :image="article.image"
              :authors="article.authors"
          />
        </div>
      </section>
    </div>
  </div>
</template>
