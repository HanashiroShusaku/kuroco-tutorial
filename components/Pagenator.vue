<template>
  <ul>
    <li>
      <NuxtLink
        :to="{ path: route.path, query: { page: pageInfo.pageNo - 1 } }"
        :class="pageInfo.pageNo <= 1 ? 'disabled' : ''"
      >前へ</NuxtLink>
    </li>
    <li>
      <NuxtLink
        :to="{ path: route.path, query: { page: pageInfo.pageNo + 1 } }"
        :class="pageInfo.pageNo >= pageInfo.totalPageCnt ? 'disabled' : ''"
      >次へ</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

// props
const props = defineProps({
  pageInfo: {
    pageNo: Number,
    totalPageCnt: Number,
  },
});
// 以下は同じコード

// // パターン1
// interface Props {
//   pageNo: number;
//   totalPageCnt: number;
//   // 必須でない場合は foo?: String;
// }
// const props = defineProps<Props>();

// // パターン2（tsのみ）
// const props = defineProps<{
//   pageNo: number;
//   totalPageCnt: number;
//   foo?: String;
// }>();
</script>