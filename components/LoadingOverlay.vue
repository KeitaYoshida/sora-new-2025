<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-base-100/90 backdrop-blur-sm z-[9999] flex items-center justify-center"
    >
      <div class="text-center">
        <div class="loading loading-spinner loading-lg text-primary"></div>
        <p class="mt-4 font-hannari text-lg text-base-content/80">Loading...</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

// 画像の読み込み状態を監視する関数
const checkImagesLoaded = () => {
  const images = document.getElementsByTagName("img");
  let loadedImages = 0;
  const totalImages = images.length;

  if (totalImages === 0) {
    isLoading.value = false;
    return;
  }

  const imageLoaded = () => {
    loadedImages++;
    if (loadedImages === totalImages) {
      isLoading.value = false;
    }
  };

  Array.from(images).forEach((img) => {
    if (img.complete) {
      imageLoaded();
    } else {
      img.addEventListener("load", imageLoaded);
      img.addEventListener("error", imageLoaded); // エラー時も読み込み完了とみなす
    }
  });
};

// ページ遷移時のローディング制御
const router = useRouter();

router.beforeEach(() => {
  isLoading.value = true;
});

router.afterEach(() => {
  // ページ遷移後、DOM更新を待ってから画像チェックを開始
  nextTick(() => {
    checkImagesLoaded();
    // 3秒後に強制的にローディングを終了（フォールバック）
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  });
});

// 初期表示時の処理
onMounted(() => {
  checkImagesLoaded();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
