<template>
  <div class="w-full bg-base-200 py-12 md:py-20 rounded-xl">
    <div class="container mx-auto px-4">
      <h2 class="font-hannari text-2xl md:text-3xl text-center mb-8">
        新着情報
      </h2>

      <div
        class="max-w-3xl mx-auto bg-base-100 rounded-xl shadow-lg p-6 md:p-8"
      >
        <ul class="space-y-4">
          <li
            v-for="post in recentPosts"
            :key="post.slug"
            class="border-b border-base-300 last:border-0 pb-4 last:pb-0"
          >
            <div
              class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
            >
              <time class="text-sm text-base-content/70">{{
                formatDate(post.publishDate)
              }}</time>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="font-hannari hover:text-primary"
              >
                {{ post.title }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecentPosts } from "~/utils/contentful";

const recentPosts = ref([]);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(async () => {
  try {
    const posts = await getRecentPosts();
    recentPosts.value = posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
  }
});
</script>
