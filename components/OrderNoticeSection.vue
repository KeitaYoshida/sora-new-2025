<template>
  <section class="w-full py-16">
    <div class="container mx-auto md:px-4">
      <div class="max-w-4xl mx-auto bg-base-200 md:rounded-xl p-8 md:p-12">
        <div class="text-center">
          <h2 class="font-hannari text-3xl font-bold mb-6">
            商品のご注文について
          </h2>
          <div class="prose prose-lg mx-auto">
            <p class="mb-6 text-base-content/80">
              現在、より良いサービスをご提供するため<br
                class="hidden md:block"
              />
              オンラインショップのリニューアルを進めております。
            </p>
            <p class="text-base-content/80">
              商品ページは一時的に停止させていただいておりますが、<br
                class="hidden md:block"
              />
              準備が整い次第、新しい形でご案内させていただきます。
            </p>
          </div>
          <div class="mt-8 p-6 bg-base-100 rounded-lg inline-block text-left">
            <h3 class="font-bold mb-4">工房 草來舎</h3>
            <p class="text-base-content/80">
              〒399-1801　長野県下伊那郡泰阜村6218－22<br />
              あんじゃね自然学校内
            </p>
            <div class="mt-4 space-y-2">
              <p class="font-medium">
                <i class="fas fa-phone-alt mr-2"></i>
                <a
                  href="tel:0260-25-2171"
                  class="hover:text-primary transition-colors"
                  >0260-25-2171</a
                >
              </p>
              <p class="font-medium">
                <i class="fas fa-fax mr-2"></i>
                <span>0260-25-2850</span>
              </p>
            </div>
            <div class="mt-4 p-4 bg-base-200 rounded text-sm">
              <p>
                ※制作中は直接電話に出られませんので、取り次ぎとなります。<br />
                まずは、
                <NuxtLink
                  to="/contact"
                  class="text-primary hover:text-primary-focus transition-colors"
                >
                  フォーム
                </NuxtLink>
                よりお問合せください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
