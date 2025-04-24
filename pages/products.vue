<template>
  <div class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- ヘッダー部分 -->
      <div class="text-center mb-16">
        <h1 class="font-hannari text-4xl font-bold mb-6">商品一覧</h1>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <!-- お知らせセクション -->
      <OrderNoticeSection class="mb-16" />

      <!-- 商品リスト -->
      <!-- <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="card bg-base-100 shadow-xl">
          <figure class="px-6 pt-6">
            <div
              class="w-full aspect-square bg-base-200 rounded-xl flex items-center justify-center"
            >
              <span class="text-3xl text-base-content/50">Product {{ i }}</span>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product {{ i }}</h2>
            <p class="text-base-content/70">
              {{
                i === 1
                  ? "This is a sample product description. Features and details go here."
                  : i === 2
                  ? "Another amazing product with great features and capabilities."
                  : "Premium quality product with outstanding performance."
              }}
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "商品一覧 | 工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "工房 草來舎の商品一覧ページです。手作りの陶器、食器、花瓶などを展示しています。",
    },
  ],
});
</script>
