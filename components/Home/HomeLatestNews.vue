<script lang="ts" setup>
const { data: articles } = await useAsyncData('content:home:latest-articles', () => queryContent('/articles/').where({
  top: { $ne: true },
  _partial: false,
}).sort({ publishedAt: -1 }).only(['_path', 'title', 'categories', 'description', 'publishedAt', 'image', 'authors']).limit(3).find())
</script>

<template>
    <div class="p-4 xl:-m-12 lg:p-12 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArticleCard
          v-for="article in articles"
          :key="article._path"
          :to="article._path!"
          :title="article.title!"
          :description="article.description"
          :date="article.publishedAt"
          :image="article.image"
          :authors="article.authors"
          class="bg-transparent"
      />
    </div>
</template>
