<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <!-- ヘッダーセクション -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p class="text-base-content/70">
          ご質問、ご要望などございましたら、下記のメールアドレスまでお気軽にお問い合わせください。
        </p>
      </div>

      <!-- メールアドレス表示 -->
      <div class="bg-base-200 p-8 rounded-lg shadow-sm text-center">
        <p class="text-lg mb-4">メールアドレス</p>
        <a
          href="mailto:soraisha.inf@gmail.com"
          class="text-primary hover:text-primary-focus text-xl font-medium"
        >
          soraisha.inf@gmail.com
        </a>
        <p class="mt-4 text-sm text-base-content/70">
          ※フォームは現在メンテナンス中です。直接メールにてお問い合わせください。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// メタ情報の設定
definePageMeta({
  title: "お問い合わせ | 工房 草來舎",
  description:
    "工房 草來舎へのお問い合わせはこちらのメールアドレスからお願いいたします。",
});

// ページ固有のhead情報
useHead({
  title: "お問い合わせ | 工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "工房 草來舎へのお問い合わせはこちらのメールアドレスからお願いいたします。",
    },
  ],
});
</script>
