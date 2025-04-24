<template>
  <div class="min-h-screen bg-base-100" data-theme="emerald">
    <!-- ヘッダー -->
    <header
      ref="header"
      class="fixed top-0 left-0 right-0 bg-base-100/80 backdrop-blur z-50 transition-transform duration-300"
      :class="{ '-translate-y-full': isHeaderHidden }"
    >
      <div
        class="container mx-auto px-4 h-24 flex items-center justify-between"
      >
        <!-- ロゴ -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/sora-logo2.webp" alt="工房 草来舎" class="h-16" />
        </NuxtLink>

        <!-- 右メニュー（PC） -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="hover:text-primary transition-colors text-lg"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- ハンバーガーメニュー（SP） -->
        <button
          class="md:hidden btn btn-ghost btn-circle"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </header>

    <!-- モバイルメニュー -->
    <div
      class="fixed inset-0 bg-base-100 z-40 transform transition-transform duration-300 md:hidden"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="container mx-auto px-4 py-20">
        <nav class="flex flex-col space-y-4">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-lg hover:text-primary transition-colors"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- 左サイドバー -->
    <div
      class="fixed left-6 top-1/2 -translate-y-1/2 space-y-6 z-30 hidden md:block"
    >
      <a
        href="https://twitter.com/share?url=https://soraisha.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-base-content/70 hover:text-white transition-colors flex items-center justify-center w-8 h-8"
        title="Xでシェア"
      >
        <i class="fa-brands fa-x-twitter text-2xl"></i>
      </a>
      <a
        href="https://www.facebook.com/soraisha/#"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-base-content/70 hover:text-[#1877F2] transition-colors flex items-center justify-center w-8 h-8"
        title="Facebook"
      >
        <i class="fab fa-facebook text-2xl"></i>
      </a>
      <a
        href="https://www.instagram.com/soraisha1991"
        target="_blank"
        rel="noopener noreferrer"
        class="block text-base-content/70 hover:text-[#E4405F] transition-colors flex items-center justify-center w-8 h-8"
        title="Instagram"
      >
        <i class="fab fa-instagram text-2xl"></i>
      </a>
    </div>

    <!-- メインコンテンツ -->
    <main class="pt-24 pb-32">
      <!-- コンテンツラッパー -->
      <div class="container mx-auto">
        <slot />
      </div>
    </main>

    <!-- フッター -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// メニュー項目
const menuItems = [
  { label: "TOP", path: "/" },
  { label: "商品", path: "/products" },
  { label: "ブログ", path: "/blog" },
  { label: "お問い合わせ", path: "/contact" },
];

// SNSリンク
const socialLinks = [
  {
    icon: "fa-brands fa-square-x-twitter",
    url: "https://twitter.com/share?url=https://soraisha.netlify.app/",
    hoverColor: "#1DA1F2",
    title: "Xでシェア",
  },
  {
    icon: "fab fa-facebook",
    url: "https://www.facebook.com/soraisha/#",
    hoverColor: "#1877F2",
    title: "Facebook",
  },
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/soraisha1991",
    hoverColor: "#E4405F",
    title: "Instagram",
  },
];

// ヘッダーの表示制御
const header = ref<HTMLElement | null>(null);
const isHeaderHidden = ref(false);
const lastScrollPosition = ref(0);
const isMenuOpen = ref(false);

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition < 0) return;

  // スクロール方向に応じてヘッダーの表示/非表示を切り替え
  if (currentScrollPosition > lastScrollPosition.value) {
    isHeaderHidden.value = true; // 下スクロールで非表示
  } else {
    isHeaderHidden.value = false; // 上スクロールで表示
  }
  lastScrollPosition.value = currentScrollPosition;
};

// スクロールイベントの登録/解除
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
:root {
  color-scheme: light;
}

/* DaisyUIのテーマ変数を確実に適用 */
[data-theme="emerald"] {
  background-color: hsl(var(--b1));
  color: hsl(var(--bc));
}
</style>

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
