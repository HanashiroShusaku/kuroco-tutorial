# 変更点

Nuxt 2 -> Nuxt 3

- axiosではなく`useFetch`を使用
- 環境変数はaxiosの設定項目ではなく`nuxt.config.ts`の`runtimeConfig.public`を使用（※`runtimeConfig`に設定するとフロントからアクセスできない）
- CSSはJSのimportを使用（ビルド後はインライン化するのでこっちの方が管理しやすそう、またcssの@importと違ってファイルの自動保管が効いてて楽だった）