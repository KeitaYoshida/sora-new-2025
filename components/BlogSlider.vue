<template>
  <div class="w-full py-12 md:py-20">
    <div class="container mx-auto px-4">
      <div class="relative max-w-6xl mx-auto">
        <div class="p-6 w-full">
          <h3 class="text-4xl mb-2 font-bold text-center">
            工房 草來舎について
          </h3>
          <p class="line-clamp-2 text-center text-xl mt-4">
            自然豊かな環境の中で、一つ一つ丁寧に作品を制作しています。
            手作りの温もりと、使う人の心に寄り添うものづくりを心がけています。
          </p>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 },
          }"
          class="blog-swiper"
        >
          <!-- ブログ記事スライド -->
          <swiper-slide v-for="post in topContents" :key="post.slug">
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="block relative aspect-square group"
            >
              <div class="relative overflow-hidden blog-image-container h-full">
                <nuxt-img
                  :src="post.heroImage?.fields?.file?.url"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width="600"
                  height="600"
                  loading="lazy"
                  provider="contentful"
                  format="webp"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 flex items-end"
                >
                  <div class="text-white p-6 w-full">
                    <h3 class="font-hannari text-xl mb-2">{{ post.title }}</h3>
                    <time class="text-sm">{{
                      formatDate(post.publishDate)
                    }}</time>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getTopContents } from "~/utils/contentful";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Autoplay, Pagination];
const topContents = ref([]);

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
    const posts = await getTopContents();
    topContents.value = posts;
  } catch (error) {
    console.error("Error fetching top contents:", error);
  }
});
</script>

<style scoped>
.blog-swiper {
  padding: 20px 0;
}

.blog-image-container {
  border-radius: 20% 30% 30% 20% / 30% 30% 40% 20%;
  overflow: hidden;
}

:deep(.swiper-pagination-bullet) {
  background: theme("colors.primary");
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-pagination) {
  bottom: -5px;
}
</style>
