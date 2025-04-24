<template>
  <section class="w-full py-16 bg-base-100">
    <div class="container mx-auto">
      <div class="max-w-6xl mx-auto md:px-4">
        <h2 class="font-hannari text-4xl font-bold text-center mb-12">
          展示会情報
        </h2>
        <div v-if="exhibitionPost" class="relative">
          <NuxtLink :to="`/blog/${exhibitionPost.slug}`" class="block group">
            <div class="grid md:grid-cols-2 gap-8 items-start">
              <!-- 画像部分 -->
              <div class="relative overflow-hidden md:rounded-xl h-[400px]">
                <img
                  :src="`https:${exhibitionPost.heroImage?.fields?.file?.url}`"
                  :alt="exhibitionPost.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <!-- テキスト部分 -->
              <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge-primary badge-lg">{{
                    exhibitionPost.category.name
                  }}</span>
                  <span
                    v-for="tag in exhibitionPost.tags"
                    :key="tag"
                    class="badge badge-lg px-3 py-1.5"
                    >{{ tag }}</span
                  >
                </div>
                <h3 class="font-hannari text-2xl font-bold mb-4">
                  {{ exhibitionPost.title }}
                </h3>
                <p class="text-base-content/80 mb-4 line-clamp-2">
                  {{ exhibitionPost.description }}
                </p>
                <div
                  class="prose prose-sm text-base-content/80 mb-4 line-clamp-4"
                  v-html="renderedContent"
                ></div>
                <time class="text-sm text-base-content/60 block mb-6">
                  {{ formatDate(exhibitionPost.publishDate) }}
                </time>
                <span class="btn btn-primary">
                  詳しく見る
                  <i class="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div v-else class="text-center py-12 text-base-content/70">
          現在開催予定の展示会はありません
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getLatestExhibitionPost } from "~/utils/contentful";
import { marked } from "marked";

const exhibitionPost = ref(null);

const renderedContent = computed(() => {
  if (!exhibitionPost.value?.body) return "";
  return marked(exhibitionPost.value.body);
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(async () => {
  try {
    exhibitionPost.value = await getLatestExhibitionPost();
  } catch (error) {
    console.error("Error fetching exhibition post:", error);
  }
});
</script>

<style scoped>
.prose :deep(p) {
  margin: 0;
}
</style>
