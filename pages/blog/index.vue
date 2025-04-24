<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">記事一覧</h1>
    <div v-if="loading" class="text-center py-8">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-else-if="error" class="alert alert-error">
      <span>{{ error }}</span>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-if="!posts.length" class="col-span-full text-center py-8">
        No blog posts found.
      </div>
      <div
        v-for="post in posts"
        :key="post.id"
        class="card bg-base-100 shadow-xl overflow-hidden"
      >
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="hover:opacity-95 transition-all duration-300 block"
        >
          <figure class="relative w-full aspect-[4/3] overflow-hidden">
            <nuxt-img
              :src="post.heroImage?.fields.file.url"
              :alt="post.title"
              provider="contentful"
              loading="lazy"
              width="800"
              height="600"
              fit="contain"
              class="w-full h-full object-contain bg-gray-100 rounded-t-xl transition-transform duration-300 hover:scale-105"
            />
          </figure>
        </NuxtLink>
        <div class="card-body">
          <h2 class="card-title">{{ post.title }}</h2>
          <p class="text-sm text-gray-500">
            {{ formatDate(post.publishDate) }}
          </p>
          <div class="badge badge-primary">{{ post.category.name }}</div>
          <p>{{ post.description }}</p>
          <div class="card-actions justify-end">
            <NuxtLink :to="`/blog/${post.slug}`" class="btn btn-primary"
              >Read More</NuxtLink
            >
          </div>
        </div>
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
