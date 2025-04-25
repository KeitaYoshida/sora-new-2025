<template>
  <div
    class="relative w-full bg-base-200 py-12 md:py-24 md:rounded-xl overflow-hidden group"
  >
    <!-- 背景画像 -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/main-back.jpg"
        alt=""
        class="w-full h-full object-cover opacity-20 blur-sm transition-all duration-700 group-hover:opacity-25 group-hover:blur-[6px] group-hover:scale-105"
      />
    </div>

    <div class="container relative z-10 md:px-4">
      <div
        class="relative flex flex-col md:flex-row justify-between items-center md:items-start min-h-[500px] max-w-[1200px] mx-auto md:mt-16"
      >
        <!-- 左側の縦書きテキスト -->
        <div class="hidden md:block w-[300px]">
          <div
            class="writing-vertical font-hannari text-xl text-[#2B5329] font-bold text-shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
          >
            <p>薪で長時間焼き込んだ丈夫さ</p>
            <p>灰から生まれた釉の奥深い美しさ</p>
            <p>昔ながらの素朴な技法と手間を惜しまず</p>
            <p>自然の恵みを生かした器を作っています</p>
          </div>
        </div>

        <!-- 中央の壺画像 -->
        <div class="w-48 md:w-56 relative md:mt-10">
          <img
            src="/logo.webp"
            alt="工房草來舎"
            class="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <!-- 右側の縦書きテキスト -->
        <div class="hidden md:block w-[300px]">
          <div
            class="writing-vertical font-hannari text-xl text-[#2B5329] font-bold text-shadow-lg transition-transform duration-700 group-hover:scale-[1.02]"
          >
            <p>工房草來舎は大婦ふたりの陶芸工房</p>
            <p>信州伊那谷、泰阜村に登り窯を築き</p>
            <p>釉は灰から仕立てた灰釉と</p>
            <p>薪の灰からできた自然釉</p>
          </div>
        </div>

        <!-- モバイル用の横書きテキスト -->
        <div
          class="md:hidden mt-12 font-hannari text-center space-y-4 text-[#2B5329] font-bold text-lg transition-transform duration-700 group-hover:scale-[1.02]"
        >
          <p>工房草來舎は大婦ふたりの陶芸工房</p>
          <p>信州伊那谷、泰阜村に登り窯を築き</p>
          <p>釉は灰から仕立てた灰釉と</p>
          <p>薪の灰からできた自然釉</p>
          <p class="mt-8">薪で長時間焼き込んだ丈夫さ</p>
          <p>灰から生まれた釉の奥深い美しさ</p>
          <p>昔ながらの素朴な技法と手間を惜しまず</p>
          <p>自然の恵みを生かした器を作っています</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-align: left;
  height: 400px;
  line-height: 2.5;
  margin: 0 auto;
}

.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* アニメーションの最適化 */
.group:hover * {
  will-change: transform, filter, opacity;
}
</style>

<script setup lang="ts">
// 必要に応じてpropsやcomposablesを追加
</script>
