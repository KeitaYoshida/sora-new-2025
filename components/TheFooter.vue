<template>
  <footer
    class="fixed bottom-0 left-0 right-0 bg-base-100 border-t transform transition-transform duration-300 z-50"
    :class="{ 'translate-y-full': !isVisible }"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="text-base-content/70">© 2025, 工房 草來舎</div>
        <div class="flex gap-4 text-sm">
          <NuxtLink
            to="/privacy-policy"
            class="text-base-content/70 hover:text-primary transition-colors"
          >
            個人情報保護方針
          </NuxtLink>
          <NuxtLink
            to="/legal"
            class="text-base-content/70 hover:text-primary transition-colors"
          >
            特定商取引法に関する記載
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  // 下スクロールで表示、上スクロールで非表示
  if (currentScrollY > lastScrollY) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }

  lastScrollY = currentScrollY;
};

// スクロールイベントの登録と解除
onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
