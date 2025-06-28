// src/config/links.ts
export const LINKS = {
  // アプリダウンロード
  appStore:
    "https://apps.apple.com/jp/app/vibery-%E5%8F%8B%E9%81%94%E4%BD%9C%E3%82%8A-%E8%B6%A3%E5%91%B3-%E5%90%8C%E6%80%A7%E9%99%90%E5%AE%9Asns/id6739957098",

  // ソーシャルメディア
  social: {
    threads:
      "https://www.threads.com/@vibery__official?igshid=NTc4MTIwNjQ2YQ==",
    instagram:
      "https://www.instagram.com/vibery__official?igsh=bWI5bzFoODg4eHNu&utm_source=qr",
    tiktok: "https://www.tiktok.com/@vibery.official0?_t=ZS-8xa0OsotYO8&_r=1",
  },

  // 内部ページ
  internal: {
    privacy: "/privacy",
    terms: "/terms",
  },

  // お問い合わせ
  contact: {
    email: "mailto:vibery.official.app@gmail.com",
  },

  // サイト情報
  site: {
    url: "https://vibery-site.vercel.app",
    name: "Vibery",
  },
} as const;

export type LinksType = typeof LINKS;
