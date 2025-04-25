<template>
  <div class="container mx-auto py-8 font-hannari">
    <div class="px-4">
      <h1 class="text-2xl md:text-3xl font-bold mb-6">記事一覧</h1>
    </div>
    <div class="divider"></div>
    <div v-if="loading" class="text-center py-8">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-else-if="error" class="alert alert-error mx-4">
      <span>{{ error }}</span>
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
    >
      <div v-if="!posts.length" class="col-span-full text-center py-8">
        No blog posts found.
      </div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="card bg-base-100 shadow-xl overflow-hidden group"
      >
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="relative block aspect-square overflow-hidden"
        >
          <figure class="relative w-full h-full">
            <nuxt-img
              :src="post.heroImage?.fields.file.url"
              :alt="post.title"
              provider="contentful"
              loading="lazy"
              width="800"
              height="800"
              fit="contain"
              class="w-full h-full object-contain bg-gray-50/80 transition-all duration-300 group-hover:scale-105"
            />
          </figure>
          <div
            class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent p-4 md:p-6 flex flex-col justify-end text-gray-800 transform transition-all duration-300 font-bold"
          >
            <div class="min-h-[120px] flex flex-col justify-end">
              <p
                class="text-sm text-gray-600 mb-2 transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                {{ formatDate(post.publishDate) }}
              </p>
              <div
                class="flex flex-wrap gap-2 mb-2 transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div class="badge badge-sm badge-primary whitespace-nowrap">
                  {{ post.category.name }}
                </div>
                <div
                  v-for="(tag, index) in post.tags"
                  :key="tag"
                  class="badge badge-sm badge-ghost whitespace-nowrap"
                  v-show="index < 2"
                >
                  {{ tag }}
                </div>
                <div
                  v-if="post.tags.length > 2"
                  class="badge badge-sm badge-ghost whitespace-nowrap"
                >
                  +{{ post.tags.length - 2 }}
                </div>
              </div>
              <h2
                class="card-title text-lg md:text-xl line-clamp-2 transform transition-transform duration-300 group-hover:-translate-y-1"
              >
                {{ post.title }}
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBlogs } from "~/utils/contentful";
import type { BlogPost } from "~/types/contentful";

const posts = ref<BlogPost[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    console.log("Fetching blog posts...");
    posts.value = await getBlogs();
    console.log("Fetched posts:", posts.value);
  } catch (e) {
    console.error("Error fetching posts:", e);
    error.value = "Failed to load blog posts";
  } finally {
    loading.value = false;
  }
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

definePageMeta({
  title: "Blog Posts",
  description: "Read our latest blog posts",
});
</script>

<style scoped>
.card {
  @media (hover: none) {
    .absolute {
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        transparent 100%
      );

      .opacity-0 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>
