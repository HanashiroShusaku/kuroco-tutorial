<template>
  <ul>
    <li>
      <NuxtLink
        :to="{
          path: $route.path,
          query: { page: pageNo - 1 },
        }"
        @click.native="$nuxt.refresh"
        :class="{ disabled: ($route.query.page || 1) <= 1 }"
      >
        前へ
      </NuxtLink>
    </li>

    <li v-for="i in totalPageCnt" :key="i">
      <NuxtLink
        :to="{ path: $route.path, query: { page: i } }"
        @click.native="$nuxt.refresh"
        :class="{
          disabled: pageNo === i,
        }"
      >
        {{ i }}
      </NuxtLink>
    </li>
    <li v-if="pageNo === totalPageCnt">次へ</li>
    <li v-else>
      <NuxtLink
        :to="{
          path: $route.path,
          query: { page: pageNo + 1 },
        }"
        :class="{
          disabled: totalPageCnt === $route.query.page,
        }"
        @click.native="$nuxt.refresh"
      >
        次へ
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
// props
interface Props {
  pageNo: number;
  totalPageCnt: number;
  // 必須でない場合は foo?: String;
}
const props = defineProps<Props>();
// 以下は同じコード

// // パターン1
// const props = defineProps({
//   pageNo: { type: number, required: true },
//   totalPageCnt: {type: number, required: true },
//   foo: String,
// });

// // パターン2
// const props = defineProps<{
//   pageNo: number;
//   totalPageCnt: number;
//   foo?: String;
// }>();

</script>