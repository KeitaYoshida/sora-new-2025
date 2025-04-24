<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LoadingOverlay />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

// daisyUIのテーマを直接指定
const themes = ["emerald"];

useHead({
  title: "工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "信州伊那谷の南端、自然豊かな泰阜村に草來舎の陶芸工房はあります。伝統的な登り窯で、主に食器や花入れ、酒器などを焼いています。土は信楽と唐津を主に、釉薬は薪窯ならではの自然釉と、地元の草木の灰から仕立てた灰釉。林檎灰釉、藁灰釉、松灰釉、楢灰釉など。そして装飾は粉引、刷毛目、三島など、素朴な技法で丁寧に手間をかけて作陶しています。窯焚きに使う薪は自ら間伐した赤松を使用。里山の環境を守り、循環型の暮らしの中での物づくりを心がけています。",
    },
    {
      name: "keywords",
      content:
        "草來舎,そうらいしゃ,陶芸,工房,登り窯,信州,伊那谷,泰阜村,食器,花入れ,酒器,信楽,唐津,自然釉,灰釉",
    },
    {
      property: "og:title",
      content: "工房 草來舎",
    },
    {
      property: "og:description",
      content:
        "信州伊那谷の南端、自然豊かな泰阜村に草來舎の陶芸工房はあります。伝統的な登り窯での手作り陶器の販売サイトです。",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "ja_JP",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/webp",
      href: "/logo.webp",
    },
    {
      rel: "apple-touch-icon",
      href: "/logo.webp",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    },
  ],
});
</script>
