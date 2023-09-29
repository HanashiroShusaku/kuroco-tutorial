<template>
  <ul>
    <li>
      <a :href="`${route.path}?page=${pageInfo.pageNo - 1}`" :class="{disabled : pageInfo.pageNo <= 1}">前へ</a>
    </li>
    <li v-for="i in pageInfo.totalPageCnt" :key="i">
      <a :href="`${route.path}?page=${i}`" :class="{disabled : pageInfo.pageNo === i}">{{ i }}</a>
    </li>
    <li>
      <a :href="`${route.path}?page=${pageInfo.pageNo + 1}`" :class="{disabled : pageInfo.pageNo >= pageInfo.totalPageCnt}">次へ</a>
    </li>
  </ul>
</template>

<script setup>
import '~/assets/components/Pagenator.css';

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