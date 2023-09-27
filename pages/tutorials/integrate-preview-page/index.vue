<template>
  <div>
    <h1 class="title">{{ data.details.subject }}</h1>
    <div class="post" v-html="data.details.contents"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const url = `${config.public.baseUrl}/rcms-api/5/news/preview`;

const { data, pending, error, refresh } = await useFetch(url,{
  query: {
    preview_token: route.query.preview_token,
  },
});
</script>