<template>
  <div class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- ヘッダー部分 -->
      <div class="text-center mb-16">
        <h1 class="font-hannari text-4xl font-bold mb-6">個人情報保護方針</h1>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <!-- コンテンツ部分 -->
      <div class="prose prose-lg max-w-none">
        <!-- 1. 個人情報の収集・利用について -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            1. 個人情報の収集・利用について
          </h2>
          <p class="text-base-content/80">
            弊社は、個人情報の収集をお客様の同意を得た上で適法かつ公正な手段によって行います。ご提供頂いた個人情報は、下記の目的の範囲内で使用します。
          </p>
          <ul class="list-disc pl-6 mt-2">
            <li>
              ご請求もしくはご購入頂いた各種資料・作成物・商品・その他の送付
            </li>
          </ul>
        </section>

        <!-- 2. 個人情報の管理について -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            2. 個人情報の管理について
          </h2>
          <p class="text-base-content/80">
            弊社は管理下にある個人情報の紛失・改ざん・漏洩・不正アクセスなどを防止するために、以下のような適正かつ厳格なセキュリティ対策を実施します。
          </p>
          <ul class="list-disc pl-6 mt-2">
            <li>個人情報保護責任者の配置</li>
            <li>全ての従業員に対して継続的な教育啓蒙活動</li>
            <li>合理的な技術的対策</li>
            <li>
              個人情報を、権限の無い者がアクセスできない安全な環境下に保管
            </li>
          </ul>
        </section>

        <!-- 3. 個人情報の第三者への提供について -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            3. 個人情報の第三者への提供について
          </h2>
          <p class="text-base-content/80">
            弊社はご提供いただいた個人情報を責任を持って管理し、お客様からご同意をいただいた場合や正当な理由がある場合を除いて第三者に公開・提供することはございません。
          </p>
        </section>

        <!-- 4. お客様からのお問い合わせについて -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            4. お客様からのお問い合わせについて
          </h2>
          <p class="text-base-content/80">
            お客様が個人情報の照会・訂正・削除などを希望される場合には、合理的な範囲内ですみやかに対応します。
          </p>
        </section>

        <!-- 5. 法令等の遵守について -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            5. 法令等の遵守について
          </h2>
          <p class="text-base-content/80">
            弊社は、個人情報保護のための関連法令およびその他の規範を誠実に遵守します。
          </p>
        </section>

        <!-- 6. お問い合わせ先 -->
        <section class="mb-12">
          <h2 class="font-hannari text-2xl font-bold mb-4">
            6. お問い合わせ先
          </h2>
          <p class="text-base-content/80">
            個人情報保護に関するお問い合わせは、下記までご連絡下さい。通常の本方針に関する通知は、本ページへの掲示をもって行います。
          </p>
          <div class="bg-base-200 p-6 rounded-lg mt-4">
            <h3 class="font-bold mb-2">工房 草來舎</h3>
            <p>
              〒399-1801　長野県下伊那郡泰阜村6218－22 　あんじゃね自然学校内
            </p>
            <p class="mt-2">
              電話番号:
              <a href="tel:0260-25-2171" class="link link-primary"
                >0260-25-2171</a
              >
            </p>
            <p>FAX番号: 0260-25-2850</p>
            <div class="mt-4 p-4 bg-base-300 rounded">
              <p class="text-sm">
                ※制作中は直接電話に出られませんので、取り次ぎとなります。まずは、
                <NuxtLink to="/contact" class="link link-primary">
                  フォーム
                </NuxtLink>
                よりお問合せください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "個人情報保護方針 | 工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "工房 草來舎の個人情報保護方針について説明しています。個人情報の収集・利用、管理、第三者提供、お問い合わせ方法などについて詳しく記載しています。",
    },
  ],
});
</script>
