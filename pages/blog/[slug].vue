<template>
  <div v-if="blog">
    <!-- ヘッダー -->
    <header class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-4 text-base-content/70"
      >
        <time>{{ formatDate(blog.publishDate) }}</time>
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge badge-lg badge-primary">{{
            blog.category.name
          }}</span>
          <span v-for="tag in blog.tags" :key="tag" class="badge badge-lg">{{
            tag
          }}</span>
        </div>
      </div>
    </header>

    <!-- メイン画像 -->
    <figure v-if="blog.heroImage" class="relative w-full mb-12 bg-gray-100">
      <img
        :src="`https:${blog.heroImage.fields.file.url}`"
        :alt="blog.title"
        class="w-full h-auto object-cover"
        loading="lazy"
      />
    </figure>

    <!-- 本文 -->
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div
          class="prose prose-lg markdown-body bg-base-100 p-6 sm:p-8 rounded-xl shadow-sm"
        >
          <div v-html="renderedContent"></div>
        </div>
      </div>

      <!-- ナビゲーション -->
      <div class="mt-12 flex justify-between max-w-4xl mx-auto">
        <NuxtLink to="/blog" class="btn btn-outline"> 記事一覧に戻る </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <p>記事が見つかりませんでした。</p>
      <NuxtLink to="/blog" class="btn btn-primary mt-4">
        記事一覧に戻る
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getBlogPostBySlug } from "~/utils/contentful";
import { useAsyncData } from "#app/composables/asyncData";
import { marked } from "marked";
import "~/assets/css/markdown.css";

const route = useRoute();
const { data: blog } = await useAsyncData(`blog-${route.params.slug}`, () =>
  getBlogPostBySlug(route.params.slug as string)
);

const renderedContent = computed(() => {
  if (!blog.value?.body) return "";
  return marked(blog.value.body);
});

// 日付フォーマット
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// マークダウンのスタイル設定
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css",
    },
  ],
});
</script>
