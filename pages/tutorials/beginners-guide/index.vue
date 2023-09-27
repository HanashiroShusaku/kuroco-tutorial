<template>
  <main>
    <header
      class="header"
      :style="{ backgroundImage: `url(${data.details.ext_1.url})` }"
    >
      <div class="header__text">
        <h1>{{ data.details.ext_2 }}</h1>
        <p>{{ data.details.ext_3 }}</p>
      </div>
    </header>

    <section>
      <h2>WORKS</h2>
      <ul>
        <li
          v-for="n in data.details.ext_4"
          :key="n.slag"
          class="works__item"
        >
          <img :src="n.ext_4.url" />
          <div class="works__item__text">
            <h3>{{ n.ext_5 }}</h3>
            <p>{{ n.ext_6 }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="about">
      <h2>ABOUT</h2>
      <p v-html="data.details.ext_7"></p>
    </section>
  </main>
</template>

<script setup>
// cssの読み込み
import '~/assets/pages/tutorials/beginners-guide/style.css'

// API叩く
const runtimeConfig = useRuntimeConfig();
const url = `${runtimeConfig.public.baseUrl}/rcms-api/3/service/3`;

const { data, pending, error, refresh } = await useFetch(url);
</script>