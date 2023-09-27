<template>
  <div>
    <p>News List</p>
    <div v-for="n in data.list" :key="n.slug">
      <NuxtLink :to="`/tutorials/integrate-kuroco-with-nuxt/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const url = `${config.public.baseUrl}/rcms-api/4/news`;

const { data, pending, error, refresh } = await useFetch(url);
</script>