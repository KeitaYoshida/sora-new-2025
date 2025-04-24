<template>
  <div class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- ヘッダー部分 -->
      <div class="text-center mb-16">
        <h1 class="font-hannari text-4xl font-bold mb-6">
          特定商取引法に関する記載
        </h1>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <!-- コンテンツ部分 -->
      <div class="prose prose-lg max-w-none">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <tbody>
              <tr>
                <th class="w-1/4">名称</th>
                <td>工房 草來舎（コウボウ ソウライシャ）</td>
              </tr>
              <tr>
                <th class="">代表責任者</th>
                <td>大越　慶（おおごし　けい）</td>
              </tr>
              <tr>
                <th class="">事務所所在地</th>
                <td>長野県下伊那郡泰阜村6218-22　あんじゃね自然学校内</td>
              </tr>
              <tr>
                <th class="">電話番号</th>
                <td>
                  <p>0260-25-2171</p>
                  <p class="text-sm text-base-content/70 mt-2">
                    ※
                    作業中は電話に出られませんので、呼び出し（受付時間10:00~17:00）となります。まずはメールでご連絡ください。
                  </p>
                </td>
              </tr>
              <tr>
                <th class="">ＦＡＸ番号</th>
                <td>0260-25-2850</td>
              </tr>
              <tr>
                <th class="">メールアドレス</th>
                <td>
                  <a
                    href="mailto:soraisha.inf@gmail.com"
                    class="link link-primary"
                  >
                    soraisha.inf@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <th class="">ＵＲＬ</th>
                <td>
                  <a
                    href="https://soraisha.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link link-primary"
                  >
                    https://soraisha.netlify.app/
                  </a>
                </td>
              </tr>
              <tr>
                <th class="">配送・送料</th>
                <td>
                  <p>
                    配送はヤマト運輸を利用します。商品到着の時間指定はできますが、日にち指定はできません。
                  </p>
                  <p class="mt-2">
                    送料は全国一律1000円です。同一配送先で商品代金(税込)合計11000円以上で送料無料となります。
                  </p>
                  <p class="mt-2">海外発送は行っておりません。</p>
                  <p class="mt-2">
                    基本的にエアークッションで梱包し、ダンボールで発送します。申し訳ありませんがギフト包装には対応しておりません。
                  </p>
                </td>
              </tr>
              <tr>
                <th class="">お支払</th>
                <td>
                  <p>
                    WEBページでの購入は、クレジットカード・PayPal決済のみ対応しております。銀行振込をご希望の場合はお問い合わせください。
                  </p>
                  <p class="mt-2">
                    銀行振込の場合は前払いでお願いいたします。支払い期限は、ご注文日をいれて７日以内です。振込手数料はお客様負担となります。
                  </p>
                  <div class="mt-4">
                    <p class="font-bold">●ご利用できるカード</p>
                    <p class="mt-2">Visa　Mastercard　American Express</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th class="">返品・交換</th>
                <td>
                  <div class="space-y-4">
                    <div>
                      <p class="font-bold">
                        送料草來舎負担（着払い）で返品・交換を受け付けます：
                      </p>
                      <ul class="list-disc ml-6 mt-2">
                        <li>注文と違う商品が届いた場合</li>
                        <li>割れ、欠けなどの破損品が届いた場合</li>
                      </ul>
                    </div>

                    <div>
                      <p class="font-bold">
                        送料お客様負担で返品・交換を受け付けます：
                      </p>
                      <ul class="list-disc ml-6 mt-2">
                        <li>
                          HP上の写真と実際の商品のイメージが著しく異なる場合
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p class="font-bold">
                        ◆いずれの返品・交換も下記の要項を満たしたものでお願いします。
                      </p>
                      <ol class="list-decimal ml-6 mt-2">
                        <li>商品到着日を含み7日以内の発送。</li>
                        <li>未使用に限る。</li>
                        <li>発送前にその旨のメール連絡を入れてもらう。</li>
                      </ol>
                    </div>

                    <p>
                      ◆返品の場合は商品返送後、内容を確認して指定口座に返金。
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "特定商取引法に関する記載 | 工房 草來舎",
  meta: [
    {
      name: "description",
      content:
        "工房 草來舎の特定商取引法に基づく表記です。事業者の名称、連絡先、販売条件、送料、支払方法、返品・交換について記載しています。",
    },
  ],
});
</script>

<style scoped>
.table th {
  @apply align-top py-4;
}
.table td {
  @apply py-4;
}
</style>
