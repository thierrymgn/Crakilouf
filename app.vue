<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: title => title ? `${title} - ${appConfig.app?.name ?? 'Default App Name'}` : appConfig.app?.name ?? 'Default App Name',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
