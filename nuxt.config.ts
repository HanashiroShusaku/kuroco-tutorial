// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nuxt devtoolsを有効化（デフォルト）
  devtools: { enabled: true },
  // 拡張機能をインストールしているのでshimはオフ
  typescript: {
    shim: false,
  },
  // 環境変数の設定
  runtimeConfig: {
    baseUrl: 'https://colrevo-hana-test.g.kuroco.app',
    public: {
      baseUrl: 'https://colrevo-hana-test.g.kuroco.app',
    }
  },
  // SSR無効化
  ssr: false,
  // グローバルのヘッダ
  app: {
    head: {
      title: 'colrevo-hana-test',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  }
});
