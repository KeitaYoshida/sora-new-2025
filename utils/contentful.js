import { createClient } from "contentful";
import { useRuntimeConfig } from "nuxt/app";

// Contentfulクライアントの初期化を条件付きに
const getContentfulClient = () => {
  const config = useRuntimeConfig();

  if (
    !config.public.contentfulSpaceId ||
    !config.public.contentfulAccessToken
  ) {
    console.warn("Contentful credentials not set, returning dummy client");
    return null;
  }

  return createClient({
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  });
};

// 1. ブログ記事の取得（シンプルな形式）
// 用途：ブログ一覧ページの表示
export const getBlogs = async () => {
  const client = getContentfulClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-sys.createdAt"],
    });

    return entries.items.map((item) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category?.fields
        ? {
            name: item.fields.category.fields.name,
            slug: item.fields.category.fields.slug,
            sort: item.fields.category.fields.sort,
            difinition: item.fields.category.fields.difinition,
          }
        : {
            name: "Uncategorized",
            slug: "uncategorized",
            sort: 999,
            difinition: "No category assigned",
          },
      heroImage: item.fields.heroImage,
      description: item.fields.description || "",
      body: item.fields.body || "",
      publishDate: item.fields.publishDate || new Date().toISOString(),
      tags: item.fields.tags || [],
      topContents: item.fields.topContents || false,
      topSortNum: item.fields.topSortNum || 0,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// 2. トップコンテンツの取得
// 用途：トップページのブログスライダー表示
export const getTopContents = async () => {
  const client = getContentfulClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.topContents": true,
      order: ["fields.topSortNum"],
    });

    return entries.items.map((item) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category?.fields
        ? {
            name: item.fields.category.fields.name,
            slug: item.fields.category.fields.slug,
            sort: item.fields.category.fields.sort,
            difinition: item.fields.category.fields.difinition,
          }
        : {
            name: "Uncategorized",
            slug: "uncategorized",
            sort: 999,
            difinition: "No category assigned",
          },
      heroImage: item.fields.heroImage,
      description: item.fields.description || "",
      body: item.fields.body || "",
      publishDate: item.fields.publishDate || new Date().toISOString(),
      tags: item.fields.tags || [],
      topContents: item.fields.topContents || false,
      topSortNum: item.fields.topSortNum || 0,
    }));
  } catch (error) {
    console.error("Error fetching top contents:", error);
    return [];
  }
};

// 3. ブログ記事の取得（Contentful形式）
// 用途：ブログ一覧ページの表示（Contentful形式）
export const getBlogPosts = async () => {
  const client = getContentfulClient();
  if (!client) return { items: [], total: 0, skip: 0, limit: 0 };

  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
    });
    return response;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { items: [], total: 0, skip: 0, limit: 0 };
  }
};

// 4. 新着情報の取得
// 用途：トップページの新着情報セクション表示
export const getRecentPosts = async () => {
  const client = getContentfulClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit: 8,
    });

    return entries.items.map((item) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category?.fields
        ? {
            name: item.fields.category.fields.name,
            slug: item.fields.category.fields.slug,
            sort: item.fields.category.fields.sort,
            difinition: item.fields.category.fields.difinition,
          }
        : {
            name: "Uncategorized",
            slug: "uncategorized",
            sort: 999,
            difinition: "No category assigned",
          },
      heroImage: item.fields.heroImage,
      description: item.fields.description || "",
      body: item.fields.body || "",
      publishDate: item.fields.publishDate || new Date().toISOString(),
      tags: item.fields.tags || [],
      topContents: item.fields.topContents || false,
      topSortNum: item.fields.topSortNum || 0,
    }));
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

// 5. カテゴリーの取得
// 用途：カテゴリー一覧の表示
export const getCategories = async () => {
  const client = getContentfulClient();
  if (!client) return { items: [], total: 0, skip: 0, limit: 0 };

  try {
    const response = await client.getEntries({
      content_type: "category",
      order: ["fields.sort"],
    });
    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { items: [], total: 0, skip: 0, limit: 0 };
  }
};

// 6. カレンダーの取得
// 用途：カレンダー情報の表示
export const getCalendars = async () => {
  const client = getContentfulClient();
  if (!client) return { items: [], total: 0, skip: 0, limit: 0 };

  try {
    const response = await client.getEntries({
      content_type: "calendar",
      order: ["-fields.date"],
    });
    return response;
  } catch (error) {
    console.error("Error fetching calendars:", error);
    return { items: [], total: 0, skip: 0, limit: 0 };
  }
};

// 7. 個別記事の取得
// 用途：ブログ記事詳細ページの表示
export const getBlogPostBySlug = async (slug) => {
  const client = getContentfulClient();
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (!entries.items.length) return null;

    const item = entries.items[0];
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category?.fields
        ? {
            name: item.fields.category.fields.name,
            slug: item.fields.category.fields.slug,
            sort: item.fields.category.fields.sort,
            difinition: item.fields.category.fields.difinition,
          }
        : {
            name: "Uncategorized",
            slug: "uncategorized",
            sort: 999,
            difinition: "No category assigned",
          },
      heroImage: item.fields.heroImage,
      description: item.fields.description || "",
      body: item.fields.body || "",
      publishDate: item.fields.publishDate || new Date().toISOString(),
      tags: item.fields.tags || [],
      topContents: item.fields.topContents || false,
      topSortNum: item.fields.topSortNum || 0,
    };
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
};

// 8. カテゴリーで絞り込み
// 用途：カテゴリーページの表示
export const getBlogPostsByCategory = async (categorySlug) => {
  const client = getContentfulClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.category.fields.slug": categorySlug,
      order: ["-fields.publishDate"],
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
};

// 9. タグで絞り込み
// 用途：タグページの表示
export const getBlogPostsByTag = async (tag) => {
  const client = getContentfulClient();
  if (!client) return [];

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.tags": tag,
      order: ["-fields.publishDate"],
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching posts by tag:", error);
    return [];
  }
};

// 展示会タグの最新記事を1件取得
export const getLatestExhibitionPost = async () => {
  const client = getContentfulClient();
  if (!client) return null;

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.tags": "展示会",
      order: ["-fields.publishDate"],
      limit: 1,
    });

    if (entries.items.length === 0) return null;

    const item = entries.items[0];
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      category: item.fields.category?.fields
        ? {
            name: item.fields.category.fields.name,
            slug: item.fields.category.fields.slug,
            sort: item.fields.category.fields.sort,
            difinition: item.fields.category.fields.difinition,
          }
        : {
            name: "Uncategorized",
            slug: "uncategorized",
            sort: 999,
            difinition: "No category assigned",
          },
      heroImage: item.fields.heroImage,
      description: item.fields.description || "",
      body: item.fields.body || "",
      publishDate: item.fields.publishDate || new Date().toISOString(),
      tags: item.fields.tags || [],
      topContents: item.fields.topContents || false,
      topSortNum: item.fields.topSortNum || 0,
    };
  } catch (error) {
    console.error("Error fetching latest exhibition post:", error);
    return null;
  }
};
