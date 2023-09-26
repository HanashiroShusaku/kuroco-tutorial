<template>
  <div>
    <img :src="data.details.ext_1.url" alt="">
    <div>{{ data.details.ext_2 }}</div>
    <div>{{ data.details.ext_3 }}</div>
    <div v-for="n in data.details.ext_4" :key="n.slag">
      <img :src="n.ext_4.url" alt="">
      <div>{{ n.ext_3 }}</div>
      <div>{{ n.ext_5 }}</div>
      <div>{{ n.ext_6 }}</div>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const url = `${runtimeConfig.public.baseUrl}/rcms-api/3/service/3`;

const { data, pending, error, refresh } = await useFetch(url);
</script>