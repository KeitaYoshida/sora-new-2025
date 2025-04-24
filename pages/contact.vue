<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <!-- ヘッダーセクション -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p class="text-base-content/70">
          ご質問、ご要望などございましたら、下記フォームよりお気軽にお問い合わせください。
        </p>
      </div>

      <!-- Netlify Forms用の隠しフォーム -->
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <!-- 実際のフォーム -->
      <form
        name="contact"
        method="POST"
        @submit.prevent="handleSubmit"
        class="space-y-6 bg-base-200 p-8 rounded-lg shadow-sm"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium"
              >お名前 <span class="text-error">*</span></span
            >
          </label>
          <input
            type="text"
            v-model="form.name"
            name="name"
            placeholder="草來 太郎"
            class="input input-bordered w-full bg-base-100"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium"
              >メールアドレス <span class="text-error">*</span></span
            >
          </label>
          <input
            type="email"
            v-model="form.email"
            name="email"
            placeholder="example@email.com"
            class="input input-bordered w-full bg-base-100"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium"
              >お問い合わせ内容 <span class="text-error">*</span></span
            >
          </label>
          <textarea
            v-model="form.message"
            name="message"
            placeholder="お問い合わせ内容をご記入ください"
            class="textarea textarea-bordered h-40 bg-base-100"
            required
          ></textarea>
        </div>

        <div class="form-control mt-8">
          <button
            type="submit"
            class="btn btn-primary w-full md:w-auto md:px-12 md:mx-auto"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">送信する</span>
            <span v-else class="loading loading-spinner"></span>
          </button>
        </div>
      </form>

      <!-- 送信完了メッセージ -->
      <div
        v-if="showSuccessMessage"
        class="mt-8 p-4 bg-success/10 text-success rounded-lg text-center"
      >
        <p class="font-medium">
          お問い合わせを受け付けました。内容を確認次第、ご連絡させていただきます。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccessMessage = ref(false);

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;

    // FormDataの作成
    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.entries(form.value).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Netlify Formsに送信
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });

    // フォームをリセット
    form.value = {
      name: "",
      email: "",
      message: "",
    };

    // 成功メッセージを表示
    showSuccessMessage.value = true;
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("送信に失敗しました。時間をおいて再度お試しください。");
  } finally {
    isSubmitting.value = false;
  }
};

// メタ情報の設定
definePageMeta({
  title: "お問い合わせ | 工房 草來舎",
  description:
    "工房 草來舎へのお問い合わせはこちらのフォームからお願いいたします。",
});

// ページ固有のhead情報
useHead({
  title: "お問い合わせ | 工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "工房 草來舎へのお問い合わせはこちらのフォームからお願いいたします。",
    },
  ],
});
</script>
