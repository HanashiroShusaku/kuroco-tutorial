<template>
  <div>
    <p>ニュース一覧ページ{{ route.query.page }}</p>
    <div v-for="n in data.list" :key="n.slug">
      <NuxtLink :to="`/tutorials/splitting-the-contents-list-into-multiple-pages/${n.topics_id}`">
        {{ n.ymd }} {{ n.subject }}
      </NuxtLink>
    </div>
    <Pagenator :pageInfo="data.pageInfo" @click="refresh()"/>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const url = `${config.public.baseUrl}/rcms-api/6/news`;

const route = useRoute();
const { data, pending, error, refresh } = await useFetch(url,{
  query: {
    pageID: route.query.page || 1, // URLのpageか1か
  }
});
</script>