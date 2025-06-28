import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title:
    "Vibery - 同性の友達づくりアプリ | 感性で繋がる新しいコミュニケーション",
  description:
    "Viberyは同性限定の友達づくりアプリ。恋愛ではなく純粋な友情を育む、安心・安全なコミュニケーション環境を提供します。趣味タグマッチングで価値観の合う友達を見つけよう。",
  keywords:
    "SNS, 友達作り, 同性限定, マッチングアプリ, 趣味, 感性SNS, 安心, 匿名",
  authors: [{ name: "Vibery運営事務局" }],
  creator: "Vibery運営事務局",
  publisher: "Vibery運営事務局",
  robots: "index, follow",
  openGraph: {
    title: "Vibery - 同性の友達づくりアプリ",
    description:
      "感性で繋がる、新しい友達づくり。同性限定で安心して趣味や価値観を共有できるコミュニケーションアプリ。",
    url: "https://vibery-site.vercel.app",
    siteName: "Vibery",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibery - 同性の友達づくりアプリ",
    description:
      "感性で繋がる、新しい友達づくり。同性限定で安心して趣味や価値観を共有できるコミュニケーションアプリ。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="pt-16 md:pt-20 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
