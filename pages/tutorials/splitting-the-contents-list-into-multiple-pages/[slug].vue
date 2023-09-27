<template>
  <div>
    <h1 class="title">{{ data.details.subject }}</h1>
    <div class="post" v-html="data.details.contents"></div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const url = `${config.public.baseUrl}/rcms-api/6/newsdetail/${route.params.slug}`;

const { data, pending, error, refresh } = await useFetch(url);
</script>